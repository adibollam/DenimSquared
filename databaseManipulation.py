from pymongo import MongoClient
from flask import Flask
from bson.json_util import dumps
app = Flask(__name__)

client = MongoClient()
db = client.calhacks



#data for shirts

shirts = db.shirts
shirtOne = { "color" : "blue",
             "fabric" : "cotton",
             "occasions" : "casual",
             "style" :  "fullsleeve",
             "imageuri" : "https://github.com/shloak/DenimSquared/blob/master/Images/blueVV.jpg?raw=true" } 

shirtTwo = { "color" : "white",
             "fabric" : "cotton",
             "occasions" : "casual",
             "style" : "fullsleeve",
             "imageuri" : "https://github.com/shloak/DenimSquared/blob/master/Images/vineyardVines.jpg?raw=true"} 
                         
shirtThree = { "color" : "pink",
             "fabric" : "cotton",
             "occasions" : "casual",
             "style" : "t-shirt",
             "imageuri" : "https://github.com/shloak/denimsquared/blob/master/images/vineyardvinestshirt.jpg?raw=true" } 

shirtFour = { "color" : "black",
             "fabric" : "cotton",
             "occasions" : "casual",
             "style" : "button",
             "iamgeuri" : "https://github.com/shloak/denimsquared/blob/master/images/vvpolo.jpg?raw=true" }


#submitting the documents to the collection
resultOne = shirts.insert_one(shirtOne)
resultTwo = shirts.insert_one(shirtTwo)
resultThree = shirts.insert_one(shirtThree) 
resultFour = shirts.insert_one(shirtFour)

#test case to confirm working code
print('One shirt: {0}'.format(resultOne.inserted_id))
print('Two shirt: {0}'.format(resultTwo.inserted_id))
print('Three shirt: {0}'.format(resultThree.inserted_id))
print('Four shirt: {0}'.format(resultFour.inserted_id))

#Flask code that transfers the mongo.db data to the Javascript front end
@app.route('/shirts')
def shirts():
      return dumps(db.shirts.find())


#data for pants
pants = db.pants
pantOne = { "color" : "blue",
             "fabric" : "cotton",
             "occasions" : "casual",
             "style" :  "shorts",
             "imageuri" : "https://github.com/shloak/DenimSquared/blob/master/Images/shortsw:oman.jpg?raw=true" } 

pantTwo = { "color" : "white",
             "fabric" : "cotton",
             "occasions" : "casual",
             "style" : "khakis",
             "imageuri" : "https://github.com/shloak/DenimSquared/blob/master/Images/whiteKhakis.jpg?raw=true"} 
                         
pantThree = { "color" : "pink",
             "fabric" : "cotton",
             "occasions" : "casual",
             "style" : "shorts",
             "imageuri" : "https://github.com/shloak/DenimSquared/blob/master/Images/pinkshortsw:oman.jpg?raw=true" } 

pantFour = { "color" : "blue",
             "fabric" : "denim",
             "occasions" : "casual",
             "style" : "jeans",
             "iamgeuri" : "https://github.com/shloak/DenimSquared/blob/master/Images/vvjeans.jpg?raw=true" }


#putting the pants data documents in the collection
resultOne = pants.insert_one(pantOne)
resultTwo = pants.insert_one(pantTwo)
resultThree = pants.insert_one(pantThree) 
resultFour = pants.insert_one(pantFour)

#test case to check for code compilation
print('One pant: {0}'.format(resultOne.inserted_id))
print('Two pant: {0}'.format(resultTwo.inserted_id))
print('Three pant: {0}'.format(resultThree.inserted_id))
print('Four pant: {0}'.format(resultFour.inserted_id))


#Flask code that transfers the mongo.db data to the Javascript front end
@app.route('/pants')
def pants():
      return dumps(db.pants.find())


#Code for jacket
jacket = db.jacket
jacketOne = { "color" : "green",
             "fabric" : "leather",
             "occasions" : "casual",
             "style" :  "windbreaker",
             "imageuri" : "https://github.com/shloak/DenimSquared/blob/master/Images/bomberjacket.jpg?raw=true" } 

jacketTwo = { "color" : "grey",
             "fabric" : "cotton",
             "occasions" : "casual",
             "style" : "flannel",
             "imageuri" : "https://github.com/shloak/DenimSquared/blob/master/Images/flannel.jpg"} 
                         
jacketThree = { "color" : "blue",
             "fabric" : "cotton",
             "occasions" : "casual",
             "style" : "hoodie",
             "imageuri" : "https://github.com/shloak/DenimSquared/blob/master/Images/bluehoodie.jpg?raw=true" } 

jacketFour = { "color" : "blue",
             "fabric" : "polyster",
             "occasions" : "athletic",
             "style" : "athletic",
             "iamgeuri" : "https://github.com/shloak/DenimSquared/blob/master/Images/athleticJacket.jpg?raw=true" }

#code that puts the jacket documents into the jacket collection

resultOne = jacket.insert_one(jacketOne)
resultTwo = jacket.insert_one(jacketTwo)
resultThree = jacket.insert_one(jacketThree) 
resultFour = jacket.insert_one(jacketFour)

#test case used to test the code compiliation
print('One jacket: {0}'.format(resultOne.inserted_id))
print('Two jacket: {0}'.format(resultTwo.inserted_id))
print('Three jacket: {0}'.format(resultThree.inserted_id))
print('Four jacket: {0}'.format(resultFour.inserted_id))

#Flask code that transfers the mongo.db data to the Javascript front end
@app.route('/jackets')
def jackets():
      return dumps(db.jackets.find())

#Code for shoes
shoes = db.shoes
shoeOne = { "color" : "grey",
             "fabric" : "cotton",
             "occasions" : "sport",
             "style" :  "tennis",
             "imageuri" : "https://github.com/shloak/DenimSquared/blob/master/Images/nikeRoshe.jpg?raw=true" } 

shoeTwo = { "color" : "brown",
             "fabric" : "leather",
             "occasions" : "business",
             "style" : "fashion",
             "imageuri" : "https://github.com/shloak/DenimSquared/blob/master/Images/sperryBoats.jpg?raw=true"} 
                         
shoeThree = { "color" : "white",
             "fabric" : "cotton",
             "occasions" : "casual",
             "style" : "skate",
             "imageuri" : "https://github.com/shloak/DenimSquared/blob/master/Images/whiteVans.jpg?raw=true" } 

shoeFour = { "color" : "black",
             "fabric" : "polyster",
             "occasions" : "casual",
             "style" : "flat",
             "iamgeuri" : "https://github.com/shloak/DenimSquared/blob/master/Images/nikeSlides.jpg?raw=true" }


#code used to put the documents for shoes into the shoe collection
resultOne = shoes.insert_one(shoeOne)
resultTwo = shoes.insert_one(shoeTwo)
resultThree = shoes.insert_one(shoeThree) 
resultFour = shoes.insert_one(shoeFour)

#Test cases that ensure the 
print('One shoes: {0}'.format(resultOne.inserted_id))
print('Two shoes: {0}'.format(resultTwo.inserted_id))
print('Three shoes: {0}'.format(resultThree.inserted_id))
print('Four shoes: {0}'.format(resultFour.inserted_id))

#Flask code that transfers the mongo.db data to the Javascript front end
@app.route('/shoes')
def shoes():
      return dumps(db.shoes.find())


