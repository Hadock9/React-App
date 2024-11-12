import restProvider from 'ra-data-simple-rest'
import React from 'react'
import { Admin, Resource } from 'react-admin'
import CommentsList from '../../Admin/components/comments/CommentsList'
import SupportList from '../components/support/SupportList'

const SupportDashboard = () => {
	return (
		<Admin
			basename='/support'
			dataProvider={restProvider('http://localhost:4000/api')}
		>
			<Resource name='support' list={SupportList} />
			<Resource name='comments' list={CommentsList} />
		</Admin>
	)
}

export default SupportDashboard
