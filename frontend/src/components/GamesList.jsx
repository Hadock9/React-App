import { motion } from 'framer-motion'
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

    const filterGames = Data.filter((Game) => {
        return Game.name.toLowerCase().includes(value.toLowerCase())
    })

    if (isLoading) {
        return <MyLoader />
    }
    return (
        <>
            {failedToFetch ? <CheckFetch /> : console.log('Successful Fetch')}

<<<<<<< HEAD
            <div className={styles.GameBlockRoot}>
                {filterGames.length > 0 ? (
                    filterGames.map((game) => (
                        <Link
                            to={
                                '/Home/' +
                                game.name
                                    .replaceAll(' ', '_')
                                    .replaceAll('-', '_') +
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
                                    Дивляться {game.views} тис. глядачів у
                                    всьому світі
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
=======
			{failedToFetch ? <CheckFetch /> : console.log('Successful Fetch')}

			<div className={styles.GameBlockRoot}>
				{filterGames.length > 0 ? (
					filterGames.map(game => (
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ ease: 'easeIn', duration: 0.5 }}
							key={game.id}
						>
							<Link
								to={
									'/Home/' +
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
>>>>>>> eb9f8e9f69f95135ca358723167bc2700b14b16d
}
