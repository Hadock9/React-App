import { AnimatePresence, motion } from 'framer-motion'

import { useEffect, useState } from 'react'
import BurgerMenu from '../../components/BurgerMenu'
import Footer from '../../components/UserExpirience/Footer'
import NavBar from '../../components/UserExpirience/NavBar'
import useFetchGet from '../../hooks/useFetchGet'

import MyLoader from '../../components/Disclaimer/Loader'
import { useAuth } from '../../context/AuthContext'
import { formatDate } from '../../js/TimeValidation'
import rootstyle from '../../styles/root.module.css'

const Notifications = () => {
    const { user } = useAuth()
    const [UserId, setUserId] = useState([])
    const [Notifications, setNotification] = useState([])
    const { Data, isLoading, failedToFetch } = useFetchGet({
        url: 'http://localhost:4000/api/notifications',
        id: UserId,
    })

    useEffect(() => {
        if (user) {
            setUserId(user.id)
        }
    }, [user]) //

    useEffect(() => {
        if (Data) {
            setNotification(Data)
        }
    }, [Data])

    if (isLoading) {
        return <MyLoader />
    }

    return (
        <div className={rootstyle.wrapper}>
            <NavBar />

            <div className={rootstyle.Container}>
                <BurgerMenu />

                <main className={rootstyle.Main}>
                    <div className='flex flex-col-reverse'>
                        {Notifications.map((Notification) => (
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
                                        transition: {
                                            duration: 0.5,
                                        },
                                    },
                                }}
                            >
                                <div
                                    className='bg-gray-700 text-white flex rounded-lg my-5 p-10'
                                    key={Notification.id}
                                >
                                    <div className='flex grow-[5] basis-0 items-center text-m '>
                                        <div className='pl-[20%]'>{Notification.content}</div>
                                    </div>
                                    <div className='flex grow basis-0 justify-center items-center'>
                                        Status: {Notification.type}
                                    </div>
                                    <div className='flex grow basis-0 justify-center items-center'>
                                        {formatDate(Notification.created_at)}
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
