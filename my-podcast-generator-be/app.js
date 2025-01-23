// server dependencies
const express = require('express')
const app = express() // stores an instance of express
// const scalesController = require('./controllers/music-notes')
app.use(express.json()) // parse body of data into json object

// create routes
// app.use("/scales", scalesController)

app.get('/',(req, res)=>{
  // console.log(req)
  res.send('Welcome to My Podcast Generator!')
}) // ()=>{} anonymous function is middleware

app.get("*", (req, res)=>{ //catach for request that don't matchany routes
  res.status(404).send("the resource you're looking for does not exist")
})

module.exports = app;