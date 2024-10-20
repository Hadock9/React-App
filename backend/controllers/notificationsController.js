const db = require('../db.js')

exports.getNotificationsList = (req, res) => {
	const sql = `SELECT n.*, s.*, 
       m.*
FROM Notifications n
JOIN stake s ON n.stake_id = s.id
JOIN matches m ON s.match_id = m.MATCHID
WHERE n.user_id = ?;`

	db.query(sql, [req.params.id], (err, result) => {
		if (err) {
			console.error('Database error:', err)
			return res
				.status(500)
				.json({ error: 'An error occurred while fetching notifications.' })
		}

		if (result.length === 0) {
			return res.status(404).json({ message: 'No notifications found.' }) // Обробка випадку, коли немає сповіщень
		}

		res.json(result) // Повертаємо сповіщення
	})
}
