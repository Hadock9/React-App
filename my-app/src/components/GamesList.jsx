import { Link } from 'react-router-dom'
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
]
//<button onClick={() => setCount(count => count + 1)}>sad</button>
//const [count, setCount] = useState(0)
export function GamesList() {
	return (
		<>
			<h1 className={styles.FirstCLASS}> Games </h1>
			<div className={styles.GameBlockRoot}>
				{Games.map(game => {
					return (
						<Link
							to={
								'/Home/' +
								game.name.replaceAll(' ', '_').replaceAll('-', '_') +
								'/Matches'
							}
						>
							<div className={styles.GameBlock} key={game.id}>
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
					)
				})}
			</div>
		</>
	)
}
