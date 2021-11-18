const express = require('express')
var cors = require('cors')
const app = express()

let corsOptions = {
  origin:'http://localhost:3000'
}
require('dotenv').config()

app.use(express.json()) //passing all api request to json
app.use(cors(corsOptions))        //allowing diffrent domain access 
app.use(express.urlencoded({extended:true})); //accepting all url encoded requests

app.get('/', (req, res) => {
  res.send('Hello rat!')
})

app.listen(process.env.APP_PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.APP_PORT}`)
})