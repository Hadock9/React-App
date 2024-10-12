import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/GamesList.module.css'
import { CheckFetch } from './BadFatchDisclaimer'
import { NoResultDisclaimer } from './NoResultDisclaimer'
export function GamesList({ value }) {
	const [Games, setData] = useState([])

	const [failedToFetch, setFailedToFetch] = useState(false)

	useEffect(() => {
		fetch('http://localhost:4000/api/Games_List')
			.then(res => {
				if (!res.ok) {
					throw new Error('Network response was not ok')
				}
				return res.json()
			})
			.then(data => {
				setData(data)
				setFailedToFetch(false)
			})
			.catch(error => {
				setFailedToFetch(true)
				console.log('Failed to fetch: ', error)
			})
	}, [])

	const filterGames = Games.filter(Game => {
		return Game.name.toLowerCase().includes(value.toLowerCase())
	})

	return (
		<>
			<h1 className={styles.FirstCLASS}> Games </h1>

			{failedToFetch ? <CheckFetch /> : console.log('Successful Fetch')}

			<div className={styles.GameBlockRoot}>
				{filterGames.length > 0 ? (
					filterGames.map(game => (
						<Link
							to={
								'/Home/' +
								game.name.replaceAll(' ', '_').replaceAll('-', '_') +
								`/Matches?game_id=${game.id}`
							}
							key={game.id}
						>
							<div className={styles.GameBlock}>
								<img
									className={styles.GamesImg}
									src={game.ImageSrc}
									alt={game.name}
								/>
								<h3 className={styles.GameName}>{game.name}</h3>
								<p className={styles.GameDescription}>
									Дивляться {game.views} тис. глядачів у всьому світі
								</p>
							</div>
						</Link>
					))
				) : failedToFetch ? (
					console.log('Failed Fatch No Results :)')
				) : (
					<NoResultDisclaimer value={value} />
				)}
			</div>
		</>
	)
}
