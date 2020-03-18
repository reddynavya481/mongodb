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
}).then(()=>
    console.log("success")
)
const tourSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'specify a value'],
        unique:true
    },
    age:Number,
    gender:{
        type:String,
        required:[true,'gender must have a value']
    }
 })

const Tour=mongoose.model('Tour',tourSchema)

const testTour=new Tour({
    name:'navyareddy',
    age:21,
    gender:'female'
})
testTour.save().then((doc)=>{
    console.log(`saved ur contents ${doc}`)
}).catch(err=>{
    console.log(err)
})






app.listen(port,()=>{console.log(`listening on ${port}`)})