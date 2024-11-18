import { motion } from 'framer-motion'
import React from 'react'

import style from '../styles/root.module.css'

const Transition = OgComponent => {
	return props => (
		<>
			<OgComponent {...props} />
			<motion.div
				initial={{ scaleY: 0 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 1 }}
				transition={{ duration: 1, ease: 'easeIn' }}
				className={style.slide_in}
			/>

			<motion.div
				initial={{ scaleY: 1 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 0 }}
				transition={{ duration: 1, ease: 'easeOut' }}
				className={style.slide_out}
			/>
		</>
	)
}

export default Transition
