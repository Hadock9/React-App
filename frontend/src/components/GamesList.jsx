import { Link } from 'react-router-dom'
import styles from '../styles/GamesList.module.css'

import useFetchGet from '../hooks/fetch/useFetchGet'
import { CheckFetch } from './BadFatchDisclaimer'
import MyLoader from './Loader'
import { NoResultDisclaimer } from './NoResultDisclaimer'
export function GamesList({ value }) {
	const { Data, isLoading, failedToFetch } = useFetchGet({
		url: 'http://localhost:4000/api/games/Games_List',
	})

	const filterGames = Data.filter(Game => {
		return Game.name.toLowerCase().includes(value.toLowerCase())
	})

	if (isLoading) {
		return <MyLoader />
	}
	return (
		<>
			<h1 className='font-bold my-3 text-xl'> Games </h1>

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
