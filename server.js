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
// we are collecting info about ppl we work with (name, img, title)
const People = mongoose.model("People", PeopleSchema)

// ROUTES - INDUCES (the backend only consists of Index, Delete, Update, Create)
// In express, all methods (get, post, put, delete) take 2 things an HTTP takes: a path "/" and a call back function ()
// A callback function refers to a function that is passed as an argument to another function and is called back to a specific point during the execution of that function.
// Callback functions are often used to handle HTTP requests and responses. When a request is made to a specific route or endpoint, Express invokes the associated callback function to process the request and generate a response

app.get("/", (req, res) => {
    res.send("hello world")
})
// this is our test route 

// Index route (to get all of our people)
app.get("/people", (req, res) => {
    res.send("/people - index route")
})

// Create 
app.post("/people", (req, res) => {
    res.send("/people - create route")
})







// Listener 
    // app.listen() is a method in express.js that starts a server and binds it to a specific port to listen for incoming HTTP requests.
    //PORT is a variable that represents the port number on which the server will listen.
app.listen(PORT, ()=> console.log(`Listening to the smoothe sounds of port ${PORT}`))