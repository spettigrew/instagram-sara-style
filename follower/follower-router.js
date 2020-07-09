const bcrypt = require("bcryptjs")
const followerModel = require("../follower/follower-model")
const authenticate = require("../middleware")
// assign signToken to followerToken

const router = require("express").Router()

router.get("/", authenticate, async (req, res, next) => {
    try {
        const followers = await followerModel.list()
        
        return res.status(201).json(followers)
    }
    catch (err) {
        next(err)
    }
})

router.get("/:id", authenticate, async (req, res, next) => {
    try {
        const { id } = req.params
        const profile = await followerModel.findById(id)

        if (profile) {
            return res.status(200).json(profile)
        } else {
            return res.status(404).json({ message: "Could not find profile with this Id." })
        }
    }
    catch(err) {
        next(err)
    }
})