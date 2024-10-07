import { createContext, useContext, useState } from 'react'

const RegContext = createContext()

export const RegistrationContext = ({ children }) => {
	const [isRegUser, setisRegUser] = useState(false)

	return (
		<RegContext.Provider value={{ isRegUser, setisRegUser }}>
			{children}
		</RegContext.Provider>
	)
}
export const useRegUser = () => {
	return useContext(RegContext)
}
