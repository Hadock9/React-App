const db = require('../db.js')

exports.getMatchList = (req, res) => {
	const sql =
		'SELECT M.MatchID, M.Place, M.season, M.VsDate, T1.TeamName AS Team1Name, T1.TeamLogo AS Team1Logo, T1.TeamCountry AS Team1Country, M.Team1Coef, T2.TeamName AS Team2Name, T2.TeamLogo AS Team2Logo, T2.TeamCountry AS Team2Country, M.Team2Coef, GL.name AS GameName, GL.min_logo AS GameMinLogo FROM Matches M JOIN Teams T1 ON M.Team1ID = T1.TeamID JOIN Teams T2 ON M.Team2ID = T2.TeamID JOIN Games_List GL ON M.game_id = GL.id'
	db.query(sql, (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message })
		}
		res.json(result)
	})
}
exports.getMatchListPagination = (req, res) => {
	try {
		const limit = parseInt(req.query._limit) || 10
		const page = parseInt(req.query._page) || 1
		const offset = (page - 1) * limit

		// SQL-запит з обмеженням і зміщенням
		db.query(
			`SELECT M.MatchID, M.Place, M.season, M.VsDate, 
			        T1.TeamName AS Team1Name, T1.TeamLogo AS Team1Logo, 
			        T1.TeamCountry AS Team1Country, M.Team1Coef, 
			        T2.TeamName AS Team2Name, T2.TeamLogo AS Team2Logo, 
			        T2.TeamCountry AS Team2Country, M.Team2Coef, 
			        GL.name AS GameName, GL.min_logo AS GameMinLogo 
			 FROM Matches M 
			 JOIN Teams T1 ON M.Team1ID = T1.TeamID 
			 JOIN Teams T2 ON M.Team2ID = T2.TeamID 
			 JOIN Games_List GL ON M.game_id = GL.id 
			 LIMIT ? OFFSET ?`,
			[limit, offset],
			(error, games) => {
				if (error) {
					console.error('Error fetching games:', error)
					return res.status(500).json({ error: 'Server error' })
				}

				// Отримання загальної кількості записів
				db.query(
					'SELECT COUNT(*) as totalCount FROM Matches',
					(error, totalCountResult) => {
						if (error) {
							console.error('Error fetching total count:', error)
							return res.status(500).json({ error: 'Server error' })
						}

						const totalCount = totalCountResult[0].totalCount

						// Повернення даних разом з інформацією про пагінацію
						res.json({
							data: games,
							totalCount,
							totalPages: Math.ceil(totalCount / limit),
							currentPage: page,
						})
					}
				)
			}
		)
	} catch (error) {
		console.error('Unexpected server error:', error)
		res.status(500).json({ error: 'Unexpected server error' })
	}
}

exports.getMatchListByGameId = (req, res) => {
	const sql = `SELECT M.MatchID, M.Place, M.season, M.VsDate, T1.TeamName AS Team1Name, T1.TeamLogo AS Team1Logo, T1.TeamCountry AS Team1Country, M.Team1Coef, T2.TeamName AS Team2Name, T2.TeamLogo AS Team2Logo, T2.TeamCountry AS Team2Country, M.Team2Coef, GL.name AS GameName, GL.min_logo AS GameMinLogo FROM Matches M JOIN Teams T1 ON M.Team1ID = T1.TeamID JOIN Teams T2 ON M.Team2ID = T2.TeamID JOIN Games_List GL ON M.game_id = GL.id WHERE M.game_id = ?`
	db.query(sql, [req.params.game_id], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message })
		}
		res.json(result)
	})
}

exports.getMatchById = (req, res) => {
	const sql = `SELECT M.MatchID, M.Team1ID, M.Team2ID, M.Place, M.time, M.VsDate, T1.TeamName AS Team1Name, T1.TeamLogo AS Team1Logo, T1.TeamCountry AS Team1Country, M.Team1Coef, M.status, T2.TeamName AS Team2Name, T2.TeamLogo AS Team2Logo, T2.TeamCountry AS Team2Country, M.Team2Coef, M.Team1Score, M.Team2Score 
	FROM Matches M JOIN Teams T1 ON M.Team1ID = T1.TeamID JOIN Teams T2 ON M.Team2ID = T2.TeamID WHERE M.MatchID = ?`
	db.query(sql, [req.params.id], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message })
		}
		res.json(result)
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

	const sql = `SELECT M.MatchID AS id, M.Place, M.season,M.status, M.VsDate, T1.TeamName AS Team1Name, T1.TeamLogo AS Team1Logo, T1.TeamCountry AS Team1Country, M.Team1Coef, T2.TeamName AS Team2Name, T2.TeamLogo AS Team2Logo, T2.TeamCountry AS Team2Country, M.Team2Coef, GL.name AS GameName, GL.min_logo AS GameMinLogo FROM Matches M JOIN Teams T1 ON M.Team1ID = T1.TeamID JOIN Teams T2 ON M.Team2ID = T2.TeamID JOIN Games_List GL ON M.game_id = GL.id  ORDER BY ?? ${
		sortOrder === 'DESC' ? 'DESC' : 'ASC'
	}
		LIMIT ? OFFSET ?`

	const queryParams = [sortField, limit, offset]

	// Виконуємо основний запит
	db.query(sql, queryParams, (err, results) => {
		if (err) {
			return res.status(500).json({ error: err.message })
		}

		// Запит для підрахунку загальної кількості записів
		const countSql = 'SELECT COUNT(*) AS total FROM Matches'
		db.query(countSql, (countErr, countResults) => {
			if (countErr) {
				return res.status(500).json({ error: countErr.message })
			}

			const total = countResults[0].total

			// Формуємо заголовок `Content-Range` на основі фактичних даних
			const contentRange = `Matches ${start}-${
				start + results.length - 1
			}/${total}`
			console.log('Content-Range:', contentRange)

			res.setHeader('Content-Range', contentRange)
			res.setHeader('Access-Control-Expose-Headers', 'Content-Range')
			res.json(results)
		})
	})
}
