const jwt = require('jsonwebtoken')

const db = require('../db.js')
const secretKey =
	'"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"'

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

				const user = result[0]

				// Створення токена
				const token = jwt.sign(
					{
						id: result[0].id,
						email: result[0].email,
						first_name: result[0].first_name,
						last_name: result[0].last_name,
						date_of_birth: result[0].date_of_birth,
						country: result[0].country,
						gender: result[0].gender,
						phone_number: result[0].phone_number,
						picture: result[0].picture,
						bonus_money: result[0].bonus_money,
						created_at: result[0].created_at,
					},
					secretKey,
					{ expiresIn: '1h' }
				)

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

			const user = result[0]

			// Створення токена
			const token = jwt.sign(
				{
					id: result[0].id,
					email: result[0].email,
					first_name: result[0].first_name,
					last_name: result[0].last_name,
					date_of_birth: result[0].date_of_birth,
					country: result[0].country,
					gender: result[0].gender,
					phone_number: result[0].phone_number,
					picture: result[0].picture,
					bonus_money: result[0].bonus_money,
					created_at: result[0].created_at,
				},
				secretKey,
				{ expiresIn: '1h' }
			)

			return res.json({ token })
		})
	})
}
