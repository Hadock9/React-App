import { Facebook, Instagram, Twitter } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MotionFireLogo } from './MotionFireLogo'

function Footer() {
	const SocialMedia = [
		{ link: 'https://x.com/', icon: <Twitter /> },
		{ link: 'https://www.facebook.com/', icon: <Facebook /> },
		{ link: 'https://www.instagram.com/', icon: <Instagram /> },
	]

	const footerInfo = [
		{ link: '/Feedback', text: 'Технічна підтримка' },
		{ link: '/FAQ', text: 'FAQ' },
	]

	const [isVisible, setIsVisible] = useState(false)
	const [isAtBottom, setIsAtBottom] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY
			const documentHeight = document.documentElement.scrollHeight
			const windowHeight = window.innerHeight

			if (currentScrollY + windowHeight >= documentHeight - 20) {
				setIsAtBottom(true)
			} else {
				setIsAtBottom(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	useEffect(() => {
		if (isAtBottom) {
			setIsVisible(true)
		} else {
			setIsVisible(false)
		}
	}, [isAtBottom])

	return (
		<footer className=' w-full h-[4vh]    '>
			<div className='w-full relative mx-auto p-4 md:py-8 px-8'>
				<div className='sm:flex sm:items-center sm:justify-between'>
					<Link to='/Home'>
						<div className='flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse'>
							<div className='h-10 w-10 flex justify-center items-center'>
								<MotionFireLogo />
							</div>
						</div>
					</Link>

					<div className='absolute left-1/2 transform -translate-x-1/2 flex gap-4'>
						{SocialMedia.map(item => (
							<Link to={item.link} key={item.link}>
								{item.icon}
							</Link>
						))}
					</div>
					<div className='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0  gap-4'>
						{footerInfo.map(item => (
							<Link to={item.link} key={item.link}>
								<p> {item.text}</p>
							</Link>
						))}
					</div>
				</div>
				<hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
				<span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400 '>
					© 2024
					<Link to={'/Home'} className='hover:underline'>
						CyberBet™
					</Link>
					. All Rights Reserved.
				</span>
			</div>
		</footer>
	)
}

export default React.memo(Footer)

/* 	<motion.footer
			initial={{ y: '100%' }}
			animate={{ y: isVisible ? '0%' : '100%' }}
			transition={{ type: 'tween', duration: 0.5 }}
			className='w-full flex justify-center items-center text-center my-2 py-2 gap-5'
			style={{
				position: isVisible ? 'fixed' : 'absolute',
				bottom: isVisible ? 0 : 'auto',
				display: isVisible ? 'flex' : 'none',
			}}
		>
			{footerInfo.map(item => (
				<Link to={item.link} key={item.link}>
					{item.icon}
				</Link>
			))}
		</motion.footer> */
