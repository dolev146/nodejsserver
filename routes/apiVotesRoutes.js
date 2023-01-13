const { application } = require("express")
const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    console.log("get request sending votes")
    res.status(200).json({"message": "success get all votes"})
})

router.post('/', (req, res) => {
    console.log("post request create vote")
    res.status(200).json({"message": "success create vote"})
})

router.put('/', (req, res) => {
    console.log("put request update vote")
    res.status(200).json({"message": "success update vote"})
})

router.delete('/', (req, res) => {
    console.log("delete request delete vote")
    res.status(200).json({"message": "success delete vote"})
})


module.exports = router