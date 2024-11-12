import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { UserRoundX } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import rootstyle from '../../styles/root.module.css'

import { MotionFireLogo } from './MotionFireLogo'
function NavBar() {
	const { isRegUser, user, logout } = useAuth()

	const [isHidden, setIsHidden] = useState(false)
	const { scrollY } = useScroll()

	useMotionValueEvent(scrollY, 'change', y => {
		if (y > 60) {
			setIsHidden(true)
		} else {
			setIsHidden(false)
		}
	})

	const navBarInfo = [
		{ link: '/News', name: 'Новини' },
		{ link: '/Games', name: 'Ігри' },
		{ link: '/Matches', name: 'Матчі' },
		{ link: '/Stake', name: 'Cтавки' },
	]
	return (
		<>
			<motion.header
				initial={'show'}
				animate={isHidden ? 'hidden' : 'show'}
				variants={{ hidden: { y: '-100%' }, show: { y: '0%' } }}
				transition={{ duration: 0.5 }}
				className='flex justify-around items-center w-full h-17 shadow-lg p-3'
			>
				<Link to='/Home'>
					<div className='flex w-[300px] justify-center'>
						<div className='h-10 w-10 flex justify-center items-center'>
							<MotionFireLogo />
						</div>
						<div className={`text-5xl self-end ml-5 ${rootstyle.LogoFont}`}>
							CyberBet
						</div>
					</div>
				</Link>

				<div className='flex self-center'>
					{navBarInfo.map((item, index) => (
						<Link to={item.link} key={item.link}>
							<div className='hover:animate-pulse font-sans font-semibold text-base px-3 mx-3 h-[64px] content-center hover:shadow-lg duration-700 rounded-xl'>
								{item.name}
							</div>
						</Link>
					))}
				</div>

				<div className='flex w-[300px] justify-center'>
					{isRegUser ? (
						<div className='flex items-center gap-[10px]'>
							<Link to='/profile'>
								<div className='flex items-center gap-[12px] hover:animate-pulse font-sans font-semibold hover:shadow-lg duration-700 h-[60px] px-[15px] rounded-xl'>
									<div className='h-11 w-11 flex justify-center items-center '>
										<img
											className='w-[100%] h-auto rounded-full'
											src={user.picture}
											alt='user.picture'
										/>
									</div>
									<div>Профіль</div>
								</div>
							</Link>
							<Link to='/Home'>
								<div
									onClick={logout}
									className='flex items-center hover:animate-pulse font-sans font-semibold hover:shadow-lg duration-700 h-[60px] px-[15px] text-rose-800 rounded-xl'
								>
									<p>Розлогінитися</p>
								</div>
							</Link>
						</div>
					) : (
						<div className='flex items-center gap-[10px]'>
							<Link to='/Login'>
								<div className='flex items-center gap-[12px] hover:animate-pulse font-sans font-semibold hover:shadow-lg duration-700 h-[60px] px-[15px] rounded-xl'>
									<div className='h-9 w-9 flex justify-center items-center '>
										<UserRoundX className='w-[100%] h-auto' />
									</div>
									<div>Вхід</div>
								</div>
							</Link>
							<Link to='/Registration'>
								<div className='flex items-center hover:animate-pulse font-sans font-semibold hover:shadow-lg duration-700 h-[60px] px-[15px] rounded-xl'>
									Зареєструватися
								</div>
							</Link>
						</div>
					)}
				</div>
			</motion.header>
		</>
	)
}
export default React.memo(NavBar)
