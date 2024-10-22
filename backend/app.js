const express = require('express')
const cors = require('cors')
const authRoutes = require('./routes/auth')
const gamesRoutes = require('./routes/games')
const stakeRoutes = require('./routes/stake')
const newsRoutes = require('./routes/news')
const commentsRoutes = require('./routes/comments')
const notificationsRoutes = require('./routes/notifications')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

// Використання маршрутів
app.use('/api/auth', authRoutes)
app.use('/api/games', gamesRoutes)
app.use('/api/stake', stakeRoutes)
app.use('/api/news', newsRoutes)
app.use('/api/comments', commentsRoutes)
app.use('/api/notifications', notificationsRoutes)

module.exports = app
