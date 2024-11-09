import { Facebook, Instagram, Twitter } from 'lucide-react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
function Footer() {
    const footerInfo = [
        { link: 'https://x.com/', icon: <Twitter /> },
        { link: 'https://www.facebook.com/', icon: <Facebook /> },
        { link: 'https://www.instagram.com/', icon: <Instagram /> },
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
        <motion.footer
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
            {footerInfo.map((item) => (
                <Link to={item.link}>{item.icon}</Link>
            ))}
        </motion.footer>
    )
}

// export default React.memo(Footer)
export default Footer
