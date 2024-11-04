import { motion } from 'framer-motion'
import React from 'react'

const Mybutton = ({ children, ondisable = true, ...props }) => {
	return (
		<motion.button
			whileTap={{ scale: 0.9 }}
			initial={{ scale: 1 }} // Початковий розмір
			animate={{ scale: ondisable ? 1 : 0.95 }}
			type='submit'
			{...props}
			disabled={!ondisable}
			className={`mt-4 w-[100px] h-[44px] bg-primary text-white border-none cursor-pointer rounded-md transition-all duration-300
                disabled:bg-gray-300 disabled:cursor-not-allowed`}
		>
			{children}
		</motion.button>
	)
}

export default Mybutton
