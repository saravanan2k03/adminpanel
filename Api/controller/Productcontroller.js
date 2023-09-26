const dynamodb = require('../config/db')

const InsertProduct = async(req,res)=>{
    res.status(200).json({msg:'Inserted Product'});

};


const GetProductByProductId = async(req,res)=>{
    res.status(200).json({msg:'Getting Product'});
};


const GetAllProduct = async(req,res)=>{
    res.status(200).json({msg:'Getting all Product'});
};

const UpdateProduct = async(req,res)=>{
    res.status(200).json({msg:'Updating Product'});
};

const DeleteProduct = async(req,res)=>{
    res.status(200).json({msg:'Deleting Product'});
};


module.exports={InsertProduct, GetProductByProductId,GetAllProduct,UpdateProduct, DeleteProduct};