const db = require('../db.js')

exports.getNotificationsList = (req, res) => {
	const sql = `SELECT n.*, s.*, 
       t.*
FROM Notifications n
JOIN stake s ON n.stake_id = s.id
JOIN teams t ON s.team_id = t.teamid
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

exports.GET_LIST = (req, res) => {
	// параметри `range` та `sort` з запиту
	const range = JSON.parse(req.query.range || '[0, 9]')
	const sort = JSON.parse(req.query.sort || '["id", "ASC"]')

	const start = range[0]
	const end = range[1]
	const limit = end - start + 1
	const offset = start

	const [sortField, sortOrder] = sort

	// Основний SQL-запит з урахуванням сортування, обмеження та зміщення
	const sql = `
		SELECT n.*, s.amount,s.Coef,s.stake_time,	
				t.TeamName, t.TeamLogo, t.TeamCountry
	FROM Notifications n
	JOIN stake s ON n.stake_id = s.id
	JOIN teams t ON s.team_id = t.teamid
		ORDER BY ?? ${sortOrder === 'DESC' ? 'DESC' : 'ASC'}
		LIMIT ? OFFSET ?;
	`

	// Параметри для запиту
	const queryParams = [sortField, limit, offset]

	// Виконуємо основний запит
	db.query(sql, queryParams, (err, results) => {
		if (err) {
			return res.status(500).json({ error: err.message })
		}

		// Запит для підрахунку загальної кількості записів
		const countSql = 'SELECT COUNT(*) AS total FROM Notifications'
		db.query(countSql, (countErr, countResults) => {
			if (countErr) {
				return res.status(500).json({ error: countErr.message })
			}

			const total = countResults[0].total

			// Формуємо заголовок `Content-Range` на основі фактичних даних
			const contentRange = `notifications ${start}-${
				start + results.length - 1
			}/${total}`
			console.log('Content-Range:', contentRange) // Діагностика Content-Range

			res.setHeader('Content-Range', contentRange)
			res.setHeader('Access-Control-Expose-Headers', 'Content-Range')
			res.json(results)
		})
	})
}
