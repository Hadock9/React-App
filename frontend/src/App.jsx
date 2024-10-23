import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './index.css'
import { Erorpage } from './pages/404'
import Balance from './pages/Balance'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Match } from './pages/Match'
import { Matches } from './pages/Matches'
import { News } from './pages/News'
import { NewsContent } from './pages/NewsContent'
import Notifications from './pages/Notifications'
import { Profile } from './pages/Profile'
import { Registration } from './pages/Registr'
import { ResetPassword } from './pages/ResetPassword'
import { Stake } from './pages/Stake'

const App = () => {
	return (
		<Routes>
			<Route index element={<Navigate to='/Home' />} />
			<Route path='/Registration' element={<Registration />} />
			<Route path='/Login' element={<Login />} />
			<Route path='/Home' element={<Home />} />
			<Route path='/News' element={<News />} />
			<Route path='/News/:Content' element={<NewsContent />} />
			<Route path='/Stake' element={<Stake />} />
			<Route path='/Profile' element={<Profile />} />
			<Route path={'Home/:Game/Matches'} element={<Matches />} />
			<Route path={'Home/:Game/Matches/:Match'} element={<Match />} />
			<Route path='/404' element={<Erorpage />} />
			<Route path='/Notifications' element={<Notifications />} />
			<Route path='/Balance' element={<Balance />} />
			<Route path='/ResetPassword' element={<ResetPassword />} />
			<Route path='*' element={<Navigate to='/404' replace />} />
		</Routes>
	)
}

export default App
