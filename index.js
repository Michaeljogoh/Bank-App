const express = require('express');
const app = express();
require('dotenv').config();
require('./services/db');
const cors = require('cors')
const PORT = process.env.PORT
const bankRoute = require('./route/bankRoute');


// Cors 
app.use(cors({origin:"*", credentials: true , methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']}))

// bodyparser
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// routes
app.use(bankRoute);





app.listen(PORT , ()=>{
    console.log(`Server Started at ${PORT}`)
})