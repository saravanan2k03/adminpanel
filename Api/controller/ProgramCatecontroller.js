const {DynamoDB,AWSS3} = require("../config/db");


const InsertProgramcategories = async(req,res)=>{
    res.status(200).json({msg:'Inserted Productcategories'});
};


const GetProgramcategoriesByProgramId = async(req,res)=>{
    res.status(200).json({msg:'Getting Productcategories'});
};


const GetAllProgramcategories = async(req,res)=>{
    res.status(200).json({msg:'Getting all Productcategories'});
};

const UpdateProgramcategories = async(req,res)=>{
    res.status(200).json({msg:'Updating Productcategories'});
};

const DeleteProgramcategories = async(req,res)=>{
    res.status(200).json({msg:'Deleting Productcategories'});
};


module.exports={InsertProgramcategories, GetProgramcategoriesByProgramId,GetAllProgramcategories,UpdateProgramcategories,DeleteProgramcategories};