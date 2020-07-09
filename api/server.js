const express = require('express')
const cors =  require('cors')
const helmet = require('helmet')

const followerRouter = require("./follower/follower-router")
const followingRouter = require("./following/following-router")
const mediaRouter = require("./media/media-router")
const postRouter = require("./posts/post-router")
const userRouter = require("./user/user-router")

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

require('dotenv').config()

server.use("/api/follower", followerRouter)
server.use("/api/following", followingRouter)
server.use("/api/media", mediaRouter)
server.use("/api/posts", postRouter)
server.use("/api/user", userRouter)

server.get('/', (req, res, next) => {
    return res.status(201).json({ message: "Welcome to Insta-project, Sara-style!" })
})

server.use((err, req, res, next) => {
    console.log("Error", err)
    return res.status(500).json({ message: "Please try again." })
})

module.exports = server