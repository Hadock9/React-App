const express = require('express')
const {
	GET_LIST,
	CreateRequest,
	DeleteRequest,
} = require('../controllers/supportController')

const router = express.Router()

router.post('/', CreateRequest)

// For react-admin
router.get('/', GET_LIST)
router.delete('/:id', DeleteRequest)
module.exports = router
