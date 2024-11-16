import { motion } from 'framer-motion'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'

const MyCarousel = ({ Array }) => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 6,
			slidesToSlide: 3,
		},
		mac: {
			breakpoint: { max: 1600, min: 1024 },
			items: 4,
			slidesToSlide: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 4,
			slidesToSlide: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1,
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
