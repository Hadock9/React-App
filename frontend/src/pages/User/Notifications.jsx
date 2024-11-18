import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import BurgerMenu from '../../components/BurgerMenu'
import MyLoader from '../../components/Disclaimer/Loader'
import Footer from '../../components/UserExpirience/Footer'
import NavBar from '../../components/UserExpirience/NavBar'
import { useAuth } from '../../context/AuthContext'
import { formatDate } from '../../js/TimeValidation'
import rootstyle from '../../styles/root.module.css'

const Notifications = () => {
	const { user } = useAuth()
	const [notifications, setNotifications] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(false)

	useEffect(() => {
		const fetchNotifications = async () => {
			if (!user || !user.id) return // Перевірка, чи існує користувач

			setIsLoading(true) // Показуємо індикатор завантаження
			setError(false)

			try {
				const response = await fetch(
					`http://localhost:4000/api/notifications/${user.id}`
				)
				if (!response.ok) {
					throw new Error('Failed to fetch notifications')
				}
				const data = await response.json()
				setNotifications(data) // Оновлюємо список сповіщень
			} catch (error) {
				console.error('Error fetching notifications:', error)
				setError(true)
			} finally {
				setIsLoading(false) // Припиняємо показ індикатора завантаження
			}
		}

		fetchNotifications()
	}, [user]) // Виконується тільки після зміни user

	if (!user) {
		return <div>Please log in to view notifications.</div>
	}

	if (isLoading) {
		return <MyLoader />
	}

	if (error) {
		return <div>Error fetching notifications. Please try again later.</div>
	}

	return (
		<div className={rootstyle.wrapper}>
			<NavBar />

			<div className={rootstyle.Container}>
				<BurgerMenu />

				<main className={rootstyle.Main}>
					<div className=''>
						<p> ставки </p>
						{/* за допомогою фільтру ми відсортовуємо сповіщення від адмінів і сповіщення про ставки і логічно що у ставок немає admin_id і навпаки  */}
						{notifications
							.filter(notification => notification.admin_id == null)
							.map(notification => (
								<motion.div
									key={notification.id}
									initial='hidden'
									whileInView='show'
									exit='hidden'
									viewport={{ once: true }}
									variants={{
										hidden: { opacity: 0, x: -50 },
										show: {
											opacity: 1,
											x: 0,
											transition: { duration: 0.5 },
										},
									}}
								>
									<div className='bg-gray-700 text-white flex rounded-lg my-5 p-10'>
										<div className='flex grow-[5] basis-0 items-center text-m'>
											<div className='pl-[20%]'>{notification.content}</div>
										</div>
										<div className='flex grow basis-0 justify-center items-center'>
											Status: {notification.type}
										</div>
										<div className='flex grow basis-0 justify-center items-center'>
											{formatDate(notification.created_at)}
										</div>
									</div>
								</motion.div>
							))}
						<p> відповіді адміна </p>
						{notifications
							.filter(notification => notification.admin_id !== null)
							.map(notification => (
								<motion.div
									key={notification.id}
									initial='hidden'
									whileInView='show'
									exit='hidden'
									viewport={{ once: true }}
									variants={{
										hidden: { opacity: 0, x: -50 },
										show: {
											opacity: 1,
											x: 0,
											transition: { duration: 0.5 },
										},
									}}
								>
									<div className='bg-gray-700 text-white flex rounded-lg my-5 p-10'>
										<div className=' '>
											<div className='p-5 bg-gray-800 text-white rounded-lg shadow-md'>
												<h2 className='text-lg font-bold mb-4'>
													Support Details
												</h2>
												<div className='mb-3'>
													<span className='font-semibold'>
														User Support Title:
													</span>
													{notification.support_title}
												</div>
												<div className='mb-3'>
													<span className='font-semibold'>User Request:</span>
													{notification.support_content}
												</div>
												<div className='mb-3'>
													<span className='font-semibold'>Feedback:</span>{' '}
													{notification.content}
												</div>
												<div className='flex items-center mb-3'>
													<span className='font-semibold mr-2'>
														Admin Image:
													</span>
													<img
														src={notification.admin_picture}
														alt={notification.admin_name}
														className='w-12 h-12 rounded-full border-2 border-gray-700'
													/>
												</div>
												<div className='mb-3'>
													<span className='font-semibold'>Admin Name:</span>{' '}
													{notification.admin_name}
												</div>
											</div>
										</div>
									</div>
								</motion.div>
							))}
					</div>
				</main>
			</div>

			<Footer />
		</div>
	)
}

export default Notifications
