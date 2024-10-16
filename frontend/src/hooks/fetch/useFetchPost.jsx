import { useState } from 'react'

const useFetchPost = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [failedToFetch, setFailedToFetch] = useState(null)

	const postData = async ({ url, Data }) => {
		setIsLoading(true)
		setError(null)

		try {
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(Data),
			})

			if (!response.ok) {
				setFailedToFetch(`HTTP error! status: ${response.status}`)
			}

			const result = await response.json()
			return { result, response }
		} catch (err) {
			setFailedToFetch(err.message)
			return { error: err.message }
		} finally {
			setIsLoading(false)
		}
	}

	return { postData, isLoading, failedToFetch }
}

export default useFetchPost
