function doShit(){
  var request = require('request'),
  	cheerio = require('cheerio'),
  	urls = [];

  var types = ["shirt", "pants", "jackets", "shoes"];
  var occassions = ["casual", "business", "summer", "winter", "sport"];
  var colors = ["black", "white", "grey", "gray", "red", "orange", "yellow", "green", "blue", "violet", "pink", "purple", "brown"];
  var styles = [["button", "v-neck", "fullsleeve", "t-shirt"],
  				["flannel", "windbreaker", "sports", "hoodie"],
  				["jeans", "slacks", "shorts", "khaki", "sweatpant"],
  				["tennis", "flat", "skate", "fashion"]];
  var fabrics = ["cotton", "denim", "leather", "nylon", "polyster"];
  var type = 0;

  var link = $('#weblink').val();
  


  request(link, function(err, resp, body){ //
  	if(!err && resp.statusCode == 200){
  		var $ = cheerio.load(body);
  		var text = $.text().toLowerCase().replace(/\s+/g, '-');
  		text = text.substring(text.length/4, 3*text.length/4);
  		getType(text); // types[type]
  		eval("searchArray(text, occassions)");

  		//console.log(text);
      $("#type").val(type+1);
  		$("#occasion").val(searchArray(text, occassions));
      $("#color").val(searchArray(text, colors));
      $("#style").val(searchArray(text, styles[type]));
      $("#fabric").val(searchArray(text, fabrics));

      console.log(types[type])
      console.log(searchArray(text, styles[type]))

  	}
  });


  function getType(text){
  	for (i = 0; i < types.length; i++) {
  		if (link.toLowerCase().includes(types[i]) || text.includes(types[i])){
  			type = i;
  			return;
  		}
  		for (k = 0; k < styles[i].length; k++) {
  			if (text.includes(styles[i][k])) {
  				type = i;
  				return;
  			}
  		}
  	}
  };
  function searchArray(text, array){
  	for (i = 0; i < occassions.length; i++){
  		if (text.includes(array[i])) return array[i];
  	}
  	return array[0]
  };
}
