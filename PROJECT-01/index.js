const express = require("express")
const users = require("./MOCK_DATA.json")

const app = express()
const PORT = 8000;

app.get('api/users', (req, res)=>{
    return res.json(users)
})

app.get('/users', (req,res)=>{
    return res.json()
})

app.listen(PORT, (req, res)=>{
    console.log("Server is running on port no 8000");
    
})

