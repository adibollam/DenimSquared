var request = require('request'),
	cheerio = require('cheerio'),
	urls = [];
var types = ["shirt", "jacket", "hat", "pants", "shoes"];
var occassions = ["casual", "business", "summer", "winter", "sport"];
var colors = ["black", "white", "grey", "gray", "red", "orange", "yellow", "green", "blue", "violet", "pink", "purple", "brown"];
var styles = [["collar", "v-neck", "v neck", "crewneck"], ["flannel", "windbreaker", "sports"], ["snapback", "baseball", "beanie"], ["jeans", "slacks", "shorts", "khaki", "sweatpant"], ["tennis", "flat", "skate", ""]];
var fabrics = ["cotton", "denim", "leather", "nylon", "polyster"];


request('http://www.ae.com/men-aeo-plaid-oxford-shirt-white/web/s-prod/0153_9873_100?cm=sUS-cUSD&catId=cat6300043', function(err, resp, body){ //  
	if(!err && resp.statusCode == 200){
		var $ = cheerio.load(body);
		var text = $('div.pdp-about-details.pdp-about-section').text();
		console.log(text);
	}
});

function occassion(){
	for (i = 0; i < occassions.length; i++){
		if (text.inclide)
	}
	text.includes()
}

function style(){

}

function color(){

}

function fabric(){

}



