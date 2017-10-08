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
            "occassion": 'casual',
            "color": 'black',
            "style": 't-shirt',
            "fabrics": 'cotton'};

var shirtInput = true;
//var inputAsList = goodShirts();

//var matches = allMatches();


readMongo();

function readMongo() {
  var myHeaders = new fetch.Headers();

  var myInit = { method: 'GET', headers: myHeaders, };

  fetch('http://localhost:5000/shirts', myInit).then(function(response) {
    //console.log(response.body);
    return response.json();
  }).then(function(text) {
    console.log(text);
  });
}

function goodShirts() {
  if (input["type"] === "shirt") return [input];
  shirtInput = false;
  ret = [];
  for (i = 0; i < shirts.length; i++) {
    if (checker(shirts[i], input)) ret.append(shirts[i])
  }
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
          if (checker(inputAsList[z], wardrobe[i, k])) {
            curr.append(wardrobe[i, k]);
            break;
          }
        }
      }
    }
    ret.append(curr);
  }
  return ret;
}

function checker(shirt, other) {
  return occasionChecker(shirt, other) && colorChecker(shirt, other) &&
    styleChecker(shirt, other) && fabricChecker(shirt, other);
}

function occasionChecker(shirt, other) {
  return shirt["occassion"] == other["occassion"];
}

function colorChecker(shirt, other) {
  var index = 1 ? (["black", "white", "grey", "gray"].indexOf(shirt["color"]) != -1) :
  (2 ? ["yellow", "brown"].indexOf(shirt["color"]) : 3);

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
  return dict[shirt['fabrics']].indexOf(other["fabrics"]) == -1;

}
