require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const { MongoClient } = require('mongodb');
const uri = process.env.URI
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//This is the login route.
app.post('/login', (req, res) => {
  const {username: userDB, password: passDB} = req.body
  client.connect(async (err) => {
      const collection = client.db("Ploop").collection("Users");
      let user = await collection.findOne({username: userDB})
      if (user && user.password === passDB){
          res.sendStatus(200)
          console.log(username + " has logged in!")
      }
      else{
          res.send(404)
      }
  });
})

//This is the sign up route.
app.post('/signup', (req, res)=> {
  console.log(req.body)
  const {username: userDB, password: passwordDB, email: emailDB, gender:genderDB} = req.body;
  const user = {
    username: userDB, 
    password: passwordDB, 
    email: emailDB, 
    gender: genderDB
  }
  client.connect(async (err) => {
    const collection = client.db("Ploop").collection("Users");
    if (collection.findOne({username: userDB})){
      res.sendStatus(409)
    }
    else{
      await collection.insertOne(user)
      console.log("user (" + userDB + ", " + passwordDB + ", " + emailDB + ", " + genderDB + ") has been added!")
      res.sendStatus(200)
    }
});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})