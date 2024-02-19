from fastapi import FastAPI, HTTPException
from pymongo import MongoClient
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel
from bson import ObjectId
import random 
import string
import datetime
import os
import uuid

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
    Shop_image:str #URL
    rating_total:str


class Menu_record(BaseModel):
    Cof_shop_id:str
    Order_amount:str
    Menu_name:str
    Description:str
    Coffee_price:str
    Coffee_image:str #URL
    
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
    

@app.get("/homepage")
async def homepage():
    # Get popular coffee shops from database 1 อันก่อน
    popular_coffee_shops = await collection_pop_cof_shop.find().to_list(length=3)
    
    # Get coffee shop details and menu/bean records for each
    #popular_coffee_shops เก็บใน[]
    all_coffee_shop_details = []
    
    for shop in popular_coffee_shops:
        #find_one หาcof shop id ตรงกัน (ดึงหมดเลอ)
        shop_details = await collection_coffee_shop.find_one({"_id": shop["Cof_shop_id"]})
    # Get all field in collection menus
     
        shop_menus = await collection_menu.find({"Cof_shop_id": shop["Cof_shop_id"]}).to_list(length=4)

        #Fix ไว้ 2 collection จะดึงอะไรก็แล้วแต่เลอ
        all_coffee_shop_details.append({
            "shop": shop_details,
            "menus": shop_menus
        })

    return {"homepage": all_coffee_shop_details}


@app.get("/coffeeshop/{shop_id}")
async def get_coffee_shop(shop_id: str):
    
    # Get coffee shop details
    shop_details = await collection_coffee_shop.find_one({"_id": shop_id})
    if not shop_details:
        raise HTTPException(status_code=404, detail="Coffee shop not found")

    # Get menu & coffee bean records
    shop_menus = await collection_menu.find({"Cof_shop_id": shop_id}).to_list()
    shop_coffee_beans = await collection_Coffee_bean.find({"Cof_shop_id": shop_id}).to_list()

    return {"coffee_shop": shop_details, "menus": shop_menus, "coffee_beans": shop_coffee_beans} 




# #get image

# UPLOAD_DIR = "uploaded_images"
# @app.get("/images/{filename}")
# async def get_image(filename: str):
#     file_location = os.path.join(UPLOAD_DIR, filename)
#     if os.path.exists(file_location):
#         return FileResponse(file_location)
#     else:
#         raise HTTPException(status_code=404, detail="File not found")
