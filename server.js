const express = require('express')
const mongoose = require('mongoose')
// const { MongoClient } = require("mongodb");
//const personRoutes = require('./routes/personRoutes')
const URL = 'mongodb+srv://E4:ZjuMW8UpWKrjw44M@cluster0.jqsjmw3.mongodb.net/?retryWrites=true&w=majority'

async function dbConnection(){
    await  mongoose.connect(URL)
    try {
        app.listen(port, () => console.log(`Server is running on port ${port}`))        
    } catch (error) {
        console.log(error.message)
    }
}
dbConnection()

const app = express()

//app.use('/api', personRoutes)
app.get('/',(req,res)=>{
    res.send('hello there')
})
const port = process.env.PORT || 8000


