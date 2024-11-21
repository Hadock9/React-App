import { motion } from 'framer-motion'
import React, { forwardRef } from 'react'

const Mybutton = forwardRef(({ children, ondisable = true, ...props }, ref) => {
	return (
		<motion.button
			whileTap={{ scale: 0.9 }}
			initial={{ scale: 1 }}
			animate={{ scale: ondisable ? 1 : 0.95 }}
			type='submit'
			{...props}
			ref={ref}
			disabled={!ondisable}
			className={`mt-4 w-[100px] h-[44px] bg-primary text-white border-none cursor-pointer rounded-md transition-all duration-300
                disabled:bg-gray-300 disabled:cursor-not-allowed`}
		>
			{children}
		</motion.button>
	)
})

export default Mybutton
