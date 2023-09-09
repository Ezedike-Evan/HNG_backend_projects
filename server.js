const express = require('express')
const {Api} = require('./controller')

const app = express()

const PORT = process.env.PORT || 8000

app.get('/stage-1/api/' , Api)

app.listen(PORT)