const db = require('../db.js')

exports.getGamesList = (req, res) => {
	const sql = 'SELECT * FROM Games_List'
	db.query(sql, (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message })
		}
		res.json(result)
	})
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
	const sql = `SELECT M.MatchID, M.Place, M.time, M.VsDate, T1.TeamName AS Team1Name, T1.TeamLogo AS Team1Logo, T1.TeamCountry AS Team1Country, M.Team1Coef, T2.TeamName AS Team2Name, T2.TeamLogo AS Team2Logo, T2.TeamCountry AS Team2Country, M.Team2Coef, M.Team1Score, M.Team2Score FROM Matches M JOIN Teams T1 ON M.Team1ID = T1.TeamID JOIN Teams T2 ON M.Team2ID = T2.TeamID WHERE M.MatchID = ?`
	db.query(sql, [req.params.id], (err, result) => {
		if (err) {
			return res.status(500).json({ error: err.message })
		}
		res.json(result)
	})
}
