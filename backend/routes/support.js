const express = require('express')
const { GET_LIST, CreateRequest } = require('../controllers/supportController')

const router = express.Router()

router.post('/', CreateRequest)

// For react-admin
router.get('/', GET_LIST)

module.exports = router
