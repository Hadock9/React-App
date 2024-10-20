const express = require('express')
const cors = require('cors')
const authRoutes = require('./routes/auth')
const gamesRoutes = require('./routes/games')
const stakeRoutes = require('./routes/stake')
const newsRoutes = require('./routes/news')
const commentsRoutes = require('./routes/comments')
const notificationsRoutes = require('./routes/notifications')

const app = express()
app.use(cors())
app.use(express.json())

// Використання маршрутів
app.use('/api/auth', authRoutes)
app.use('/api/games', gamesRoutes)
app.use('/api/stake', stakeRoutes)
app.use('/api/news', newsRoutes)
app.use('/api/comments', commentsRoutes)
app.use('/api/notifications', notificationsRoutes)

module.exports = app
