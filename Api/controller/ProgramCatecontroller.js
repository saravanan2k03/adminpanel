const {DynamoDB,AWSS3} = require("../config/db");


const InsertProductcategories = async(req,res)=>{
    res.status(200).json({msg:'Inserted Productcategories'});
};


const GetProductcategoriesByProductId = async(req,res)=>{
    res.status(200).json({msg:'Getting Productcategories'});
};


const GetAllProductcategories = async(req,res)=>{
    res.status(200).json({msg:'Getting all Productcategories'});
};

const UpdateProductcategories = async(req,res)=>{
    res.status(200).json({msg:'Updating Productcategories'});
};

const DeleteProductcategories = async(req,res)=>{
    res.status(200).json({msg:'Deleting Productcategories'});
};


module.exports={InsertProductcategories, GetProductcategoriesByProductId,GetAllProductcategories,UpdateProductcategories,DeleteProductcategories};