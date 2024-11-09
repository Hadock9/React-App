import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styles from '../../styles/Match/GamesList.module.css'

import useFetchGet from '../../hooks/useFetchGet'
import { CheckFetch } from '../Disclaimer/BadFatchDisclaimer'
import MyLoader from '../Disclaimer/Loader'
import { NoResultDisclaimer } from '../Disclaimer/NoResultDisclaimer'
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
			{failedToFetch ? <CheckFetch /> : console.log('Successful Fetch')}

			{failedToFetch ? <CheckFetch /> : console.log('Successful Fetch')}

			<div className={styles.GameBlockRoot}>
				{filterGames.length > 0 ? (
					filterGames.map(game => (
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ ease: 'easeIn', duration: 1 }}
							key={game.id}
						>
							<Link
								to={
									'/Games/' +
									game.name.replaceAll(' ', '_').replaceAll('-', '_') +
									`/Matches?game_id=${game.id}`
								}
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
						</motion.div>
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
