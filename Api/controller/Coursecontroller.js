const {DynamoDB,AWSS3} = require("../config/db");


const InsertCourses = async(req,res)=>{
    res.status(200).json({msg:'Inserted courses'});

};


const GetCourseByCourseId = async(req,res)=>{
    res.status(200).json({msg:'Getting courses'});
};


const GetAllCourses = async(req,res)=>{
    res.status(200).json({msg:'Getting all course'});
};

const UpdateCourses = async(req,res)=>{
    res.status(200).json({msg:'Updating course'});
};

const DeleteCourses = async(req,res)=>{
    res.status(200).json({msg:'Deleting course'});
};


module.exports={InsertCourses, GetCourseByCourseId,GetAllCourses,UpdateCourses,DeleteCourses};