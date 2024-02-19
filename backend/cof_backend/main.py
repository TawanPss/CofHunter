from fastapi import FastAPI, HTTPException
from pymongo import MongoClient
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel
from bson import ObjectId
import random 
import string

app = FastAPI()

mongo_url = "mongodb://localhost:27017"

client = AsyncIOMotorClient(mongo_url)
db = client.CoffeeApp
collection_Users = db.Users
collection_coffee_shop = db.Coffee_shop
collection_menu = db.Menu
collection_Coffee_bean = db.Coffee_bean
collection_review = db.Review
collection_pop_cof_shop = db.Popular_coffee_shop


class Users_record(BaseModel):
    Username:str
    Password:str
    User_id:str
    Email:str
    Cof_shop_id:str
    
    
class Coffee_shop_record(BaseModel):
    Cof_shop_name:str
    Cof_shop_id:str     
    Opening:str
    Location:str
#   Shop_image:Base64

    
class Menu_record(BaseModel):
    Cof_shop_id:str
    Order_amount:str
    Menu_name:str
    Description:str
    Coffee_price:str
#   Coffee_image:Base64
    
class Coffee_bean_record(BaseModel):
    Cof_shop_id:str
    Name:str
    price:str
    weigth:str
    Origin:str
    Varieties:str
    Altitude:str
    Tasting_Notes:str
    Recommend:str
    
class Review_record(BaseModel):
    Cof_shop_id:str
    Cof_shop_name:str     
    User_id:str
    rating:str
    rating_id:str
    comment:str
    last_comment:datetime
    
class Popular_coffee_shop_record(BaseModel):
    Cof_shop_id:str
    Cof_shop_name:str
    rating_id:str

    
@app.get("/")
async def read_root():
    return {"message": "Hello, FastAPI!"}

@app.post("/Users_record")
async def record_users(dummy_data:Users_record):
    random_data = dummy_data.dict()
    random_data["_id"] = ObjectId()
    
    #await คือสั่งให้รอ insert ให้เสร็จ
    result = await collection_Users.insert_one(random_data)
    if result.inserted_id:         
        return {"msg": "Added successfully", "Users": str(result.inserted_id)}     
    else:         
        raise HTTPException(status_code=400, detail="Error adding user")
    
   

@app.post("/Coffee_shop_record")
async def record_Coffee_shop(dummy_data:Coffee_shop_record):
    random_data = dummy_data.dict()
    random_data["_id"] = ObjectId()
    
    #await คือสั่งให้รอ insert ให้เสร็จ
    result = await collection_coffee_shop.insert_one(random_data)
    if result.inserted_id:         
        return {"msg": "Added successfully", "Coffee_shop": str(result.inserted_id)}     
    else:           
        raise HTTPException(status_code=400, detail="Error adding user")

@app.post("/Menu_record")
async def record_menu(dummy_data:Menu_record):
    random_data = dummy_data.dict()
    random_data["_id"] = ObjectId()
    
    #await คือสั่งให้รอ insert ให้เสร็จ
    result = await collection_menu.insert_one(random_data)
    if result.inserted_id:         
        return {"msg": "Added successfully", "Menu": str(result.inserted_id)}     
    else:         
        raise HTTPException(status_code=400, detail="Error adding user")
    
   
@app.post("/Coffee_bean_record")
async def record_Coffee_bean(dummy_data:Coffee_bean_record):
    random_data = dummy_data.dict()
    random_data["_id"] = ObjectId()
    
    #await คือสั่งให้รอ insert ให้เสร็จ
    result = await collection_Coffee_bean.insert_one(random_data)
    if result.inserted_id:         
        return {"msg": "Added successfully", "Coffee_bean_record": str(result.inserted_id)}     
    else:           
        raise HTTPException(status_code=400, detail="Error adding user")

@app.post("/Review_record")
async def record_review(dummy_data:Review_record):
    random_data = dummy_data.dict()
    random_data["_id"] = ObjectId()
    
    #await คือสั่งให้รอ insert ให้เสร็จ
    result = await collection_review.insert_one(random_data)
    if result.inserted_id:         
        return {"msg": "Added successfully", "review": str(result.inserted_id)}     
    else:         
        raise HTTPException(status_code=400, detail="Error adding user")
    
   

@app.post("/Popular_coffee_shop_record")
async def record_popular_coffee(dummy_data:Popular_coffee_shop_record):
    random_data = dummy_data.dict()
    random_data["_id"] = ObjectId()
    
    #await คือสั่งให้รอ insert ให้เสร็จ
    result = await collection_pop_cof_shop.insert_one(random_data)
    if result.inserted_id:         
        return {"msg": "Added successfully", "popular_coffee": str(result.inserted_id)}     
    else:           
        raise HTTPException(status_code=400, detail="Error adding user")


# #get image

# UPLOAD_DIR = "uploaded_images"
# @app.get("/images/{filename}")
# async def get_image(filename: str):
#     file_location = os.path.join(UPLOAD_DIR, filename)
#     if os.path.exists(file_location):
#         return FileResponse(file_location)
#     else:
#         raise HTTPException(status_code=404, detail="File not found")
