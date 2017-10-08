var fetch = require('node-fetch');
var request = require('request');

var types = ["shirt", "jacket", "pants", "shoes"];
var occassions = ["casual", "business", "summer", "winter", "sport"];
var colors = ["black", "white", "grey", "gray", "red", "orange", "yellow", "green", "blue", "violet", "pink", "purple", "brown"];
var styles = [["button", "v-neck", "fullsleeve", "t-shirt"],
        ["flannel", "windbreaker", "sports", "hoodie"],
        ["jeans", "slacks", "shorts", "khaki", "sweatpant"],
        ["tennis", "flat", "skate", "fashion"]];
var fabrics = ["cotton", "denim", "leather", "nylon", "polyster"];
var input = {"type": 'shirt',
            "occassions": 'casual',
            "color": 'black',
            "style": 't-shirt',
            "fabric": 'cotton'};

var shirtInput = true;

var shirts = [];
var jackets = [];
var shoes = [];
var pants = [];

var wardrobe = [];

mongoShirts();

/*mongoPants();
mongoShoes();
mongoJackets();*/

var wardrobe = [];

/*var inputAsList = goodShirts();
var matches = allMatches();*/

//readMongo('pants');

function mongoShirts() {
  var myHeaders = new fetch.Headers();

  var myInit = { method: 'GET', headers: myHeaders, };

  fetch('http://localhost:5000/shirtsnew', myInit).then(function(response) {
    //console.log(response.body);
    return response.json();
  }).then(function(text) {
    shirts = text;
    //console.log(shirts);
  });
  mongoPants();
}

function mongoPants() {
  var myHeaders = new fetch.Headers();

  var myInit = { method: 'GET', headers: myHeaders, };

  fetch('http://localhost:5000/pants', myInit).then(function(response) {
    //console.log(response.body);
    return response.json();
  }).then(function(text) {
    pants = text;
    //console.log(pants);
  });
  mongoJackets();
}

function mongoJackets() {
  var myHeaders = new fetch.Headers();

  var myInit = { method: 'GET', headers: myHeaders, };

  fetch('http://localhost:5000/jackets', myInit).then(function(response) {
    //console.log(response.body);
    return response.json();
  }).then(function(text) {
    jackets = text;
    console.log(jackets);
  });
  mongoShoes();
}

function mongoShoes() {
  var myHeaders = new fetch.Headers();

  var myInit = { method: 'GET', headers: myHeaders, };

  fetch('http://localhost:5000/shoes', myInit).then(function(response) {
    //console.log(response.body);
    return response.json();
  }).then(function(text) {
    shoes = text;
    //console.log(shoes);
    wardrobe.push(shirts);
    wardrobe.push(pants);
    wardrobe.push(jackets);
    wardrobe.push(shoes);
    //console.log(wardrobe);
  });
}

function goodShirts() {
  if (input["type"] === "shirt"){
      console.log([input][0]["type"]);
      return [input];
  } 
  shirtInput = false;
  ret = [];
  for (i = 0; i < shirts.length; i++) {
    if (checker(shirts[i], input)) ret.push(shirts[i])
  }
  console.log(ret);
  return ret;
}

function allMatches() {
  ret = [];
  for (i = 0; i < types.length; i++) {
    curr = [];
    if (input["type"] === types[i] || (!shirtInput && types[i] === "shirt")) curr = inputAsList;
    else {
      for (k = 0; k < wardrobe[i].length; i++) {
        for (z = 0; z < inputAsList.length; z++) {
          if (checker(inputAsList[z], wardrobe[i][k])) {
            curr.push(wardrobe[i, k]);
            break;
          }
        }
      }
    }
    ret.push(curr);
  }
  console.log(ret);
  return ret;
}

function checker(shirt, other) {
  return occasionChecker(shirt, other) && colorChecker(shirt, other) &&
    styleChecker(shirt, other) && fabricChecker(shirt, other);
}

function occasionChecker(shirt, other) {
  return shirt["occassions"] == other["occassions"];
}

function colorChecker(shirt, other) {
  var index = 1 ? (["black", "white", "grey", "gray"].indexOf(shirt["color"]) != -1) :
  (2 ? ["yellow", "brown"].indexOf(shirt["color"]) : 3);

  console.log(index);

  var dict = {1: [],
  2: ["red", "orange", "green", "blue", "violet", "pink", "purple"],
  3: ["red", "orange", "green", "blue", "violet", "pink", "purple"]};

  return dict[index].indexOf(other['colors']) == -1;
}

function styleChecker(shirt, other) {
  var dict = {'t-shirt': ['slacks'],
              'fullsleeve': ['flannel', 'slacks'],
              'v-neck': ['flannel', 'slacks', 'sports'],
              'button': ['flannel', 'hoodie', 'sports', 'sweatpant', 'tennis']};
  return dict[shirt["style"]].indexOf(other["style"]) == -1;

}

function fabricChecker(shirt, other) {
  var dict = { 'cotton': ['leather'],
  'denim':['cotton', 'leather', 'denim', 'nylon', 'polyster'],
  'leather': ['cotton', 'leather', 'denim', 'nylon', 'polyster'],
  'nylon': ['cotton', 'denim', 'leather'],
  'polyster': ['cotton', 'denim', 'leather']};
  return dict[shirt['fabric']].indexOf(other["fabric"]) == -1;

}
