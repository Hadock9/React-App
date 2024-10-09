const mysql = require('mysql')

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'react_app',
})

db.connect(err => {
	if (err) {
		console.error('Error connecting to MySQL:', err)
		return
	}
	console.log('Connected to MySQL database.')
})
module.exports = db
