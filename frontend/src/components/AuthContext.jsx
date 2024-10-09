import { jwtDecode } from 'jwt-decode' // Іменований імпорт
import React, { createContext, useContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [isRegUser, setIsRegUser] = useState(false)
	const [user, setUser] = useState(null)

	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
			try {
				const decoded = jwtDecode(token)
				const currentTime = Date.now() / 1000
				if (decoded.exp < currentTime) {
					// Токен закінчився
					localStorage.removeItem('token')
					setIsRegUser(false)
					setUser(null)
				} else {
					setIsRegUser(true)
					setUser(decoded)
				}
			} catch (error) {
				console.error('Invalid token:', error)
				localStorage.removeItem('token')
				setIsRegUser(false)
				setUser(null)
			}
		} else {
			setIsRegUser(false)
			setUser(null)
		}
	}, [])

	const logout = () => {
		localStorage.removeItem('token')
		setIsRegUser(false)
		setUser(null)
	}

	return (
		<AuthContext.Provider
			value={{ isRegUser, user, setIsRegUser, setUser, logout }}
		>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => {
	return useContext(AuthContext)
}
