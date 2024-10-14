
exports.updateProfile = async (req, res) => {
	const { id, first_name, last_name, date_of_birth, gender, phone, country, password } = req.body;

	const sqlSelectPass = 'SELECT password FROM Users WHERE id = ?';
	db.query(sqlSelectPass, [id], async (err, result) => {
		if (err) {
			console.error('Error querying database:', err);
			return res.status(500).json({ error: 'Database error' });
		}

		// Перевірка наявності користувача
		if (result.length === 0) {
			return res.status(404).json({ error: 'User not found' });
		}

		// Порівняння пароля
		const isMatch = await bcrypt.compare(password, result[0].password);
		if (!isMatch) {
			return res.status(401).json({ error: 'Incorrect password' });
		}

		// Якщо пароль правильний, продовжуємо оновлення профілю
		const sqlUpdate = `UPDATE Users SET first_name = ?, last_name = ?, date_of_birth = ?, gender = ?, phone_number = ?, country = ? WHERE id = ?`;

		db.query(sqlUpdate, [first_name, last_name, date_of_birth, gender, phone, country, id], (err, result) => {
			if (err) {
				console.error('Error updating user:', err);
				return res.status(500).json({ error: 'Database error' });
			}

			const sql = 'SELECT * FROM Users WHERE id = ?';
			db.query(sql, [id], async (err, result) => {
				if (err) {
					console.error('Error querying database:', err);
					return res.status(500).json({ error: 'Database error' });
				}

				const user = result[0];

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
				);

				return res.json({ token });
			});
		});
	});
};