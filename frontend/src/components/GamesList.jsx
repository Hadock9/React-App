import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/VideoList.module.css'
import { NoResultDisclaimer } from './NoResultDisclaimer'

export function GamesList({ value }) {
	const [Games, setData] = useState([])

	// Fetch users from the backend
	useEffect(() => {
		fetch('http://localhost:4000/api/Games_List')
			.then(res => res.json())
			.then(data => setData(data))
	}, [])

	const filterGames = Games.filter(Game => {
		return Game.name.toLowerCase().includes(value.toLowerCase())
	})
	console.log({ Games })
	return (
		<>
			<h1 className={styles.FirstCLASS}> Games </h1>
			<div className={styles.GameBlockRoot}>
				{filterGames.length > 0 ? (
					filterGames.map(game => (
						<Link
							to={
								'/Home/' +
								game.name.replaceAll(' ', '_').replaceAll('-', '_') +
								'/Matches'
							}
							key={game.id}
						>
							{console.log(game.ImageSrc)}
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
				) : (
					<NoResultDisclaimer value={value} />
				)}
			</div>
		</>
	)
}
