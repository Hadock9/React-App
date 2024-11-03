const db = require('../db.js')

exports.getStakeList = (req, res) => {
	const sql = `
	SELECT Stake.*, teams.TeamName, teams.TeamLogo, teams.TeamCountry
	FROM Stake
	JOIN teams ON Stake.team_id = teams.TeamID
	WHERE Stake.user_id = ?;`
	db.query(sql, [req.params.id], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message })
		}
		res.json(result)
	})
}

exports.createStake = (req, res) => {
	const { match_id, amount, Coef, team_id, user_id } = req.body

	const sql = `
		INSERT INTO Stake (match_id, amount, Coef, stake_time, status, user_id, team_id) 
		VALUES (?, ?, ?, NOW(), 'pending', ?, ?)
	`

	db.query(sql, [match_id, amount, Coef, user_id, team_id], (err, result) => {
		if (err) {
			console.error('Error inserting stake:', err)
			return res.status(500).json({ error: 'Database error' })
		}
		return res.status(201).json({ id: result.insertId })
	})
}
