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
db = client.motor
collection_motor = db.Motors
collection_sensor = db.Sensors
collection_user = db.User


class Motors_record(BaseModel):
    ID:str
    Name:str
    Location:str
    Series:str
class Sensors_record(BaseModel):
    ID:str
    Temperture:str     
    Voltage:str
    Current:str
    Accelerometer:str
    Vibration:str
    
class User_record(BaseModel):
    User_ID:str
    Motor_Owning:str

    
@app.get("/")
async def read_root():
    return {"message": "Hello, FastAPI!"}

@app.post("/Motor_record")
async def record_motor(dummy_data:Motors_record):
    random_data = dummy_data.dict()
    random_data["_id"] = ObjectId()
    
    #await คือสั่งให้รอ insert ให้เสร็จ
    result = await collection_motor.insert_one(random_data)
    if result.inserted_id:         
        return {"msg": "Motor added successfully", "MotorId": str(result.inserted_id)}     
    else:         
        raise HTTPException(status_code=400, detail="Error adding user")
    
@app.post("/Sensors_record")
async def record_sensor(dummy_data:Sensors_record):
    random_data = dummy_data.dict()
    random_data["_id"] = ObjectId()
    
    #await คือสั่งให้รอ insert ให้เสร็จ
    result = await collection_sensor.insert_one(random_data)
    if result.inserted_id:         
        return {"msg": "sensor added successfully", "sensorId": str(result.inserted_id)}     
    else:         
        raise HTTPException(status_code=400, detail="Error adding user")

@app.post("/User_record")
async def record_user(dummy_data:User_record):
    random_data = dummy_data.dict()
    random_data["_id"] = ObjectId()
    
    #await คือสั่งให้รอ insert ให้เสร็จ
    result = await collection_user.insert_one(random_data)
    if result.inserted_id:         
        return {"msg": "User added successfully", "userId": str(result.inserted_id)}     
    else:         
        raise HTTPException(status_code=400, detail="Error adding user")






    
#step get body from postman

#save to database

#response success or fail

# db = client["motor"]

# db_info = db.list_collection_names()
# print(db_info)

# server_info = client.server_info()
# print(server_info)
# collection = db["Motors"]


# def insert_random_data():
#     # สุ่มข้อมูล
#     random_id = random.randint(1, 100)
#     random_string = ''.join(random.choices(string.ascii_letters, k=10)) 
#     random_location = random.choice(["Bangkok", "Chiang Mai", "Phuket"]) 
#     random_series = random.choice(["A", "B", "C"]) 


#     result = collection.insert({
#         "ID": random_id,
#         "Name": random_string,
#         "Location": random_location,
#         "Series": random_series
#     })
#     print("Show!!!!!:",random_id,random_string,random_location,random_series)
#     return result.inserted_id  # คืนค่า _id ของเอกสารที่เพิ่ม

# document_id = insert_random_data()
# print("Inserted document with ID:", document_id)