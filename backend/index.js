const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const port = 4000
const app = express()
app.use(cors())
// Middleware

// MySQL connection
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'react_app',
})

db.connect(err => {
	if (err) {
		console.error('Error connecting to MySQL:', err)
		return
	}
	console.log('Connected to MySQL database.')
})

// Routes
app.get('/api/users', (req, res) => {
	const sql = 'SELECT * FROM users'
	db.query(sql, (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message })
		}
		res.json(result)
	})
})
app.get('/api/Games_List', (req, res) => {
	const sql = 'SELECT * FROM Games_List'
	db.query(sql, (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message })
		}
		res.json(result)
	})
})

app.get('/api/Match_List', (req, res) => {
	const sql =
		'SELECT M.MatchID, M.Place, M.VsDateTime, T1.TeamName AS Team1Name, T1.TeamLogo AS Team1Logo, T1.TeamCountry AS Team1Country, M.Team1Coef, T2.TeamName AS Team2Name, T2.TeamLogo AS Team2Logo, T2.TeamCountry AS Team2Country, M.Team2Coef FROM Matches M JOIN Teams T1 ON M.Team1ID = T1.TeamID JOIN Teams T2 ON M.Team2ID = T2.TeamID;'
	db.query(sql, (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message })
		}
		res.json(result)
	})
})
app.get('/api/Match_List/Match/:id', (req, res) => {
	const sql = `SELECT M.MatchID, M.Place, M.time, M.VsDateTime, T1.TeamName AS Team1Name, T1.TeamLogo AS Team1Logo, T1.TeamCountry AS Team1Country, M.Team1Coef, T2.TeamName AS Team2Name, T2.TeamLogo AS Team2Logo, T2.TeamCountry AS Team2Country, M.Team2Coef, M.Team1Score ,M.Team2Score FROM Matches M JOIN Teams T1 ON M.Team1ID = T1.TeamID JOIN Teams T2 ON M.Team2ID = T2.TeamID WHERE M.MatchID = ${req.params.id} ;`
	db.query(sql, (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message })
		}
		res.json(result)
	})
})

app.post('/api/users', (req, res) => {
	const { name, age } = req.body
	const sql = 'INSERT INTO users (name, age) VALUES (?, ?)'
	db.query(sql, [name, age], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message })
		}
		res.json({ id: result.insertId, name, age })
	})
})

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`)
})
