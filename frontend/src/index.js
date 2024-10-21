import './index.css'

import { GoogleOAuthProvider } from '@react-oauth/google'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { MenuProvider } from './context/MenuContext'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<GoogleOAuthProvider clientId='500804855419-pms6km4isevbtq88rpgbpp02tdjq26fm.apps.googleusercontent.com'>
		<AuthProvider>
			<MenuProvider>
				<Router>
					<App />
				</Router>
			</MenuProvider>
		</AuthProvider>
	</GoogleOAuthProvider>
)
