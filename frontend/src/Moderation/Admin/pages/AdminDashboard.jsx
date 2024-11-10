import restProvider from 'ra-data-simple-rest'
import React from 'react'
import { Admin, Resource } from 'react-admin'
import CommentsList from '../components/CommentsList'
import GamesList from '../components/GamesList'
import MatchList from '../components/MatchList'
import NewsList from '../components/NewsList'
import NotificationsList from '../components/NotificationsList'
import StakeList from '../components/StakeList'
import UsersList from '../components/UsersList'

const AdminDashboard = () => {
	return (
		<Admin
			basename='/admin'
			dataProvider={restProvider('http://localhost:4000/api')}
		>
			<Resource name='news' list={NewsList} />
			<Resource name='user' list={UsersList} />
			<Resource name='games' list={GamesList} />
			<Resource name='stake' list={StakeList} />
			<Resource name='notifications' list={NotificationsList} />
			<Resource name='comments' list={CommentsList} />
			<Resource name='match' list={MatchList} />
		</Admin>
	)
}

export default AdminDashboard
