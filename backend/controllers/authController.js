const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { OAuth2Client } = require('google-auth-library')
const db = require('../db.js')

const client = new OAuth2Client(
	'500804855419-pms6km4isevbtq88rpgbpp02tdjq26fm.apps.googleusercontent.com'
)
const secretKey =
	'"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"'

const https = require('https')
const fs = require('fs')
const path = require('path')

exports.googleLogin = async (req, res) => {
	try {
		const { token } = req.body

		const ticket = await client.verifyIdToken({
			idToken: token,
			audience:
				'500804855419-pms6km4isevbtq88rpgbpp02tdjq26fm.apps.googleusercontent.com',
		})

		const payload = ticket.getPayload()
		const { sub, email, given_name, family_name, picture } = payload

		const imageDirectory = path.join(__dirname, '../uploads')

		const imagePath = path.join(imageDirectory, sub + '.jpg')
		const UserImgUrl = '/uploads/' + sub + '.jpg'

		if (!fs.existsSync(imagePath)) {
			// Якщо зображення не існує, завантажуємо його
			https
				.get(picture, res => {
					const fileStream = fs.createWriteStream(imagePath)

					res.pipe(fileStream)

					fileStream.on('finish', () => {
						fileStream.close()
						console.log('Зображення успішно збережено!')
					})
				})
				.on('error', err => {
					console.error('Помилка при завантаженні зображення:', err.message)
				})
		} else {
			console.log('Зображення вже існує, завантаження не потрібно.')
		}

		db.query(
			'SELECT * FROM users WHERE googleId = ?',
			[sub],
			(err, results) => {
				if (err) {
					console.error('Error checking user in database:', err)
					return res.status(500).json({ error: 'Database error' })
				}

				if (results.length === 0) {
					var hashPsevdoPassword = bcrypt.hashSync(email, 4)
					const newUserQuery =
						'INSERT INTO Users (googleId, email, password, first_name, last_name,  picture) VALUES (?, ?, ?, ?, ? ,?)'
					db.query(
						newUserQuery,
						[
							sub,
							email,
							hashPsevdoPassword,
							given_name,
							family_name,
							UserImgUrl,
						],
						(err, result) => {
							if (err) {
								console.error('Error saving user to database:', err)
								return res.status(500).json({ error: 'Database error' })
							}

							db.query(
								'SELECT * FROM users WHERE googleId = ?',
								[sub],
								(err, result) => {
									if (err) {
										console.error('Error checking user in database:', err)
										return res.status(500).json({ error: 'Database error' })
									}

									if (result.length === 0) {
										return res.status(404).json({ message: 'User not found' })
									}

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
											created_at: result[0].created_at,
										},
										secretKey,
										{ expiresIn: '1h' }
									)

									return res.json({ token })
								}
							)
						}
					)
				} else {
					db.query(
						'SELECT * FROM users WHERE googleId = ?',
						[sub],
						(err, result) => {
							if (err) {
								console.error('Error checking user in database:', err)
								return res.status(500).json({ error: 'Database error' })
							}

							if (result.length === 0) {
								return res.status(404).json({ message: 'User not found' })
							}

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
									created_at: result[0].created_at,
								},
								secretKey,
								{ expiresIn: '1h' }
							)

							return res.json({ token })
						}
					)
				}
			}
		)
	} catch (error) {
		console.error('Error:', error)
		return res.status(400).json({ error: 'Invalid token' })
	}
}

exports.login = async (req, res) => {
	const { Email, Password } = req.body
	const sql = 'SELECT * FROM Users WHERE email = ?'

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
					date_of_birth: result[0].date_of_birth,
					country: result[0].country,
					gender: result[0].gender,
					phone_number: result[0].phone_number,
					picture: result[0].picture,
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
}

exports.registration = (req, res) => {
	const { Email, Password, First_Name, Last_Name } = req.body
	const hashPassword = bcrypt.hashSync(Password, 7)
	const sql =
		'INSERT INTO Users (email, password, first_name, last_name) VALUES (?, ?, ?, ?)'

	db.query(sql, [Email, hashPassword, First_Name, Last_Name], (err, result) => {
		if (err) {
			console.error('Error inserting user:', err)
			return res.status(500).json({ error: 'Database error' })
		}
		return res.status(201).json({ id: result.insertId })
	})
}

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
						id: user.id,
						email: user.email,
						first_name: user.first_name,
						last_name: user.last_name,
						date_of_birth: user.date_of_birth,
						country: user.country,
						gender: user.gender,
						phone_number: user.phone_number,
						picture: user.picture,
						created_at: user.created_at,
					},
					secretKey,
					{ expiresIn: '1h' }
				)

				return res.json({ token })
			})
		}
	)
}
