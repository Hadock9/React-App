import React from 'react'

const Mylabel = ({ children, ...props }) => {
	return (
		<label {...props} className='block text-sm font-medium text-gray-700'>
			{children}
		</label>
	)
}

export default Mylabel
