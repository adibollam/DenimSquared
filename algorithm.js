var types = ["shirt", "jacket", "pants", "shoes"];
var occassions = ["casual", "business", "summer", "winter", "sport"];
var colors = ["black", "white", "grey", "gray", "red", "orange", "yellow", "green", "blue", "violet", "pink", "purple", "brown"];
var styles = [["button", "v-neck", "fullsleeve", "t-shirt"],
["flannel", "windbreaker", "sports", "hoodie"],
["jeans", "slacks", "shorts", "khaki", "sweatpant"],
["tennis", "flat", "skate", ""]];
var fabrics = ["cotton", "denim", "leather", "nylon", "polyster"];


var input = {"type": 'shirt',
            "occassion": 'casual',
            "color": 'black',
            "style": 't-shirt',
            "fabrics": 'cotton'};

var shirt = blob["shirt"];
var jacket = blob["jacket"];
var pants = blob["pants"];
var shoes = blob["shoes"];

function ocassion(article){
    goodArticle = [];
    for (i = 0; i < article.length; i++)
    {
      if (article[i]["occassion"] == input["occassion"]) goodArticle.append(article[i])
    }

  return goodArticle
}

function styles(article, styleIn){
  if (input['type'] == 'shirt'){
    goodArticle = [];
    if (styleIn == 't-shirt'){
      for (i = 0; i < article.length; i++){
        if (article[i]["styles"] != 'slacks') goodArticle.append(article[i])
      }
    }
    if (styleIn == 'fullsleeve'){
      for (i = 0; i < article.length; i++){
        if (['flannel', 'slacks'].indexOf(article[i]['styles']) == -1) goodArticle.append(article[i])
      }
    }
    if (styleIn == 'v-neck'){
      for (i = 0; i < article.length; i++){
        if (['flannel', 'slacks', 'sports'].indexOf(article[i]['styles']) == -1) goodArticle.append(article[i])
      }
    }
    if (styleIn == 'button'){
      for (i = 0; i < article.length; i++){
        if (['flannel', 'hoodie', 'sports', 'sweatpant', 'tennis'].indexOf(article[i]['styles']) == -1) goodArticle.append(article[i])
      }
    }
  }
  return goodArticle
}
