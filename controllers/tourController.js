const fs = require('fs');
const Tour=require('./../models/tourModel')


exports.getAllTours = async(req, res) => {
    try{
 const tours=await Tour.find()

  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours
    }
  });
}catch(err){
    res.status(404).json({
        status:'fail',
        message:err
    })
}
}


exports.getTour = async (req, res) => {
 try{
     const tour=await Tour.findOne({name:req.params.id})
     res.status(200).json({
         status:'success',
         data:{tour}
     })
 }catch(err){
     res.status(400).json({
        status:'failure'
     })

 }
};

exports.createTour = async (req, res) => {
    try{
    const newTour=await Tour.create(req.body)
    res.status(201).json({
        status: 'success',
        data: {
          tour: newTour
        }
      });
    }
    catch(err){
      res.status(400).json({
        status: 'fail',
        data: err
    })
}
}

 
exports.updateTour = async (req, res) => {
  try{
      const tour=await Tour.findOneAndUpdate({name:req.params.id},req.body,{
          new:true,
          runValidators:true
      })
      res.status(200).json({
    status: 'success',
    data: {
      tour
    }
  });
}
catch(err){
}};

exports.deleteTour = async (req, res) => {
    try{
        await Tour.findOneAndDelete({name:req.params.id})
        res.status(204).json({
            status: 'success',
            data: null
          });
    }
    catch(err){
        res.status(404).json({
            status: 'failure',
    })
  
}}