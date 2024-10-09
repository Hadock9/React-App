const db = require('./db.js')
const app = require('./Router.js')
const port = 4000

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`)
})
