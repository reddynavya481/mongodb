const dotenv=require('dotenv')
const Tour=require('./models/tourModel')
const mongoose=require('mongoose')
dotenv.config({path:'./config.env'});
const port=3000
DB=process.env.DATABASE_LOCAL
const express=require('express')
// const port=3000
const app=require('./app')

mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(()=>
    console.log("success")
)










app.listen(port,()=>{console.log(`listening on ${port}`)})