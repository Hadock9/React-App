const jwt = require('jsonwebtoken')

const db = require('../db.js')
const generateToken = require('./token/tokenUtils')
exports.updateProfile = async (req, res) => {
	const { id, first_name, last_name, date_of_birth, gender, phone, country } =
		req.body

	const sqlUpdate = `UPDATE Users SET first_name = ?, last_name = ?, date_of_birth = ?, gender = ?, phone_number = ?, country = ? WHERE id = ?`

	db.query(
		sqlUpdate,
		[first_name, last_name, date_of_birth, gender, phone, country, id],
		(err, result) => {
			if (err) {
				console.error('Error updating user:', err)
				return res.status(500).json({ error: 'Database error' })
			}

			const sql = 'SELECT * FROM Users WHERE id = ?'
			db.query(sql, [id], async (err, result) => {
				if (err) {
					console.error('Error querying database:', err)
					return res.status(500).json({ error: 'Database error' })
				}

				const token = generateToken(result[0])

				return res.json({ token })
			})
		}
	)
}

exports.updateBonusMoney = async (req, res) => {
	const { id, bonus_money, amount, action } = req.body

	const sqlUpdate = `UPDATE Users SET  bonus_money = ? WHERE id = ?`
	let money = 0
	if (action === 'add') {
		money = bonus_money + amount
	} else if (action === 'sub') {
		money = bonus_money - amount
	}
	db.query(sqlUpdate, [money, id], (err, result) => {
		if (err) {
			console.error('Error updating bonus_money:', err)
			return res.status(500).json({ error: 'Database error' })
		}

		const sql = 'SELECT * FROM Users WHERE id = ?'
		db.query(sql, [id], async (err, result) => {
			if (err) {
				console.error('Error querying database:', err)
				return res.status(500).json({ error: 'Database error' })
			}

			// Створення токена
			const token = generateToken(result[0])

			return res.json({ token })
		})
	})
}

exports.GetMoney = (req, res) => {
	const sql = `
		SELECT bonus_money FROM users 
	 WHERE id = ?;
	`
	// Виконуємо основний запит
	db.query(sql, [req.params.id], (err, results) => {
		if (err) {
			return res.status(500).json({ error: err.message })
		}

		res.json(results)
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
		SELECT * FROM users 
	 
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
		const countSql = 'SELECT COUNT(*) AS total FROM users'
		db.query(countSql, (countErr, countResults) => {
			if (countErr) {
				return res.status(500).json({ error: countErr.message })
			}

			const total = countResults[0].total

			// Формуємо заголовок `Content-Range` на основі фактичних даних
			const contentRange = `news ${start}-${
				start + results.length - 1
			}/${total}`
			console.log('Content-Range:', contentRange) // Діагностика Content-Range

			res.setHeader('Content-Range', contentRange)
			res.setHeader('Access-Control-Expose-Headers', 'Content-Range')
			res.json(results)
		})
	})
}
