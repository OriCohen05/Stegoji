from typing import Union, Optional
import json
from fastapi import FastAPI, Body, HTTPException
from fastapi.security import HTTPBasic, HTTPBasicCredentials, OAuth2PasswordRequestForm
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from uuid import uuid4
from encryption.emoji_algorithm import encrypt, decrypt
app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]
# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Request(BaseModel):
    message: str



@app.post("/")
async def post(request: Request = Body(..., embed=True)):
    return {"message": f"{encrypt(request.message[0])}"}




# User model
class User(BaseModel):
    username: str
    password: str


# Demo database
with open("db.json", "r") as file:
    db = json.load(file)


# Routes





# Helper function to save database changes
def save_db():
    with open("db.json", "w") as file:
        json.dump(db, file)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=8080)
