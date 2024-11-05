import express from 'express';
import { createUser, deleteUser, emailCheck, getUser, loginUser, ResetPass, updateUser } from '../controllers/user.controller.js';

const router = express.Router()

router.post("/create", createUser)
router.post("/login", loginUser)
router.post("/emailCheck",emailCheck)
router.put("/update", updateUser)
router.put("/passupdate", ResetPass)
router.delete("/delete/:id", deleteUser)
router.get("/get", getUser)

export default router

/**
=======register: ,createUser=======
api: http://localhost:5000/api/user/create
Data:{
    name:"",
    email:"",
    password:""
}
email-verify-enter-> otp

res:{
    "data": {
        "id": 8,
        "name": "Rahul123",
        "email": "RahulTaak123@gmail.com",
        "password": "$2b$10$d1IETPFtRnjUH/a7xm3yge8Kk3zIIm5fVwZs48Tz72jpZcEsSPp5i",
        "updatedAt": "2024-10-23T14:04:38.388Z",
        "createdAt": "2024-10-23T14:04:38.388Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJSYWh1bFRhYWsxMjNAZ21haWwuY29tIiwiaWF0IjoxNzI5NjkyMjc4LCJleHAiOjE3Mjk2OTk0Nzh9.JLo7I3GzS-7obikbb_MCbDGNVqKTQgJA7M-KM1pHyrQ"
}

==========update=======
api: http://localhost:5000/api/user/update
data:{
    email:"efef@gmail.com",
    oldPassword:"Rahuile!4f",
    newPassword:"FEfkejmf@1f5"
}

==========delete:=======
api : http://localhost:5000/api/user/delete/1

res : "delete sucessfully"


==========login:=======
api : http://localhost:5000/api/user/login
Data :{
    email:"",
    password:""
}


==========Forget:=======
Data : {
    email:""
}
check otp

data: {newPassword:""}



*/