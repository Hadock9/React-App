import React from 'react'

export const MapStat = ({ match }) => {
	return (
		<div className='w-full sm:w-1/3 p-2'>
			<table className='w-full text-center bg-gray-800 rounded-lg overflow-hidden'>
				<caption className='text-white bg-gray-600 content-center p-2 font-bold'>
					<p>[MapName]</p>
				</caption>
				<thead>
					<tr className='bg-gray-700'>
						<th className='p-2 text-white w-[45%]'>{match.Team1Name}</th>
						<th className='p-2 text-white'></th>
						<th className='p-2 text-white w-[45%]'>{match.Team2Name}</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className='p-2 text-white'>100</td>
						<td className='p-2 text-white'>Kills</td>
						<td className='p-2 text-white'>100</td>
					</tr>
					<tr>
						<td className='p-2 text-white'>100</td>
						<td className='p-2 text-white'>Deaths</td>
						<td className='p-2 text-white'>100</td>
					</tr>
					<tr>
						<td className='p-2 text-white'>10K</td>
						<td className='p-2 text-white'>Assists</td>
						<td className='p-2 text-white'>10K</td>
					</tr>
					<tr>
						<td className='p-2 text-white'>[score]</td>
						<td className='p-2 text-white'>Score</td>
						<td className='p-2 text-white'>[score]</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export const PlayerStat = ({ match }) => {
	return (
		<div className='w-full sm:w-1/2 p-2'>
			<table className='w-full text-center bg-gray-800 rounded-lg overflow-hidden'>
				<caption className='text-white p-2 font-bold bg-gray-600'>
					<p>{match.Team1Name}</p>
				</caption>
				<thead>
					<tr className='bg-gray-700'>
						<th className='p-2 text-white'>Name</th>
						<th className='p-2 text-white'>Kill</th>
						<th className='p-2 text-white'>Death</th>
						<th className='p-2 text-white'>Assists</th>

						<th className='p-2 text-white'>Score</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className='p-2 text-white'>s1mple</td>
						<td className='p-2 text-white'>100</td>
						<td className='p-2 text-white'>10</td>
						<td className='p-2 text-white'>15</td>

						<td className='p-2 text-white'>[score]</td>
					</tr>
					<tr>
						<td className='p-2 text-white'>s1mple</td>
						<td className='p-2 text-white'>100</td>
						<td className='p-2 text-white'>10</td>
						<td className='p-2 text-white'>15</td>

						<td className='p-2 text-white'>[score]</td>
					</tr>
					<tr>
						<td className='p-2 text-white'>s1mple</td>
						<td className='p-2 text-white'>100</td>
						<td className='p-2 text-white'>10</td>
						<td className='p-2 text-white'>15</td>

						<td className='p-2 text-white'>[score]</td>
					</tr>
					<tr>
						<td className='p-2 text-white'>s1mple</td>
						<td className='p-2 text-white'>100</td>
						<td className='p-2 text-white'>10</td>
						<td className='p-2 text-white'>15</td>

						<td className='p-2 text-white'>[score]</td>
					</tr>
					<tr>
						<td className='p-2 text-white'>s1mple</td>
						<td className='p-2 text-white'>100</td>
						<td className='p-2 text-white'>10</td>
						<td className='p-2 text-white'>15</td>

						<td className='p-2 text-white'>[score]</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}
