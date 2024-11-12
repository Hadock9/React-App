import restProvider from 'ra-data-simple-rest'
import React from 'react'
import { Admin, CustomRoutes, Resource } from 'react-admin'
import { Route } from 'react-router-dom'
import CommentsList from '../../Admin/components/comments/CommentsList'
import Reply from '../components/Reply'
import SupportList from '../components/support/SupportList'

const SupportDashboard = () => {
	return (
		<Admin
			basename='/support'
			dataProvider={restProvider('http://localhost:4000/api')}
		>
			<Resource name='support' list={SupportList} />
			<Resource name='comments' list={CommentsList} />

			<CustomRoutes>
				<Route path='/support/:id/reply' element={<Reply />} />
			</CustomRoutes>
		</Admin>
	)
}

export default SupportDashboard
