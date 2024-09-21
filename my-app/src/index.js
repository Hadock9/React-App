import { GoogleOAuthProvider } from '@react-oauth/google'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Erorpage } from './pages/404'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Matches } from './pages/Matches'
import { NavBar } from './pages/NavBar'
import { Profile } from './pages/Profile'
import { Registration } from './pages/Registr'
import { ResetPassword } from './pages/ResetPassword'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<GoogleOAuthProvider clientId='500804855419-pms6km4isevbtq88rpgbpp02tdjq26fm.apps.googleusercontent.com'>
		<React.StrictMode>
			<Router>
				<NavBar />
				<Routes>
					<Route path='/Registration' element={<Registration />} />
					<Route path='/Login' element={<Login />} />
					<Route path='/Home' element={<Home />} />
					<Route path='/Profile' element={<Profile />} />
					<Route path={'Home/:Game/Matches'} element={<Matches />} />
					<Route path='/404' element={<Erorpage />} />
					<Route path='/ResetPassword' element={<ResetPassword />} />
				</Routes>
			</Router>
		</React.StrictMode>
	</GoogleOAuthProvider>
)
