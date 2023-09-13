const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()

const personRoutes = require('./routes/personRoutes')

const app = express()
const PORT = process.env.PORT || 8000

app.use(bodyParser.json())


async function dbConnection(){
await  mongoose.connect( process.env.URL , { useNewUrlParser: true , useUnifiedTopology: true } )
    try {
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))        
    } catch (error) {
        console.log(error.message)
    }
}
dbConnection()

app.use('/api', personRoutes)