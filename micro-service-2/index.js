require('dotenv').load()
const express = require('express')
const app = express()

app.get('/', (req, res) => res.json({ message: 'Hello from 2nd service', services: ["Buying", "Selling", "Printer"] }))

app.listen(process.env.PORT, process.env.HOST, (e) => {
  console.log(`Server is running on ${process.env.HOST}:${process.env.PORT}`)
})
