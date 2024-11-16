const express = require('express')
const {
	getNotificationsList,
	GET_LIST,
} = require('../controllers/notificationsController')

const router = express.Router()

router.get('/:id', getNotificationsList)

// For react-admin
router.get('/', GET_LIST)

module.exports = router
