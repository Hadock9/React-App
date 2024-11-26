import React from 'react'

// Генерація випадкового числа
function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min)) + min
}

// Генерація випадкової статистики
function getRndStat() {
	const kills = getRndInteger(20, 100)
	const deaths = getRndInteger(20, 100)
	const assists = getRndInteger(20, 100)
	const score = (kills / (deaths + assists)).toFixed(2)

	return { kills, deaths, assists, score }
}

// Компонент для відображення статистики команд
export const MapStat = () => {
	const team1 = getRndStat()
	const team2 = getRndStat()

	return (
		<div className='w-full sm:w-1/3 p-2'>
			<table className='w-full text-center bg-gray-800 rounded-lg overflow-hidden'>
				<caption className='text-white bg-gray-600 content-center p-2 font-bold'>
					Match
				</caption>
				<thead>
					<tr className='bg-gray-700'>
						<th className='p-2 text-white w-[45%]'>Team</th>
						<th className='p-2 text-white'></th>
						<th className='p-2 text-white w-[45%]'>Team</th>
					</tr>
				</thead>
				<tbody>
					{['kills', 'deaths', 'assists', 'score'].map(stat => (
						<tr key={stat}>
							<td className='p-2 text-white'>{team1[stat]}</td>
							<td className='p-2 text-white capitalize'>{stat}</td>
							<td className='p-2 text-white'>{team2[stat]}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

// Компонент для відображення статистики гравців
export const PlayerStat = () => {
	const players = Array.from({ length: 5 }, (_, index) => ({
		id: index + 1,
		stats: getRndStat(),
	}))

	return (
		<div className='w-full sm:w-1/2 p-2'>
			<table className='w-full text-center bg-gray-800 rounded-lg overflow-hidden'>
				<caption className='text-white p-2 font-bold bg-gray-600'>Team</caption>
				<thead>
					<tr className='bg-gray-700'>
						<th className='p-2 text-white'>Name</th>
						<th className='p-2 text-white'>Kill</th>
						<th className='p-2 text-white'>Death</th>
						<th className='p-2 text-white'>Assists</th>
						<th className='p-2 text-white'>Score</th>
					</tr>
				</thead>
				<tbody>
					{players.map(({ id, stats }) => (
						<tr key={id}>
							<td className='p-2 text-white'>Player {id}</td>
							<td className='p-2 text-white'>{stats.kills}</td>
							<td className='p-2 text-white'>{stats.deaths}</td>
							<td className='p-2 text-white'>{stats.assists}</td>
							<td className='p-2 text-white'>{stats.score}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
