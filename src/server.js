const express = require('express')
const cors =  require('cors')
const helmet = require('helmet')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

require('dotenv').config()

server.get('/', (req, res, next) => {
    return res.status(201).json({ message: "Welcome to Insta-project, Sara-style!" })
})

server.use((err, req, res, next) => {
    console.log("Error", err)
    return res.status(500).json({ message: "Please try again." })
})

module.exports = server