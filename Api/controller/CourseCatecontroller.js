const dynamodb = require('../config/db')

const InsertCoursecategories = async(req,res)=>{
    res.status(200).json({msg:'Inserted coursescategories'});

};


const GetCoursecategoriesByCourseId = async(req,res)=>{
    res.status(200).json({msg:'Getting coursescategories'});
};


const GetAllCoursecategories = async(req,res)=>{
    res.status(200).json({msg:'Getting all coursecategories'});
};

const UpdateCoursecategories = async(req,res)=>{
    res.status(200).json({msg:'Updating coursecategories'});
};

const DeleteCoursecategories = async(req,res)=>{
    res.status(200).json({msg:'Deleting coursecategories'});
};


module.exports={InsertCoursecategories, GetCoursecategoriesByCourseId,GetAllCoursecategories,UpdateCoursecategories,DeleteCoursecategories};