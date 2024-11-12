import restProvider from 'ra-data-simple-rest'
import React from 'react'
import { Admin, Resource } from 'react-admin'
import CommentsList from '../components/comments/CommentsList'
import GamesList from '../components/games/GamesList'
import MatchList from '../components/match/MatchList'
import NewsList from '../components/news/NewsList'
import NotificationsList from '../components/notifications/NotificationsList'
import StakeList from '../components/stake/StakeList'
import UsersList from '../components/user/UsersList'

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
