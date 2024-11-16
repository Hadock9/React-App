import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Navigate, Route, Routes } from 'react-router-dom'
import Support from './components/UserExpirience/Support'
import './index.css'
import AdminDashboard from './Moderation/Admin/pages/AdminDashboard'
import SupportDashboard from './Moderation/Support/pages/SupportDashboard'
import { Login } from './pages/Auth/Login'
import { Registration } from './pages/Auth/Registr'
import { ResetPassword } from './pages/Auth/ResetPassword'
import Donate from './pages/Donate'
import FAQ from './pages/FAQ'
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
import ProtectedRoute from './ProtectedRoute'

const App = () => {
	return (
		<>
			<Toaster />
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
				<Route path='/Feedback' element={<Support />} />
				<Route path='/FAQ' element={<FAQ />} />
				<Route path='*' element={<Erorpage />} />

				{/* Захищені адмінські маршрути */}
				<Route
					path='/admin/*'
					element={
						<ProtectedRoute requiredRole='admin'>
							<AdminDashboard />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/support/*'
					element={
						<ProtectedRoute requiredRole='support'>
							<SupportDashboard />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</>
	)
}

export default App
