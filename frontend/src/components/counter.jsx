import React, { useState } from 'react'
//сторінка для ставок :)  в розробці
export function Counter() {
	const [likes, setLikes] = useState(0)
	function increment() {
		setLikes(likes + 1)
		console.log(likes)
	}
	function decrement() {
		setLikes(likes - 1)
		console.log(likes)
	}
	const [value, SetValue] = useState('')
	function AddNewPost(e) {
		e.preventDefault()
		console.log(value)
	}
	return (
		<div>
			<form action=''>
				<input
					type='text'
					name='Login'
					onChange={e => SetValue(e.target.value)}
					value={value}
				/>
				<button onClick={AddNewPost}>click</button>
			</form>
		</div>
	)
}
