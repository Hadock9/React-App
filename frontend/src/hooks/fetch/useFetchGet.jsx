import { useEffect, useState } from 'react'

const useFetchGet = ({ url, id }) => {
	const [Data, setData] = useState([])
	const [isLoading, setisLoading] = useState(false)
	const [failedToFetch, setFailedToFetch] = useState(null)
	useEffect(() => {
		setisLoading(true)

		const fetchUrl = id ? `${url}/${id}` : url

		fetch(fetchUrl)
			.then(res => {
				if (!res.ok) {
					setFailedToFetch('Network response was not ok')
					throw new Error('Network response was not ok')
				}
				return res.json()
			})
			.then(data => {
				setData(data)
				setisLoading(false)
			})
			.catch(error => {
				setisLoading(false)
				setFailedToFetch(`Failed to fetch: ${error}`)
				console.log('Failed to fetch: ', error)
			})
	}, [url, id])
	return { Data, isLoading, failedToFetch }
}

export default useFetchGet
