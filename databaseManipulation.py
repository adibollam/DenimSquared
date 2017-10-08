from pymongo import MongoClient

client = MongoClient()
db = client.calhacks

posts = db.shirts
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

resultOne = posts.insert_one(shirtOne)
resultTwo = posts.insert_one(shirtTwo)
resultThree = posts.insert_one(shirtThree) 
resultFour = posts.insert_one(shirtFour)
print('One post: {0}'.format(resultOne.inserted_id))
print('Two post: {0}'.format(resultTwo.inserted_id))
print('Three post: {0}'.format(resultThree.inserted_id))
print('Four post: {0}'.format(resultFour.inserted_id))



print shirtFour