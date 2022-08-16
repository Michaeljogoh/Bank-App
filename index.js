const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT
const client = require('./services/db');





app.listen(PORT , ()=>{
    console.log(`Server Started at ${PORT}`)
})