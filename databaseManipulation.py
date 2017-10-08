from pymongo import MongoClient
import gridfs



client = MongoClient()
db = client.calhacks

fs = gridfs.GridFS(db)


#data for shirts

shirts = db.shirts
shirtOne = { "color" : "blue",
             "fabric" : "cotton",
             "occasions" : "casual",
             "style" :  "fullsleeve",
             "imageuri" : "https://github.com/shloak/denimsquared/blob/master/images/bluevv.jpg" } 

shirtTwo = { "color" : "white",
             "fabric" : "cotton",
             "occasions" : "casual",
             "style" : "fullsleeve",
             "imageuri" : "https://github.com/shloak/denimsquared/blob/master/images/vineyardvines.jpg"} 
                         
shirtThree = { "color" : "pink",
             "fabric" : "cotton",
             "occasions" : "casual",
             "style" : "t-shirt",
             "imageuri" : "https://github.com/shloak/denimsquared/blob/master/images/vineyardvinestshirt.jpg" } 

shirtFour = { "color" : "black",
             "fabric" : "cotton",
             "occasions" : "casual",
             "style" : "button",
             "iamgeuri" : "https://github.com/shloak/denimsquared/blob/master/images/vvpolo.jpg" }


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


#data for pants


pants = db.pants
pantOne = { "color" : "blue",
             "fabric" : "cotton",
             "occasions" : "casual",
             "style" :  "shorts",
             "imageuri" : "https://github.com/shloak/DenimSquared/blob/master/Images/vvBlueShorts.jpg" } 

pantTwo = { "color" : "brown",
             "fabric" : "cotton",
             "occasions" : "casual",
             "style" : "khakis",
             "imageuri" : "https://github.com/shloak/DenimSquared/blob/master/Images/vvKhakhis.jpg"} 
                         
pantThree = { "color" : "pink",
             "fabric" : "cotton",
             "occasions" : "casual",
             "style" : "shorts",
             "imageuri" : "https://github.com/shloak/DenimSquared/blob/master/Images/vvPinkShorts.jpg" } 

pantFour = { "color" : "blue",
             "fabric" : "jeans",
             "occasions" : "casual",
             "style" : "jeans",
             "iamgeuri" : "https://github.com/shloak/DenimSquared/blob/master/Images/vvjeans.jpg" }


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



#Code for jacket


jacket = db.jacket
jacketOne = { "Color" : "Blue",
             "Collar" : "Round",
             "Fabric" : "Cotton",
             'Occasions' : "Casual" } 

jacektTwo = { "Color" : "Blue",
             "Collar" : "Round",
             "Fabric" : "Cotton",
             'Occasions' : "Casual" } 
                         
jacketThree = { "Color" : "Blue",
             "Collar" : "Round",
             "Fabric" : "Cotton",
             'Occasions' : "Casual" } 

jacketFour = { "Color" : "Blue",
             "Collar" : "Round",
             "Fabric" : "Cotton",
             'Occasions' : "Casual" } 

resultOne = jacket.insert_one(shirtOne)
resultTwo = jacket.insert_one(shirtTwo)
resultThree = jacket.insert_one(shirtThree) 
resultFour = jacket.insert_one(shirtFour)
print('One jacket: {0}'.format(resultOne.inserted_id))
print('Two jacket: {0}'.format(resultTwo.inserted_id))
print('Three jacket: {0}'.format(resultThree.inserted_id))
print('Four jacket: {0}'.format(resultFour.inserted_id))


#Code for shoes


shoes = db.shoes
pantOne = { "color" : "grey",
             "fabric" : "cotton",
             "occasions" : "tennis",
             "style" :  "shoes",
             "imageuri" : "https://github.com/shloak/DenimSquared/blob/master/Images/vvBlueShorts.jpg" } 

pantTwo = { "color" : "brown",
             "fabric" : "cotton",
             "occasions" : "flats",
             "style" : "pants",
             "imageuri" : "https://github.com/shloak/DenimSquared/blob/master/Images/vvKhakhis.jpg"} 
                         
pantThree = { "color" : "pink",
             "fabric" : "cotton",
             "occasions" : "casual",
             "style" : "shorts",
             "imageuri" : "https://github.com/shloak/DenimSquared/blob/master/Images/vvPinkShorts.jpg" } 

pantFour = { "color" : "blue",
             "fabric" : "jeans",
             "occasions" : "casual",
             "style" : "pants",
             "iamgeuri" : "https://github.com/shloak/DenimSquared/blob/master/Images/vvjeans.jpg" }


resultOne = shoes.insert_one(shirtOne)
resultTwo = shoes.insert_one(shirtTwo)
resultThree = shoes.insert_one(shirtThree) 
resultFour = shoes.insert_one(shirtFour)
print('One shoes: {0}'.format(resultOne.inserted_id))
print('Two shoes: {0}'.format(resultTwo.inserted_id))
print('Three shoes: {0}'.format(resultThree.inserted_id))
print('Four shoes: {0}'.format(resultFour.inserted_id))


