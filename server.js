//DEPENDENCIES
    // Download all your dependencies
    // you can easily delete things from your package.json or put "npm uninstall ___"

// Get .env vars 
// This gets all of our environment variables out of our env file and makes them available globally here inside the scope of the project. 
require("dotenv").config() 
// pull port and database url out of env file 
const { PORT, DATABASE_URL} = process.env 
const express = require("express")
const app = express() // extra step to be explicit 


// ROUTES 

// In express, all methods (get, post, put, delete) take 2 things an HTTP takes: a path "/" and a call back function ()
// A callback function refers to a function that is passed as an argument to another function and is called back to a specific point during the execution of that function.
// Callback functions are often used to handle HTTP requests and responses. When a request is made to a specific route or endpoint, Express invokes the associated callback function to process the request and generate a response
app.get("/", (req, res) => {
    res.send("hello world")
})






// Listener 
    // app.listen() is a method in express.js that starts a server and binds it to a specific port to listen for incoming HTTP requests.
    //PORT is a variable that represents the port number on which the server will listen.
app.listen(PORT, ()=> console.log(`Listening to the smoothe sounds of port ${PORT}`))