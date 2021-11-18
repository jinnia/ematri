const express = require('express')
var cors = require('cors')
const app = express()
require('dotenv').config()  //configure environment file
const db = require('./app/models')
const Role=db.role

db.mongoose.connect(
  `mongodb://localhost:27017/ematri`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(()=>{
  console.log('successfully connected')
  //initial()
}).catch(err=>{
  console.log('connection error'+err)
  process.exit
})

let corsOptions = {
  origin:'http://localhost:3000'
}


app.use(express.json()) //passing all api request to json
app.use(cors(corsOptions))        //allowing diffrent domain access 
app.use(express.urlencoded({extended:true})); //accepting all url encoded requests

app.get('/', (req, res) => {
  res.send('Hello rat!')
})



require('./app/routes/auth.routes')(app)

app.listen(process.env.APP_PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.APP_PORT}`)
})