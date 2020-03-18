const mongoose=require('mongoose')

const tourSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'specify a name'],
        unique:true
    },
    age:{
        type:Number,
    },
    proffesion:{
        type:String,
        required:[true,'there must be any proffesion'],
        trim:true
    },
    ageGroup:{
        type:String,
        required:[true,'u must belong to one age group']
    },
    gender:{
        type:String,
        required:[true,'gender must have a value']
    }
 })
 const Tour=mongoose.model('Tour',tourSchema)

 module.exports=Tour