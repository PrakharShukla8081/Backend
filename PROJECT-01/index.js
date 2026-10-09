const express = require("express")
const users = require("./MOCK_DATA.json")
const fs = require("fs")

const app = express()
const PORT = 8000;

app.use(express.json());

// MiddleWare - Plugin

app.use(express.urlencoded({extended:false}))

app.get('/users', (req,res)=>{
    const html = `
    <ul>
        ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
     res.send(html)
});

// REST API 
app.get('/api/users', (req, res)=>{
    return res.json(users)
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


app.post('/api/users', (req,res)=>{
    // TODO : Create new User

    const  body = req.body
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({msg: "All fields are required"})
    }
    users.push({...body, id: users.length+1})
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err, data)=>{

     return res.json({ status: "sucess",id:users.length});
    })
});

app.listen(PORT, ()=> console.log(`Server started at PORT:${PORT}`))

