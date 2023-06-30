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

