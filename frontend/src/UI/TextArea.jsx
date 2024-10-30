import { motion } from 'framer-motion'
import React from 'react'

const MyTextArea = ({ TextError = false, ...props }) => {
	return (
		<motion.textarea
			initial={{ y: 0 }}
			animate={{ y: TextError ? 10 : 0 }}
			transition={{ duration: 0.3, ease: 'easeInOut' }}
			id='textarea'
			{...props}
			className='resize-y min-h-[80px] max-h-[300px] overflow-auto w-[90%] h-[100px] p-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-gray-700 placeholder-gray-500 '
			placeholder='Введіть свій коментар...'
		></motion.textarea>
	)
}

export default MyTextArea
