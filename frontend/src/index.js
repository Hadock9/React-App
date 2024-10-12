import { GoogleOAuthProvider } from '@react-oauth/google'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes,
} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { MenuProvider } from './context/MenuContext'

import { Erorpage } from './pages/404'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Match } from './pages/Match'
import { Matches } from './pages/Matches'
import { News } from './pages/News'
import { Profile } from './pages/Profile'
import { Registration } from './pages/Registr'
import { ResetPassword } from './pages/ResetPassword'
import { Stake } from './pages/Stake'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<GoogleOAuthProvider clientId='500804855419-pms6km4isevbtq88rpgbpp02tdjq26fm.apps.googleusercontent.com'>
		<AuthProvider>
			<MenuProvider>
				<Router>
					<Routes>
						<Route index element={<Navigate to='/Home' />} />
						<Route path='/Registration' element={<Registration />} />
						<Route path='/Login' element={<Login />} />
						<Route path='/Home' element={<Home />} />
						<Route path='/News' element={<News />} />
						<Route path='/Stake' element={<Stake />} />
						<Route path='/Profile' element={<Profile />} />
						<Route path={'Home/:Game/Matches'} element={<Matches />} />
						<Route path={'Home/:Game/Matches/:Match'} element={<Match />} />
						<Route path='/404' element={<Erorpage />} />
						<Route path='/ResetPassword' element={<ResetPassword />} />
						<Route path='*' element={<Navigate to='/404' replace />} />
					</Routes>
				</Router>
			</MenuProvider>
		</AuthProvider>
	</GoogleOAuthProvider>
)
//<Route path='/terms' element={<Terms/>} />
