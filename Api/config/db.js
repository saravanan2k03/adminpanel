const AWS = require('aws-sdk');
require('dotenv').config();
const config ={
    apiVersion:'2023-09-26',
    region: "ap-south-1",
    accessKeyId:process.env.AWS_ACCESSKEYID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_SDK_LOAD_CONFIG:1,
};

const DynamoDBConnection = (config) =>{
    try {
        AWS.config.update(config);
        const DB = new AWS.DynamoDB.DocumentClient();
        console.log('[INFO] connected To DynamoDB');
        return DB;
    } catch (error) {
        console.log('[ERROR] Error connecting to DynamoDB', error);
    }
};

const DynamoDB = DynamoDBConnection(config);
module.exports = DynamoDB;