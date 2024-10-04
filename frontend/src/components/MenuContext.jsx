import React, { createContext, useContext, useState } from 'react'

const MenuContext = createContext()

export const MenuProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<MenuContext.Provider value={{ isOpen, setIsOpen }}>
			{children}
		</MenuContext.Provider>
	)
}

export const useMenu = () => {
	return useContext(MenuContext)
}
