import React from 'react'

const Myinput = ({ ...props }) => {
	return (
		<input
			{...props}
			className='mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary'
		/>
	)
}

export default Myinput
