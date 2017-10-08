function initSelectors(){
 // next 2 statements should generate error message, see console
 MAIN.createRelatedSelector();
 MAIN.createRelatedSelector(document.querySelector('#type') );

 //countries
 MAIN.createRelatedSelector
     ( document.querySelector('#type')           // from select element
      ,document.querySelector('#style')      // to select element
      ,{                                               // values object
        shirt: ['button','v-neck','long sleeve','t-shirt'],
        pants: ['jeans','slacks','shorts','khaki','sweatpant'],
        jackets: ['flannel','windbreaker','sports','hoodie'],
        shoes: ['tennis','flat','skate','fashion']

      }
      ,function(a,b){return a>b ? 1 : a<b ? -1 : 0;}   // sort method
 );
}

//create MAIN namespace
(function(ns){ // don't pollute the global namespace

 function create(from, to, obj, srt){
  if (!from) {
         throw CreationError('create: parameter selector [from] missing');
  }
  if (!to) {
         throw CreationError('create: parameter related selector [to] missing');
  }
  if (!obj) {
         throw CreationError('create: related filter definition object [obj] missing');
  }

  //retrieve all options from obj and add it
  obj.all = (function(o){
     var a = [];
     for (var l in o) {
       a = /array/i.test (o[l].constructor) ? a.concat(o[l]) : a;
     }
     return a.sort(srt);
  }(obj));
 // initialize and populate to-selector with all
  populator.call( from
                  ,null
                  ,to
                  ,obj
                  ,srt
  );

  // assign handler
  from.onchange = populator;

  function initStatics(fn,obj){
   for (var l in obj) {
       if (obj.hasOwnProperty(l)){
           fn[l] = obj[l];
       }
   }
   fn.initialized = true;
  }

 function populator(e, relatedto, obj, srt){
    // set pseudo statics
    var self = populator;
    if (!self.initialized) {
        initStatics(self,{optselects:obj,optselectsall:obj.all,relatedTo:relatedto,sorter:srt || false});
    }

    if (!self.relatedTo){
        throw 'not related to a selector';
    }
    // populate to-selector from filter/all
    var optsfilter = this.selectedIndex < 1
                   ? self.optselectsall
                   : self.optselects[this.options[this.selectedIndex].firstChild.nodeValue]
       ,cselect = self.relatedTo
       ,opts = cselect.options;
    if (self.sorter) optsfilter.sort(self.sorter);
    opts.length = 0;
    for (var i=0;i<optsfilter.length;i+=1){
        opts[i] = new Option(optsfilter[i],i);
    }
  }
 }

 // custom Error
 function CreationError(mssg){
     return {name:'CreationError',message:mssg};
 }

 // return the create method with some error handling
 window[ns] = {
     createRelatedSelector: function(from,to,obj,srt) {
          try {
              if (arguments.length<1) {
                 throw CreationError('no parameters');
              }
              create.call(null,from,to,obj,srt);
          }
          catch(e) { console.log('createRelatedSelector ->',e.name,'\n'
                                   + e.message +
                                   '\ncheck parameters'); }
        }
 };
}('MAIN'));
//initialize
initSelectors();
