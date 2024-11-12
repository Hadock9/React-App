const express = require('express')
const {
	getNotificationsList,
	GET_LIST,
	Delete_notification,
} = require('../controllers/notificationsController')

const router = express.Router()

router.get('/:id', getNotificationsList)

// For react-admin
router.get('/', GET_LIST)
router.delete('/:id', Delete_notification)
module.exports = router
