//Import express, and create new Express router instance
const express = require('express');
const router = express.Router();


//implementing routes
//Defining route to root  ('/')

router.get("/", (req, res) =>{
    res.send("This it the home page!");
});

//Defining route to about page

router.get("/about", (req, res) =>{
    res.send("This it the about page!");
});

//enable exporting the router for use in app.js file
module.exports = router;