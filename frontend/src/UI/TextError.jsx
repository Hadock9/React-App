import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const TextError = ({ TextDirty, TextError }) => {
	return (
		<>
			<AnimatePresence>
				{TextDirty && TextError && (
					<motion.div
						initial={{ x: -100, scale: 0 }}
						animate={{ x: 0, scale: 1 }}
						exit={{ x: 0, scale: 0 }}
						transition={{ ease: 'easeIn', duration: 0.5 }}
						className='inline-block my-2 p-2 text-red-600 bg-red-100 border border-red-300 rounded-md'
					>
						{TextError}
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}

export default TextError
