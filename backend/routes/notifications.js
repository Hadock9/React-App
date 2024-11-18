const express = require('express')
const {
	getNotificationsList,
	GET_LIST,
	Delete_notification,
	Create_notifications,
} = require('../controllers/notificationsController')

const router = express.Router()

router.get('/:id', getNotificationsList)

// For react-admin
router.get('/', GET_LIST)
router.delete('/:id', Delete_notification)
router.post('/', Create_notifications)
module.exports = router
