const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
require('dotenv/config');
 

// Middleware - bodyParser
app.use(bodyParser.json());


//Import Route 

const postsRoute = require('./routes/posts.js');

app.use('/posts', postsRoute);

// Route

app.get('/',(req, res) => {
    res.send('We are on home');
});










//Connect to DB   

runMongoose()




async function runMongoose(){
  try {
    await mongoose.connect(
      process.env.DB_CNNECTION, 
      { useNewUrlParser: true }
  ); 
    console.log("mongodb is OK");
  } catch (error) {
    console.log("mongodb Warning", error);
  }
} 

    
//How to we start listening to th server

app.listen(3001);



