import React, { useEffect, useState } from 'react'

export default function MatchOneBlock({ MatchGet }) {
	const [Match, setMatch] = useState(null)

	useEffect(() => {
		if (MatchGet) {
			setMatch(MatchGet)
		}
	}, [MatchGet])

	if (!Match) {
		return <div>Loading match data...</div>
	}

	return (
		<div className='relative w-1/2 h-[200px] bg-gray-800 flex justify-between mb-2 cursor-pointer rounded-lg'>
			<div className='w-60%  flex'>
				<div className='m-2'>
					<div className='absolute bg-gray-600 rounded-full w-10 h-10 text-white flex justify-center items-center right-6'>
						<p>{Match.TeamCoef}</p>
					</div>
					<img
						draggable='false'
						className='w-1/2 h-auto'
						src={'/' + Match.TeamCountry}
						alt={Match.TeamCountry}
					/>
				</div>
				<div>
					<p className='text-white'>{Match.TeamName}</p>
				</div>
				<img
					draggable='false'
					className='w-1/2 w-auto'
					src={'/' + Match.TeamLogo}
					alt={Match.TeamCountry + ' logo'}
				/>
			</div>
		</div>
	)
}
