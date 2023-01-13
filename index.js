//imports
const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv").config()
// listiner
const port = process.env.PORT || 5000


const app = express()

// mw
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/users' , require('./routes/apiUserRoutes'))
app.use('/api/celebs' , require('./routes/apiCelebsRoutes'))
app.use('/api/votes' , require('./routes/apiVotesRoutes'))





app.listen(port, () => console.log(`up and running on ${port}`))