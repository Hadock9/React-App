import { AnimatePresence, motion } from 'framer-motion'
import {
    CircleDollarSign,
    CircleUserRound,
    Gem,
    History,
    House,
    Mail,
    Menu,
    Wallet,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useMenu } from '../context/MenuContext'
import style from '../styles/BurgerMenu.module.css'

export function BurgerMenu() {
    const { isOpen, setIsOpen } = useMenu()

    const toggleMenu = () => {
        setIsOpen((prev) => !prev)
    }

    const textAnimations = {
        hidden: { opacity: 0, x: -70 },
        show: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 50 },
    }

    const transition = {
        duration: 0.6,
        ease: 'easeInOut',
    }

    const AnimatedText = ({ children }) => (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    variants={textAnimations}
                    transition={transition}
                >
                    <div>{children}</div>
                </motion.div>
            )}
        </AnimatePresence>
    )

    return (
        <motion.div animate={{ width: isOpen ? '250px' : '' }}>
            <div className={style.AsideBlockIconBrowse} onClick={toggleMenu}>
                <div className={style.AsideBlockIconBrowse}>
                    <Menu />
                </div>
            </div>
            <Link to="/Home" className={style.AsideBlock}>
                <div className={style.AsideBlockIcon}>
                    <House />
                </div>
                <div className="flex grow justify-center items-center">
                    <AnimatedText>Головна</AnimatedText>
                </div>
            </Link>
            <Link to="/Stake" className={style.AsideBlock}>
                <div className={style.AsideBlockIcon}>
                    <History />
                </div>
                <div className="flex grow justify-center items-center">
                    <AnimatedText>Історія ставок</AnimatedText>
                </div>
            </Link>
            <Link to="/Balance" className={style.AsideBlock}>
                <div className={style.AsideBlockIcon}>
                    <CircleDollarSign />
                </div>
                <div className="flex grow justify-center items-center">
                    <AnimatedText>Баланс</AnimatedText>
                </div>
            </Link>
            <Link to="/Home" className={style.AsideBlock}>
                <div className={style.AsideBlockIcon}>
                    <Gem />
                </div>
                <div className="flex grow justify-center items-center">
                    <AnimatedText>Бонуси</AnimatedText>
                </div>
            </Link>
            <Link to="/Profile" className={style.AsideBlock}>
                <div className={style.AsideBlockIcon}>
                    <CircleUserRound />
                </div>
                <div className="flex grow justify-center items-center">
                    <AnimatedText>Мій профіль</AnimatedText>
                </div>
            </Link>
            <Link to="/Home" className={style.AsideBlock}>
                <div className={style.AsideBlockIcon}>
                    <Wallet />
                </div>
                <div className="flex grow justify-center items-center">
                    <AnimatedText>Гаманець</AnimatedText>
                </div>
            </Link>
            <Link to="/Notifications" className={style.AsideBlock}>
                <div className={style.AsideBlockIcon}>
                    <Mail />
                </div>
                <div className="flex grow justify-center items-center">
                    <AnimatedText>Повідомлення</AnimatedText>
                </div>
            </Link>
        </motion.div>
    )
}
