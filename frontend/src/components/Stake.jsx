import { useEffect, useState } from 'react'

export function Stake() {
	const [Stakes, setData] = useState([])

	const [matchId, setMatchId] = useState(0)
	const [amount, setAmount] = useState(0)
	const [Coef, setCoef] = useState(0)
	const [status, setStatus] = useState('pending')

	const handleSubmit = async e => {
		e.preventDefault()

		const stakeData = {
			match_id: parseInt(matchId),
			amount: parseFloat(amount),
			Coef: parseFloat(Coef),
			status: status,
		}
		console.log(stakeData)
		const response = fetch('http://localhost:4000/api/Stake', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(stakeData),
		})
	}
	// Fetch users from the backend
	useEffect(() => {
		fetch('http://localhost:4000/api/Stake1')
			.then(res => res.json())
			.then(data => setData(data))
	}, [])
	return (
		<>
			<div>
				{Stakes.map(stake => (
					<div key={stake.id}>
						<p>stake id {stake.id}</p>
						<p>stake match_id {stake.match_id}</p>
						<p>stake amount {stake.amount}</p>
						<p>stake Coef {stake.Coef}</p>
						<p>stake stake_time {stake.stake_time}</p>
						<p>stake status {stake.status}</p>
						<p>------------------------------------------------</p>
					</div>
				))}
			</div>
			<div>
				<form action='' onSubmit={handleSubmit}>
					<label htmlFor=''>match_id</label>
					<input
						type='number'
						name='match_id'
						onChange={e => setMatchId(e.target.value)}
					/>
					<label htmlFor=''>amount</label>
					<input
						type='number'
						name='amount'
						onChange={e => setAmount(e.target.value)}
					/>
					<label htmlFor=''>Coef</label>
					<input
						type='number'
						name='Coef'
						onChange={e => setCoef(e.target.value)}
					/>
					{}
					<button>submit</button>
				</form>
			</div>
		</>
	)
}