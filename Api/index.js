const express = require('express');
const cors = require('cors');
const app = express();
const allroutes = require('./routes/Routes')
app.use(cors());
app.use(express.json());

const apiport = process.env.PORT || 3000;

app.use("/admin", allroutes);
app.listen(apiport, () => {
    console.log("Backend server is running" + " " + apiport);
  });