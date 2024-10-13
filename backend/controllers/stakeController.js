const db = require('../db.js')

exports.getStakeList = (req, res) => {
	const sql = 'SELECT * FROM Stake'
	db.query(sql, (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message })
		}
		res.json(result)
	})
}

exports.createStake = (req, res) => {
	const { match_id, amount, Coef, status } = req.body
	const sql =
		'INSERT INTO Stake (match_id, amount, Coef, stake_time, status) VALUES (?, ?, ?, NOW(), ?)'

	db.query(sql, [match_id, amount, Coef, status], (err, result) => {
		if (err) {
			console.error('Error inserting stake:', err)
			return res.status(500).json({ error: 'Database error' })
		}
		return res.status(201).json({ id: result.insertId })
	})
}
