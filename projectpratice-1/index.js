const express = require("express");
const fs = require('fs')
const users = require('./MOCK_DATA.json')
const PORT= 8000;

const app = express();


app.use(express.urlencoded({extended:false}))


app.use((req,res,next)=>{

    fs.appendFile('log.txt',`${Date.now()}:${req.method}:${req.path}`,(err,data)=>{
        console.log("Middle working checking");
        
        next();
    })
})


app.get('/api/users',(req,res)=>{
    return res.json(users)
})

app.get('/api/users/:id',(req,res)=>{
    const id = Number(req.params.id)
    const user = users.find((user)=>user.id===id)
    return res.json(user)
})

app.delete('/api/users/:id', (req, res)=>{
    const id = Number(req.params.id)
    const user = users.find((user)=>user.id===id)

    const updatedUser = users.filter((user)=>user.id !==id)
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(updatedUser),(err,data)=>{
                return res.json({response:"Success"})

    })
})

app.patch('/api/users', (req,res)=>{
    const body = req.body
    const id = Number(req.params.id)
    const user = users.find((user)=>user.id===id)

    if(!user){
        return res.status(404).json({status: "User Not Found"})
    }
    Object.assign(user, body)
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users), (err, data)=>{
        return res.json({status:"Success"})
    })
})



app.post('/api/users',(req,res)=>{
    const body = req.body
    users.push({...body, id: users.length+1})
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users),(err, data)=>{
         return res.json({status: "Succes", id:users.length})
    })
    
})




app.listen(PORT,()=>{
    console.log(`Server is running on Port no ${PORT}`);
    
})


























