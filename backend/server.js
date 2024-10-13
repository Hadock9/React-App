const app = require('./app.js')
const db = require('./db.js')

const PORT = 4000

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
