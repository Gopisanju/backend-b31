const express=require("express")
const mongoose=require('mongoose')
const cors=require("cors")
const EmployeeModel=require('./model/Employee')
const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/b10")
app.post('/register',(req,res)=>{
  
    EmployeeModel.create(req.body)
    .then(employees=>res.json(employees))

    .catch(err=>res.json(err))

})
app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user.password==password)
        {
            res.json("success");
        }
        else(user.password==password)
            {
                res.json("incorrect password");
            }
    })


})

app.listen(4000, ()=>{
    console.log("server is running")

})
