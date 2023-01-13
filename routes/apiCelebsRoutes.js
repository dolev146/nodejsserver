const { application } = require("express")
const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    console.log("get request sending celebs")
    res.status(200).json({"message": "success get all celebs"})
})

router.post('/', (req, res) => {
    console.log("post request create celeb")
    res.status(200).json({"message": "success create celeb"})
})

router.put('/', (req, res) => {
    console.log("put request update celeb")
    res.status(200).json({"message": "success update celeb"})
})

router.delete('/', (req, res) => {
    console.log("delete request delete celeb")
    res.status(200).json({"message": "success delete celeb"})
})


module.exports = router