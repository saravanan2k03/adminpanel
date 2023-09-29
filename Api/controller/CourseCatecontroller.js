const dynamodb = require('../config/db')

const InsertCoursecategories = async (req, res) => {
    let data = {
        pk: "PRODUCTCATEGORY",
        sk:"7937",
        CourseCategory: req.body.name,
        CreatedDate: req.body.createddate,
        Status: req.body.status,
        Who:"vasu",
        Details: {
            key1: "value1",
            key2: "value2",
        }
    };
    console.log("DataGetted:");
    console.log(data);
    const params = {
        TableName: "mentorfoxdev",
        Item: data,
    };

    dynamodb.put(params, (err) => {
        if (err) {
            // Handle the error case
            console.error(err);
            res.status(500).json({ error: "An error occurred while adding the CourseCategory" });
        } else {
            // Send a success response
            res.status(200).json({ message: "CourseCategory Added successfully" });
        }
    });
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