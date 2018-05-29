require('dotenv').load();
const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.get('/', (req, res) => {
  axios.get('http://localhost:3001/')
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(e => {
      res.status(400).send(e ? e.message : 'Something went wrong')
    })
})

app.listen(process.env.PORT, process.env.HOST, (e) => {
  console.log(`Server is running on ${process.env.HOST}:${process.env.PORT}`)
})