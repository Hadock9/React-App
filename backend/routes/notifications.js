const express = require('express')
const {
	getNotificationsList,
} = require('../controllers/notificationsController')

const router = express.Router()

router.get('/:id', getNotificationsList)

module.exports = router
