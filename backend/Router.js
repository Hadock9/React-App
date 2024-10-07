const db = require('./db.js')
const express = require('express')
const cors = require('cors')
bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const secretKey =
	'"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"'

const app = express()
app.use(express.json())
app.use(cors())

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
app.get('/api/Stake1', (req, res) => {
	const sql = 'SELECT * FROM Stake'
	db.query(sql, (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message })
		}
		res.json(result)
	})
})

app.post('/api/Stake', (req, res) => {
	const { match_id, amount, Coef, status } = req.body

	const sql = `
			INSERT INTO Stake (match_id, amount, Coef, stake_time, status) 
			VALUES (?, ?, ?, NOW(), ?);
	`

	db.query(sql, [match_id, amount, Coef, status], (err, result) => {
		if (err) {
			console.error('Error inserting stake:', err)
			return res.status(500).json({ error: 'Database error' })
		}
		console.log('Stake inserted with ID:', result.insertId)
		return res.status(201).json({ id: result.insertId })
	})
})

app.post('/api/Login', async (req, res) => {
	const { Email, Password } = req.body

	const sql = `
			SELECT * FROM Users WHERE email = ?;
	`

	db.query(sql, [Email], async (err, result) => {
		if (err) {
			console.error('Error querying database:', err)
			return res.status(500).json({ error: 'Database error' })
		}

		if (result.length === 0) {
			return res.status(404).json({ message: 'Email not found' })
		}

		const isMatch = await bcrypt.compare(Password, result[0].password)
		if (isMatch) {
			const token = jwt.sign(
				{
					id: result[0].id,
					email: result[0].email,
					first_name: result[0].first_name,
					last_name: result[0].last_name,
					created_at: result[0].created_at,
				},
				secretKey,
				{ expiresIn: '1h' }
			)

			return res.json({ token })
		} else {
			return res.status(401).json({ message: 'Incorrect password' })
		}
	})
})

app.post('/api/Registration', (req, res) => {
	const { Email, Password, First_Name, Last_Name } = req.body
	var hashPassword = bcrypt.hashSync(Password, 7)
	const sql = `
			INSERT INTO Users (Email, Password, First_Name, Last_Name) 
			VALUES (?, ?, ?, ?);
	`

	db.query(sql, [Email, hashPassword, First_Name, Last_Name], (err, result) => {
		if (err) {
			console.error('Error inserting stake:', err)
			return res.status(500).json({ error: 'Database error', err })
		}
		console.log(' inserted with ID:', result.insertId)
		return res.status(201).json({ id: result.insertId })
	})
})

module.exports = app
