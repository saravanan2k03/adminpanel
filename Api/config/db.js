const AWS = require('aws-sdk');
require('dotenv').config()
const config ={
    apiVersion:'2023-09-26',
    region: "ap-south-1",
    accessKeyId: "AKIASVCJ4LO6QLYPZSTU",
    secretAccessKey: "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",
    AWS_SDK_LOAD_CONFIG:1,
};
// apiVersion:'2023-09-26',
// region: "ap-south-1",
// accessKeyId: "AKIASVCJ4LO6QLYPZSTU",
// secretAccessKey: "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",
// AWS_SDK_LOAD_CONFIG:1,
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