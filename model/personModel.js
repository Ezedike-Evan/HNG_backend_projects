const mongoose = require('mongoose')

const personSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            unique : true,
            required : true,
        },
        gender : {
            type : String,
            lowercase : true,
            enum : ['male','female']
        }
    }
)

const Person = mongoose.model('Person', personSchema)

module.exports = Person
