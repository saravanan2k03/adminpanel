const {DynamoDB,AWSS3} = require("../config/db");


const InsertProgram = async(req,res)=>{
    res.status(200).json({msg:'Inserted Product'});

};


const GetProgramByProgramId = async(req,res)=>{
    res.status(200).json({msg:'Getting Product'});
};


const GetAllProgram = async(req,res)=>{
    res.status(200).json({msg:'Getting all Product'});
};

const UpdateProgram = async(req,res)=>{
    res.status(200).json({msg:'Updating Product'});
};

const DeleteProgram = async(req,res)=>{
    res.status(200).json({msg:'Deleting Product'});
};


module.exports={InsertProgram, GetProgramByProgramId,GetAllProgram,UpdateProgram, DeleteProgram};