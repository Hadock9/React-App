const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { OAuth2Client } = require('google-auth-library')
const db = require('../db.js')

const client = new OAuth2Client(
	'500804855419-pms6km4isevbtq88rpgbpp02tdjq26fm.apps.googleusercontent.com'
)
const secretKey =
	'"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"'

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
						[sub, email, hashPsevdoPassword, given_name, family_name, picture],
						(err, result) => {
							if (err) {
								console.error('Error saving user to database:', err)
								return res.status(500).json({ error: 'Database error' })
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
		console.error('Error:', error) // Логування помилки
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
