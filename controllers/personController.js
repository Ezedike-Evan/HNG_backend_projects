const Person = require('../model/personModel')

//controllers
const createPerson = async (req, res) => {
  const { name , age , gender } = req.body
  try {
    const newPerson = new Person({ name, age, gender}) 
    await newPerson.save()
    res.status(201).json(newPerson)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const getPersonByName = async (req, res) => {
  const { user_id } = req.params 
  try {
    const person = await Person.findOne({name : user_id})
    if (!person) {
      return res.status(404).json({ error: 'Person not found' })
    }
    res.json(person)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const updatePerson = async (req, res) => {
  const { user_id } = req.params
  const { name, age, gender} = req.body
  try {
    const updatedPerson = await Person.findOneAndUpdate({name : user_id} , { name , age , gender } , {new : true})
    if (!updatedPerson) {
      return res.status(404).json({ error: 'Person not found' })
    }
    res.json(updatedPerson)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const deletePerson = async (req, res) => {
  const { user_id } = req.params
  try {
    const deletedPerson = await Person.findOneAndDelete(user_id)
    if (!deletedPerson) {
      return res.status(404).json({ error: 'Person not found' })
    }
    res.json({ message: 'Person deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = {
createPerson,
getPersonByName,
updatePerson,
deletePerson
}