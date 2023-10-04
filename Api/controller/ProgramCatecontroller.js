const {DynamoDB,AWSS3} = require("../config/db");
const { v4: uuidv4 } = require('uuid');


const InsertProgramcategories = async(req,res)=>{
  const  Programcategoryid = uuidv4().toString();
  let data = {
    pk: "PROGRAMCATEGORY",
    sk: Programcategoryid,
    ProgramCategory: req.body.name,
    Active: true,
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
        .json({ error: "An error occurred while adding the ProgramCategory" });
    } else {
      // Send a success response
      res.status(200).json({ message: "ProgrameCategory Added successfully" });
    }
  });
};


const GetProgramcategoriesByProgramId = async(req,res)=>{
    const Programcategoryid = req.params.Programcategoryid;
    const params = {
      TableName: "mentorfoxdev",
      KeyConditionExpression: "pk = :pk and begins_with(sk, :sk)",
      ExpressionAttributeValues: {
        ":pk": "PROGRAMCATEGORY",
        ":sk": Programcategoryid,
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
    }};


const GetAllProgramcategories = async(req,res)=>{
    const params = {
        TableName: "mentorfoxdev",
        KeyConditionExpression: "pk = :pk",
        ExpressionAttributeValues: {
          ":pk": "PROGRAMCATEGORY",
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
      }};

const UpdateProgramcategories = async(req,res)=>{
    const  Programcategoryid = req.body.Programcategoryid;
    let data = {
      pk: "PROGRAMCATEGORY",
      sk: Programcategoryid,
      ProgramCategory: req.body.name,
      Active: true,
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
          .json({ error: "An error occurred while updating the ProgramCategory" });
      } else {
        // Send a success response
        res.status(200).json({ message: "ProgramCategory updated successfully" });
      }
    });};

const DeleteProgramcategories = async(req,res)=>{
    const Programcategoryid = req.body.Programcategoryid; 
    const ActiveStatus = false; 
    const params = {
      TableName: "mentorfoxdev",
      Key: {
        pk: "PROGRAMCATEGORY", 
        sk: Programcategoryid, 
      },
      UpdateExpression: "SET Active = :ActiveStatus", 
      ExpressionAttributeValues: {
        ":ActiveStatus": ActiveStatus,
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
        .json({ error: "An error occurred while Deleting the course category" });
    }
  };


module.exports={InsertProgramcategories, GetProgramcategoriesByProgramId,GetAllProgramcategories,UpdateProgramcategories,DeleteProgramcategories};