const { application } = require("express")
const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    // print "get request sending all users"
    console.log("get request sending all users")
    res.status(200).json({"message": "success get all users"})
})

router.post('/', (req, res) => {
    console.log("post request create user")
    res.status(200).json({"message": "success create user"})
})

router.put('/', (req, res) => {
    console.log("put request update user")
    res.status(200).json({"message": "success update user"})
})

router.delete('/', (req, res) => {
    console.log("delete request delete user")
    res.status(200).json({"message": "success delete user"})
})


module.exports = router