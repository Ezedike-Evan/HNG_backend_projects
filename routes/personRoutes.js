const express = require('express')

const router = express.Router()
const personController = require('../controllers/personController')

router.post('/', personController.createPerson)
router.get('/:user_id', personController.getPersonByName)
router.put('/:user_id', personController.updatePerson)
router.delete('/:user_id', personController.deletePerson)

module.exports = router