/*
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
*/


const express = require('express');
const gTTS = require('gtts');
const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
res.send(`Hi!<br/>
  <i>Send me some text or some audio and I'll create a podcast for you!</i>`)
})
app.post('/generate-audio', (req, res) => {
  const { text, lang } = req.body;
  const gtts = new gTTS(text, lang || 'en');
  const filePath = './output.mp3';

  gtts.save(filePath, (err) => {
    if (err) return res.status(500).send('Error generating audio');
    res.download(filePath);
  });
});


module.exports = app;

// app.listen(3000, () => console.log('Server running on port 3000'));