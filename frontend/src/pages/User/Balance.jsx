import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { BurgerMenu } from '../../components/BurgerMenu'
import { Footer } from '../../components/UserExpirience/Footer'
import { NavBar } from '../../components/UserExpirience/NavBar'
import { CreditCard } from '../../components/UserExpirience/CreditCard'
import { useAuth } from '../../context/AuthContext'
import rootstyle from '../../styles/root.module.css'

const Balance = () => {
    const { user } = useAuth()
    const [userBalance, setUserBalance] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (user) {
            setUserBalance(user.bonus_money)
            setLoading(false)
        }
    }, [user])

    return (
        <div className={rootstyle.wrapper}>
            <NavBar />
            <div className={rootstyle.Container}>
                <BurgerMenu />
                <main className={rootstyle.Main}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ ease: 'easeIn', duration: 0.8 }}
                    >
                        {loading ? (
                            <p>Loading balance...</p>
                        ) : userBalance != null ? (
                            <div className="flex justify-center ">
                                <div className="text-xl my-5">
                                    Ваш поточний баланс:
                                </div>
                                <div className="flex items-center font-bold text-2xl ml-2">
                                    {userBalance} UAH
                                </div>
                            </div>
                        ) : (
                            <p>No balance information available.</p>
                        )}
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            ease: 'easeIn',
                            duration: 0.8,
                        }}
                    >
                        <CreditCard />
                    </motion.div>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Balance
