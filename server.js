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
const mongoose = require("mongoose")




// Database Connections
mongoose.connect(DATABASE_URL)

// Connection msgs
mongoose.connection
    .on("open", () => { console.log("You are connected to mongodb")})
    .on("close", () => { console.log("You are disconnected")})
    .on("error", (error) => { console.log(error)})


//MODEL 
const PeopleSchema = new mongoose.Schema({
    name: String,
    image: String,
    title: String   
})
// Model: what info would we like to collect from our people? (name, img, title)
const People = mongoose.model("People", PeopleSchema)

// ROUTES - IDUC (this backend only consists of Index, Delete, Update, Create)
// In express, all methods (get, post, put, delete) take 2 things an HTTP takes: a path "/" and a call back function ()
// A callback function refers to a function that is passed as an argument to another function and is called back to a specific point during the execution of that function.
// Callback functions are often used to handle HTTP requests and responses. When a request is made to a specific route or endpoint, Express invokes the associated callback function to process the request and generate a response

// this is our test route 
app.get("/", (req, res) => {
    res.send("hello world")
})


// INDEX route (to get all of our people)
// we THEN add our Try/Catch method
app.get("/people", async (req, res) => {
    try {
       res.status(200).json( await People.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
})

// CREATE (create route is typically in a form format where we are submitting something)
app.post("/people", (req, res) => {
    res.send("/people - create route")
})

// Getting Data - Async Await & Try Catch 

//We know that making a request for data isn't instant and must be handled asyncronously. The PROMISE object represents the eventual completion (or failure) of an async operation and its resulting value. 
// Promise is in one of these states: 
    // pending: initial state, neither fulfilled nor rejected 
    // fulfilled: meaning that the operation was completed successfully.
    // rejected: meaning that the operation failed

// Potential interview question: What are they ways that you can consume a promise? 
// Async await method: 
app.get("/people", async (req, res) =>{

})








// Listener 
    // app.listen() is a method in express.js that starts a server and binds it to a specific port to listen for incoming HTTP requests.
    //PORT is a variable that represents the port number on which the server will listen.
app.listen(PORT, ()=> console.log(`Listening to the smoothe sounds of port ${PORT}`))