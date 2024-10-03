import React from 'react'
import { Counter } from '../components/counter'

export function Test() {
	return (
		<>
			<div>
				<Counter />
			</div>
		</>
	)
}
/*
const [users, setData] = useState([])

	// Fetch users from the backend
	useEffect(() => {
		fetch('http://localhost:4000/api/users')
			.then(res => res.json())
			.then(data => setData(data))
	}, [])
	return (
		<div className='App'>
			<h1>Users List</h1>
			<ul>
				{users.map(user => (
					<li key={user.id}>
						{user.name} - {user.age} years old
					</li>
				))}
			</ul>
		</div> 
	)
*/
