const dotenv=require('dotenv')
// const app=require('./app')
const mongoose=require('mongoose')
dotenv.config({path:'./config.env'});
const port=3000
DB=process.env.DATABASE_LOCAL
const express=require('express')
// const port=3000
const app=express()

mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(con=>{
    console.log("success")
})



app.listen(port,()=>{console.log(`listening on ${port}`)})