import { motion } from 'framer-motion'
import { UserRoundX } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import rootstyle from '../../styles/root.module.css'

export function NavBar() {
	const { isRegUser, user, logout } = useAuth()

	return (
		<>
			<header className='flex justify-around items-center w-full h-17 shadow-lg p-3'>
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
					<Link to='/News'>
						<div className='hover:animate-pulse font-sans font-semibold text-base px-3 mx-3 h-[64px] content-center hover:shadow-lg duration-700 rounded-xl'>
							Новини
						</div>
					</Link>
					<Link to='/Home'>
						<div className='hover:animate-pulse font-sans font-semibold text-base px-3 mx-3 h-[64px] content-center hover:shadow-lg duration-700 rounded-xl'>
							Головна
						</div>
					</Link>
					<Link to='/Home'>
						<div className='hover:animate-pulse font-sans font-semibold text-base px-3 mx-3 h-[64px] content-center hover:shadow-lg duration-700 rounded-xl'>
							Контакти
						</div>
					</Link>
					<Link to='/Home'>
						<div className='hover:animate-pulse font-sans font-semibold text-base px-3 mx-3 h-[64px] content-center hover:shadow-lg duration-700 rounded-xl'>
							Підтримати
						</div>
					</Link>
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
			</header>
		</>
	)
}

const MotionFireLogo = () => {
	const colorTransition = {
		duration: 2,
		repeat: Infinity,
		repeatType: 'reverse',
		ease: 'easeInOut',
	}
	return (
		<>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				version='1.1'
				viewBox='0 0 390.5 580.2'
			>
				<g>
					<g id='katman_1'>
						<g>
							<motion.path
								d='M389.2,382.7c-1.7-13-5.2-26.2-10.6-39.6-1.8-5-3.8-9.6-6.1-13.9-14.3-26.3-34.3-51-58.9-68.3-1.1-.8-1.4-.5-.8.7,1.9,4,3.8,7.9,5.7,11.9,3.2,6.3,5.5,12.5,8,19,1.7,4.4,3,9.1,4.1,14.1,3.2,15.8,3.4,31.8.5,48.1-1.3,7.4-3.2,13.9-5.6,19.5-4.6,10.9-11.2,20.3-19.6,28.2-8.2,7.7-18.8,13.3-31.5,16.7-7.4,2-15.3,3.3-22.2,6-23,9-40.1,29.2-41.4,54.5-.7,13.8,1.6,25,8.8,36.9,8.5,14,20.7,23,36.6,27.1,14.7,3.8,29.1,3.5,43.3-.8,21.9-6.6,40.7-19.6,56.3-38.9,17.8-22,28.8-47.2,32.8-75.4,2.3-16,2.5-31.3.6-45.9Z'
								fill='#cb172a'
								initial={{ pathLength: 0, fill: '#cb172a' }}
								animate={{
									pathLength: 1,
									fill: ['#d1081c', '#f2051c', '#fc031b'],
								}}
								transition={colorTransition}
							/>
							<motion.path
								d='M223,576.7c-7.6-2-14.8-5-21.7-9.1-11.4-7.9-20.3-17-26.6-27.4-5.3-8.7-9.1-18.7-11.3-30-2.9-14.6-2.3-29.2,1.8-43.8,2-7.3,4.1-13.1,6.1-17.5,10.1-21.5,28.5-38.7,48.3-53,8.4-6,15.4-11.8,21-17.2,5.6-5.3,11.2-11.7,16.8-19.2,2.5-3.3,4.9-7.3,7.3-12.1,5.2-10.3,8.9-19,11.2-29.8,4.7-21.7,4.4-43.6-1.1-65.6l-5.7-15.4c-.1-.3-.5-.3-.7,0-2.4,4.4-4.9,8.9-7.7,13.4-2.9,4.8-5.8,8.9-8.5,12.4-6.9,8.8-14.2,16.4-21.9,22.9-10.6,8.9-17.6,14.5-21.1,16.7-16.6,10.7-29.6,19.4-39,26.1-9.1,6.5-17.5,13.4-25.3,20.6-14.2,13.2-25.6,28.4-34.2,45.6-2.8,5.5-4.9,10.5-6.4,15-3.5,8.7-5.7,17.8-6.7,27.2-1.5,13.9-1.4,27.5,0,40.8,1.3,11.4,4.6,21.5,8.5,32,0,.2-.1.4-.3.4l-17.2-5.5c-7.2-15-11.1-31.5-11.9-49.4-.8-20.1,1.9-38.4,8.2-54.7,2.5-6.4,4.7-13.3,8.1-19.2,4.9-8.5,9.5-17.2,15.4-24.6,9-11.2,17.3-20.4,25.2-27.5,10.8-9.8,22.5-19,34.9-27.6,15.3-10.5,29.1-19.4,42.8-30.5,5.9-4.8,10.8-9.4,14.9-13.9,6.6-7.3,13.9-15.3,19.2-23.5,7.3-11.1,12.5-22.3,17.3-35.2.6-1.5,1.1-3.1,1.5-4.6,1.2-3.6,2.2-7.3,3-11.1,3.4-17.2,4.3-34.5,2.5-51.8-2.3-23-11-45.4-23.4-64.9-6.8-10.9-15-20.6-24.6-29.3-2.8-2.5-5.5-4.9-8-7-10.3-8.7-21.6-15.9-33.8-21.4-5-2.3-10.1-4-15.2-5.2-3.9-.9-7.6-1.8-11.3-2.6-2.2-.5-2.5,0-.7,1.4,3.9,3.2,7.2,6.7,9.9,10.4,8.2,11.3,14.8,23.8,17.9,37.2,2.7,11.6,3.7,22.4,2.9,32.5-.8,10.4-2.9,21.2-6.2,32.4-1.8,6.1-5.2,11.8-8.1,17.5-1.7,3.4-3.6,6.7-5.9,10-12.4,18.4-28.1,34.8-47.2,49.1-3.3,2.5-6.8,3.9-9.9,6.4-.4.3-.6.2-.7-.3-.4-2.7-.8-5.4-1.1-7.9-1.6-11.4-6.1-22.2-12.4-32.9-5.4-9.3-12.2-17-20.3-23.2-.2-.1-.4-.2-.6-.2-.4,0-.6.4-.4.8.9,1.8,1.7,3.7,2.2,5.7,5.9,22.1,4.6,45.1-2.6,66.9-4,12-9.1,23.2-15.3,33.6-8.6,14.5-18.6,29.1-27.5,44-3.9,6.5-6.6,11.5-8.1,15-7.6,17.3-12.7,32.2-15.3,44.6-3.5,16.8-4.6,35.3-3.3,55.7,1.8,25.4,8.6,49.4,20.4,71.9,6.9,13.3,14.4,24.8,22.6,34.7,26.1,31.7,60.7,54.4,99.8,66.4,18.1,5.6,37.4,8.4,57.8,8.4,7.4,0,14.7-1.4,21.8-2.2,2.4-.3,2.5-.7,0-1.4Z'
								fill='#cb172a'
								initial={{ pathLength: 0, fill: '#cb172a' }}
								animate={{
									pathLength: 1,
									fill: ['#d1081c', '#f2051c', '#fc031b'],
								}}
								transition={colorTransition}
							/>
						</g>
					</g>
				</g>
			</svg>
		</>
	)
}