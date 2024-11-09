import { Facebook, Instagram, Twitter } from 'lucide-react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
function Footer() {
    const [isHidden, setIsHidden] = useState(true)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, 'change', (y) => {
        console.log(y)
        if (y < 1250) {
            setIsHidden(true)
        } else {
            setIsHidden(false)
        }
    })

    const footerInfo = [
        { link: 'https://x.com/', icon: <Twitter /> },
        { link: 'https://www.facebook.com/', icon: <Facebook /> },
        { link: 'https://www.instagram.com/', icon: <Instagram /> },
    ]

    return (
        <motion.footer
            initial={'hidden'}
            animate={isHidden ? 'hidden' : 'show'}
            variants={{ hidden: { y: '100%' }, show: { y: '0%' } }}
            transition={{ duration: 1.2 }}
            className='w-full flex justify-center items-center text-center my-2 py-2 gap-5 '
        >
            {footerInfo.map((item) => (
                <Link to={item.link}>{item.icon}</Link>
            ))}
        </motion.footer>
    )
}

export default React.memo(Footer)
