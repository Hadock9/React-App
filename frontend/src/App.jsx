import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './index.css'
import { Login } from './pages/Auth/Login'
import { Registration } from './pages/Auth/Registr'
import { ResetPassword } from './pages/Auth/ResetPassword'
import Donate from './pages/Donate'
import { Games } from './pages/Match/Games'
import { Match } from './pages/Match/Match'
import { Matches } from './pages/Match/Matches'
import { Stake } from './pages/Match/Stake'
import { News } from './pages/News/News'
import { NewsContent } from './pages/News/NewsContent'
import { Erorpage } from './pages/User/404'
import Balance from './pages/User/Balance'
import { Home } from './pages/User/Home'
import Notifications from './pages/User/Notifications'
import { Profile } from './pages/User/Profile'

const App = () => {
	return (
		<Routes>
			<Route index element={<Navigate to='/Home' />} />
			<Route path='/Registration' element={<Registration />} />
			<Route path='/Login' element={<Login />} />
			<Route path='/Games' element={<Games />} />
			<Route path='/Home' element={<Home />} />
			<Route path='/News' element={<News />} />
			<Route path='/News/:Content' element={<NewsContent />} />
			<Route path='/Stake' element={<Stake />} />
			<Route path='/Profile' element={<Profile />} />
			<Route path={'Games/:Game/Matches'} element={<Matches />} />
			<Route path={'/Matches'} element={<Matches />} />
			<Route path={'/Matches/:Match'} element={<Match />} />
			<Route path={'Games/:Game/Matches/:Match'} element={<Match />} />
			<Route path='/404' element={<Erorpage />} />
			<Route path='/Notifications' element={<Notifications />} />
			<Route path='/Balance' element={<Balance />} />
			<Route path='/Donate' element={<Donate />} />
			<Route path='/ResetPassword' element={<ResetPassword />} />
		</Routes>
	)
}

export default App
