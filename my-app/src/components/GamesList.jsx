import { Link } from 'react-router-dom'
import { NoResultDisclaimer } from './NoResultDisclaimer'
import imgCS from '../img/Games/Counter-Strike 2.png'
import imgFree_Fire from '../img/Games/Free Fire.png'
import imgGTA from '../img/Games/Grand Theft Auto V.png'
import imgMine from '../img/Games/Minecraft.png'
import styles from '../styles/VideoList.module.css'

const Games = [
	{
		name: 'Grand Theft Auto V',
		views: 244,
		ImageSrc: imgGTA,
		id: 1,
	},
	{
		name: 'Minecraft',
		views: 123,
		ImageSrc: imgMine,
		id: 2,
	},
	{
		name: 'Counter-Strike 2',
		views: 167,
		ImageSrc: imgCS,
		id: 3,
	},
	{
		name: 'Free Fire',
		views: 43,
		ImageSrc: imgFree_Fire,
		id: 4,
	},
	{
		name: 'Grand Theft Auto V',
		views: 244,
		ImageSrc: imgGTA,
		id: 5,
	},
	{
		name: 'Minecraft',
		views: 123,
		ImageSrc: imgMine,
		id: 6,
	},
	{
		name: 'Counter-Strike 2',
		views: 167,
		ImageSrc: imgCS,
		id: 7,
	},
	{
		name: 'Free Fire',
		views: 43,
		ImageSrc: imgFree_Fire,
		id: 8,
	},
]
//
export function GamesList({ value }) {
	const filterGames = Games.filter(Game => {
		return Game.name.toLowerCase().includes(value.toLowerCase())
	})
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
