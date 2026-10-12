const express = require("express")

const mongoose = require('mongoose')

const fs = require("fs")

const app = express()
const PORT = 8000;

// Connecction 

mongoose.connect('mongodb://127.0.0.1:27017/youtube-app-1')
.then(()=> console.log('Mongo Db Connected'))
.catch(err => console.log("Mongo Error",err));


//Schema 
const userSchema = new mongoose.Schema({
    firstName :{
        type: String,
        required : true,
    },
    lastName: {
        type : String
    },
    email:{
        type :String,
        require: true,
        unique: true
    },
    jobTitle:{
        type:String 
    },
    gender:{
        type: String
    },
},
    { timestamps: true}
)

const User =  mongoose.model("user", userSchema );

app.use(express.json());

// MiddleWare - Plugin

app.use(express.urlencoded({extended:false}))

app.get('/users', async(req,res)=>{
    const allDBUsers = await User.find({})
    const html = `
    <ul>
        ${allDBUsers.map((user)=>`<li>${user.firstName}- ${user.email}</li>`).join("")}
    </ul>
    `;
     res.send(html)
});

// REST API 
app.get('/api/users', async(req, res)=>{
        const allDBUsers = await User.find({})

    return res.json(allDBUsers)
})

app.route('/api/users/:id').get((req, res)=>{
    const id = Number(req.params.id)
    const user = users.find((user)=> user.id === id)
    return res.json(user)
}).patch((req,res)=>{
    const id =   Number(req.params.id)
    const body = req.body

    const user = users.find((user)=>user.id===id)

        if(!user){
            return res.status(404).json({status: "User not found"})
        }

        Object.assign(user, body)
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users),(err,data)=>{
        return res.json({status:"Sucess"})
        })


    
})
  .delete((req,res)=>{
    const id = Number(req.params.id)
    const body = req.body
    const user = users.find((user)=>user.id===id)

    const updatedUser = users.filter((user)=>user.id !== id)

    fs.writeFile('./MOCK_DATA.json',JSON.stringify(updatedUser), (err,data)=>{
        return res.json({status:"Success"})
    } )

  })


app.post('/api/users',async(req,res)=>{
    // TODO : Create new User

    const  body = req.body
    if(
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email || 
        !body.gender ||
        !body.job_title
    ){
        return res.status(400).json({msg: "All fields are required"})
    }
   const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title

   })
   console.log(result);
   
   return res.status(201).json({msg:"success"})
});

app.listen(PORT, ()=> console.log(`Server started at PORT:${PORT}`))

