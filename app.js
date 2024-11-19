// Import the Express module and router from pages.js file
const express = require('express');
const router = require("./routes/pages");

//Create an Express application and define the port number for the server as 3000
const app = express();
const PORT = 3000;

//Middleware to handle the routing
app.use('/', router); //apply router to all paths

//Initialize the server and listen on port specified above
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});  