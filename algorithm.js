var types = ["shirt", "jacket", "pants", "shoes"];
var occassions = ["casual", "business", "summer", "winter", "sport"];
var colors = ["black", "white", "grey", "gray", "red", "orange", "yellow", "green", "blue", "violet", "pink", "purple", "brown"];
var styles = [["collar", "v-neck", "crewneck", "t-shirt"],
["flannel", "windbreaker", "sports", "hoodie"],
["jeans", "slacks", "shorts", "khaki", "sweatpant"],
["tennis", "flat", "skate", ""]];
var fabrics = ["cotton", "denim", "leather", "nylon", "polyster"];


var input = {"type": 'shirt',
            "occassion": 'casual',
            "color": 'black',
            "style": 't-shirt'};

var shirt = blob["shirt"];
var jacket = blob["jacket"];
var pants = blob["pants"];
var shoes = blob["shoes"];

if (input.keys() == 'shirt'){
  goodJackets = [];
  for (i = 0; i < jacket.length; i++)
  {
    if (jacket[i]["occassion"] == input["occassion"]) goodJackets.append(jacket[i])
  }
  
}

for (i = 0; i < hat.length; i++)
{
  shirt += shirt[i][input['shirt'][0]];
}


for (i = 0; i < hat.length; i++)
{
  jacket += jacket[i][input['shirt'][0]];
}


for (i = 0; i < hat.length; i++)
{
  pants += pants[i][input['shirt'][0]];
}


for (i = 0; i < hat.length; i++)
{
  shoes += jacket[i][input['shirt'][0]];

}
