import { motion } from 'framer-motion'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'

const MyCarousel = ({ Array }) => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 1200 },
			items: 4, // Чотири елементи на дуже великих екранах
		  },
		  desktop: {
			breakpoint: { max: 1200, min: 900 },
			items: 3, // Три елементи на звичайних екранах
		  },
		  tablet: {
			breakpoint: { max: 900, min: 600 },
			items: 2, // Два елементи на планшетах
		  },
		  mobile: {
			breakpoint: { max: 600, min: 0 },
			items: 1, // Один елемент на мобільних пристроях
		  },
	}

	return (
		<Carousel
			draggable={false}
			responsive={responsive}
			infinite={true}
			autoPlay={true}
			autoPlaySpeed={4000}
			focusOnSelect={true}
			customTransition='transform 1000ms ease-in-out'
			className=' mb-[30px]'
		>
			{Array.map((Item, index) => (
				<Link
					key={index}
					to={
						'/Games/' +
						Item.name.replaceAll(' ', '_').replaceAll('-', '_') +
						`/Matches?game_id=${Item.id}`
					}
				>
					<motion.div
						initial={{ opacity: 0, y: -200 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							delay: 0.3,
							ease: 'easeIn',
							duration: 0.7,
						}}
						className=' flex justify-center'
					>
						<img
							className='rounded-2xl w-[210px] h-[290px]'
							src={Item.ImageSrc}
							alt={Item.name}
						/>
					</motion.div>
				</Link>
			))}
		</Carousel>
	)
}

export default MyCarousel
