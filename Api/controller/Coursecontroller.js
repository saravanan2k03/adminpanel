const {DynamoDB,AWSS3} = require("../config/db");
const { v4: uuidv4 } = require('uuid');

const InsertCourses = async(req,res)=>{
    const  courseId = uuidv4().toString();
    let data = {
        pk: "COURSE#",
        sk: "COURSECATEGORY#"+ courseId,
        GreyCourseTitle: req.body.GreyCourseTitle,
        BlackCourseTitle: req.body.BlackCourseTitle,
        Format:req.body.Format,
        Price: req.body.Price,
        Duration: req.body.Duration,
        Syllabus: req.body.Syllabus,
        Thumbnail: req.body.Thumbnail,
        DescriptionAfterThumbnails: req.body.DescriptionAfterThumbnails,
        CourseOutComeDescription:req.body.CourseOutComeDescription,
        OutComes:req.body.OutComes,
        Wywl:{},
        Faq:{},
        Active:true,
      };

      for (const key in req.body.Wywl) {
        if (req.body.Wywl.hasOwnProperty(key)) {
          data.Wywl[key] = req.body.Wywl[key];
        }
      }
      for (const key in req.body.Faq) {
        if (req.body.Faq.hasOwnProperty(key)) {
          data.Faq[key] = req.body.Faq[key];
        }
      }
      console.log("DataGetted:");
      console.log(data);
      const params = {
        TableName: "mentorfoxdev",
        Item: data,
      };
      
      DynamoDB.put(params, (err) => {
        if (err) {
          // Handle the error case
          console.error(err);
          res
            .status(500)
            .json({ error: "An error occurred while adding the Course" });
        } else {
          // Send a success response
          res.status(200).json({ message: "Course Added successfully" });
        }
      });

};


const GetCourseByCourseId = async(req,res)=>{
    const courseId = req.params.courseId;
    const params = {
      TableName: "mentorfoxdev",
      KeyConditionExpression: "pk = :pk and begins_with(sk, :sk)",
      ExpressionAttributeValues: {
        ":pk": "COURSE#",
        ":sk": "COURSECATEGORY#"+courseId,
      },
    };
     console.log(params);
    try {
      const data = await DynamoDB.query(params).promise();
      console.log(params);
      if (data.Items && data.Items.length > 0) {
        res.status(200).json(data.Items);
      } else {
        res.status(404).json({ msg: "No matching data found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while retrieving data" });
    }
};


const GetAllCourses = async(req,res)=>{
    const course = req.params.course;
    const params = {
        TableName: "mentorfoxdev",
        KeyConditionExpression: "pk = :pk",
        ExpressionAttributeValues: {
        ":pk": course+"#",
        },
      };
    
      try {
        const data = await DynamoDB.query(params).promise();
        console.log(params);
        if (data.Items && data.Items.length > 0) {
          res.status(200).json(data.Items);
        } else {
          res.status(404).json({ msg: "No matching data found" });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while retrieving data" });
      }
};

const UpdateCourses = async(req,res)=>{
  const courseId = req.body.courseId; 
    let data = {
        pk: "COURSE#",
        sk: "COURSECATEGORY#"+ courseId,
        CourseCategory: req.body.CourseCategory,
        GreyCourseTitle: req.body.GreyCourseTitle,
        BlackCourseTitle: req.body.BlackCourseTitle,
        Format:req.body.Format,
        Price: req.body.Price,
        Duration: req.body.Duration,
        Syllabus: req.body.Syllabus,
        Thumbnail: req.body.Thumbnail,
        DescriptionAfterThumbnails: req.body.DescriptionAfterThumbnails,
        CourseOutComeDescription:req.body.CourseOutComeDescription,
        OutComes:req.body.OutComes,
        Wywl:{},
        Faq:{},
        Active:true,
      };
      for (const key in req.body.Wywl) {
        if (req.body.Wywl.hasOwnProperty(key)) {
          data.Wywl[key] = req.body.Wywl[key];
        }
      }
      for (const key in req.body.Faq) {
        if (req.body.Faq.hasOwnProperty(key)) {
          data.Faq[key] = req.body.Faq[key];
        }
      }
      console.log("DataGetted:");
      console.log(data);
      const params = {
        TableName: "mentorfoxdev",
        Item: data,
      };
      
      DynamoDB.put(params, (err) => {
        if (err) {
          // Handle the error case
          console.error(err);
          res
            .status(500)
            .json({ error: "An error occurred while Update the Course" });
        } else {
          // Send a success response
          res.status(200).json({ message: "Course Updated successfully" });
        }
      });
};

const DeleteCourses = async(req,res)=>{
    const courseId = req.body.courseId; 
    const ActiveStatus = false;
    const params = {
      TableName: "mentorfoxdev",
      Key: {
        pk: "COURSE#",
        sk: "COURSECATEGORY#"+ courseId,
      },
      UpdateExpression: "SET Active = :Active", 
      ExpressionAttributeValues: {
        ":Active": ActiveStatus,
      },
      ReturnValues: "ALL_NEW", 
    };
    console.log(params);
    try {
      const updatedItem = await DynamoDB.update(params).promise();
      res.status(200).json(updatedItem.Attributes); 
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the course" });
    }
};


module.exports={InsertCourses, GetCourseByCourseId,GetAllCourses,UpdateCourses,DeleteCourses};