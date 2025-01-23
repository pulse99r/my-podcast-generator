const app = require('./app')
require('dotenv').config() // adds environment configuration

const PORT = process.env.PORT

app.listen(PORT,()=>{ //listens for a request at a specific port
  console.log(`I'm listening at PORT ${PORT}`)
})