from pymongo import MongoClient
import gridfs



client = MongoClient()
db = client.calhacks

fs = gridfs.GridFS(db)

shirts = db.shirts
shirtOne = { "Color" : "Blue",
             "Collar" : "Round",
             "Fabric" : "Cotton",
             'Occasions' : "Casual" } 

shirtTwo = { "Color" : "Blue",
             "Collar" : "Round",
             "Fabric" : "Cotton",
             'Occasions' : "Casual" } 
                         
shirtThree = { "Color" : "Blue",
             "Collar" : "Round",
             "Fabric" : "Cotton",
             'Occasions' : "Casual" } 

shirtFour = { "Color" : "Blue",
             "Collar" : "Round",
             "Fabric" : "Cotton",
             'Occasions' : "Casual" } 

resultOne = shirts.insert_one(shirtOne)
resultTwo = shirts.insert_one(shirtTwo)
resultThree = shirts.insert_one(shirtThree) 
resultFour = shirts.insert_one(shirtFour)
print('One shirt: {0}'.format(resultOne.inserted_id))
print('Two shirt: {0}'.format(resultTwo.inserted_id))
print('Three shirt: {0}'.format(resultThree.inserted_id))
print('Four shirt: {0}'.format(resultFour.inserted_id))


#Code for pants


pants = db.pants
pantsOne = { "Color" : "Blue",
             "Collar" : "Round",
             "Fabric" : "Cotton",
             "Occasions" : "Casual",
             "imageURI" : "localhost:8000/images/image.jpg" } 

pantsTwo = { "Color" : "Blue",
             "Collar" : "Round",
             "Fabric" : "Cotton",
             'Occasions' : "Casual" } 
                         
pantsThree = { "Color" : "Blue",
             "Collar" : "Round",
             "Fabric" : "Cotton",
             'Occasions' : "Casual" } 

pantsFour = { "Color" : "Blue",
             "Collar" : "Round",
             "Fabric" : "Cotton",
             'Occasions' : "Casual" } 

resultOne = pants.insert_one(shirtOne)
resultTwo = pants.insert_one(shirtTwo)
resultThree = pants.insert_one(shirtThree) 
resultFour = pants.insert_one(shirtFour)
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
shoesOne = { "Color" : "Blue",
             "Collar" : "Round",
             "Fabric" : "Cotton",
             'Occasions' : "Casual" } 

shoesTwo = { "Color" : "Blue",
             "Collar" : "Round",
             "Fabric" : "Cotton",
             'Occasions' : "Casual" } 
                         
shoesThree = { "Color" : "Blue",
             "Collar" : "Round",
             "Fabric" : "Cotton",
             'Occasions' : "Casual" } 

shoesFour = { "Color" : "Blue",
             "Collar" : "Round",
             "Fabric" : "Cotton",
             'Occasions' : "Casual" } 

resultOne = shoes.insert_one(shirtOne)
resultTwo = shoes.insert_one(shirtTwo)
resultThree = shoes.insert_one(shirtThree) 
resultFour = shoes.insert_one(shirtFour)
print('One shoes: {0}'.format(resultOne.inserted_id))
print('Two shoes: {0}'.format(resultTwo.inserted_id))
print('Three shoes: {0}'.format(resultThree.inserted_id))
print('Four shoes: {0}'.format(resultFour.inserted_id))


