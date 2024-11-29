import { motion } from 'framer-motion'
import { CircleDollarSign, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'
import BurgerMenu from '../../components/BurgerMenu'
import MyLoader from '../../components/Disclaimer/Loader'
import Footer from '../../components/UserExpirience/Footer'
import NavBar from '../../components/UserExpirience/NavBar'
import { useAuth } from '../../context/AuthContext'
import { formatDate, formatTime } from '../../js/TimeValidation'
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
                const response = await fetch(`http://localhost:4000/api/notifications/${user.id}`)
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

    return (
        <div className={rootstyle.wrapper}>
            <NavBar />

            <div className={rootstyle.Container}>
                <BurgerMenu />

                <main className={rootstyle.Main}>
                    {notifications.length == 0 ? (
                        <motion.div
                            initial={{ scale: 0.2 }}
                            animate={{ scale: 1 }}
                            transition={{ ease: 'easeIn', duration: 0.8 }}
                        >
                            <div className='flex flex-col justify-center items-center pt-20'>
                                <div> У вас поки немає сповіщень.</div>
                                <div>
                                    Тут відображатимуться відповіді адмінів та результати ставок.
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <div className='flex flex-row-reverse justify-center'>
                            {notifications.filter((notification) => notification.admin_id == null)
                                .length > 0 && (
                                <div className='flex flex-col grow basis-0 px-5 max-w-[700px]'>
                                    <motion.div
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
                                        <div className='flex items-center justify-center my-4'>
                                            <CircleDollarSign className='text-black' />
                                            <h3 className='text-black text-lg ml-2'>Ставки</h3>
                                        </div>
                                    </motion.div>
                                    {/* за допомогою фільтру ми відсортовуємо сповіщення від адмінів і сповіщення про ставки і логічно що у ставок немає admin_id і навпаки  */}
                                    <div className='flex flex-col-reverse'>
                                        {notifications
                                            .filter((notification) => notification.admin_id == null)
                                            .map((notification, index, array) => (
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
                                                    {index < array.length - 1 && (
                                                        <hr className='border-gray-500' />
                                                    )}
                                                    <div className='flex p-2 my-4'>
                                                        <div className='flex grow-[5] basis-0  items-center text-m'>
                                                            <div className=''>
                                                                {notification.content}
                                                            </div>
                                                        </div>
                                                        <div className='flex grow basis-0 justify-center items-center'>
                                                            {notification.type}
                                                        </div>
                                                        <div className='flex flex-col grow basis-0 justify-center items-center'>
                                                            <div>
                                                                {formatTime(
                                                                    notification.created_at
                                                                )}
                                                            </div>
                                                            <div>
                                                                {formatDate(
                                                                    notification.created_at
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                    </div>
                                </div>
                            )}

                            {notifications.filter((notification) => notification.admin_id !== null)
                                .length > 0 && (
                                <div className='flex flex-col grow basis-0 px-5  max-w-[700px]'>
                                    <motion.div
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
                                        <div className='flex items-center justify-center my-4'>
                                            <Mail className='text-black' />
                                            <h3 className='text-black text-lg ml-2'>Відповіді</h3>
                                        </div>
                                    </motion.div>
                                    <div className='flex flex-col-reverse'>
                                        {notifications
                                            .filter(
                                                (notification) => notification.admin_id !== null
                                            )
                                            .map((notification, index, array) => (
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
                                                    {index < array.length - 1 && (
                                                        <hr className='border-gray-500 ' />
                                                    )}
                                                    <div className='flex flex-col p-2 my-4'>
                                                        <div className='flex mb-3'>
                                                            <div className='font-semibold mr-1'>
                                                                Title:
                                                            </div>
                                                            <div className='w-full text-center'>
                                                                {notification.support_title}
                                                            </div>
                                                        </div>
                                                        <div className='mb-3'>
                                                            <div className='font-semibold mr-1'>
                                                                Request:
                                                            </div>
                                                            <div className=''>
                                                                {notification.support_content}
                                                            </div>
                                                        </div>
                                                        <div className='mb-3'>
                                                            <div className='font-semibold mr-1'>
                                                                Feedback:
                                                            </div>{' '}
                                                            <div className=''>
                                                                {notification.content}
                                                            </div>
                                                        </div>
                                                        <div className='flex'>
                                                            <div className='font-semibold mr-1'>
                                                                Admin:
                                                            </div>
                                                            <div className=''>
                                                                {notification.admin_name}
                                                                {/* <img
															src={notification.admin_picture}
															alt={notification.admin_name}
															className='w-12 h-12 rounded-full border-2 border-gray-700 mx-2'
														/> */}
                                                            </div>
                                                        </div>
                                                        <div className='flex'>
                                                            <div className='font-semibold mr-1'>
                                                                Date:
                                                            </div>
                                                            <div className=''>
                                                                {formatDate(
                                                                    notification.created_at
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </main>
            </div>

            <Footer />
        </div>
    )
}

export default Notifications
