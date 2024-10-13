const express = require('express')
const cors = require('cors')
const authRoutes = require('./routes/auth')
const gamesRoutes = require('./routes/games')
const stakeRoutes = require('./routes/stake')

const app = express()
app.use(express.json())
app.use(cors())

// Використання маршрутів
app.use('/api/auth', authRoutes)
app.use('/api/games', gamesRoutes)
app.use('/api/stake', stakeRoutes)

module.exports = app
