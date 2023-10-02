const {DynamoDB,AWSS3} = require("../config/db");
const multer = require('multer');
const multerS3 = require('multer-s3');

const upload = multer({
  storage: multerS3({
      s3: AWSS3,
      acl: "public-read",
      bucket: process.env.AWS_BUCKET_NAME,
      key: function (req, file, cb) {
          console.log(file);
          cb(null, file.originalname)
      }
  })
});

const InsertCoursecategories = async (req, res) => {
  let data = {
    pk: "COURSE#7937",
    sk: "CATE#",
    CourseCategory: req.body.name,
    CreatedDate: req.body.createddate,
    Status: req.body.status,
    Who: "vasu",
    Details: {
      key1: "value1",
      key2: "value2",
    },
    syllabus:"",
  };
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
        .json({ error: "An error occurred while adding the CourseCategory" });
    } else {
      // Send a success response
      res.status(200).json({ message: "CourseCategory Added successfully" });
    }
  });
};

const GetCoursecategoriesByCourseId = async (req, res) => {
  const courseId = req.params.courseId;
  const params = {
    TableName: "mentorfoxdev",
    KeyConditionExpression: "pk = :pk and begins_with(sk, :sk)",
    ExpressionAttributeValues: {
      ":pk": "COURSE#" + courseId,
      ":sk": "CATEGORY#",
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

const GetAllCoursecategories = async (req, res) => {
  const params = {
    TableName: "mentorfoxdev",
    KeyConditionExpression: "pk = :pk",
    ExpressionAttributeValues: {
      ":pk": "COURSE#7937",
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

const UpdateCoursecategories = async (req, res) => {
  const courseId = req.body.courseId; 
  const newCategory = req.body.newCategory; 
  const params = {
    TableName: "mentorfoxdev",
    Key: {
      pk: "COURSE#" + courseId, 
      sk: "CATEGORY#", 
    },
    UpdateExpression: "SET CourseCategory = :newCategory", 
    ExpressionAttributeValues: {
      ":newCategory": newCategory,
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
      .json({ error: "An error occurred while updating the course category" });
  }
};

const DeleteCoursecategories = async (req, res) => {
  const courseId = req.body.courseId; 
  const params = {
    TableName: 'mentorfoxdev',
    Key: {
      pk: 'COURSE#' + courseId, 
      sk: 'CATEGORY#' 
    }
  };
  console.log(params);

  try {
    await DynamoDB.delete(params).promise();
    res.status(200).json({ msg: 'Course category deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting the course category' });
  }
};

module.exports = {
  InsertCoursecategories,
  GetCoursecategoriesByCourseId,
  GetAllCoursecategories,
  UpdateCoursecategories,
  DeleteCoursecategories,
};
