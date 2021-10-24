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

app.post('/login', (req, res) => {
    console.log(req)
    const {username: userDB, password: passDB} = req.body
    client.connect(async (err) => {
        const collection = client.db("Ploop").collection("Users");
        let user = await collection.findOne({username: userDB})
        if (user && user.password === passDB){
            console.log(true)
        }
        else{
            console.log(false)
        }
    });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})