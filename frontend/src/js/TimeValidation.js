// Функція для отримання годин і хвилин з рядка часу
export function extractHoursAndMinutes(timeString) {
	const [hours, minutes] = timeString.split(':')
	return `${hours}:${minutes}`
}

// Функція для форматування дати у вигляді YYYY-MM-DD
export const formatDate = dateString => {
	const date = new Date(dateString)
	const year = date.getFullYear()
	const month = String(date.getMonth() + 1).padStart(2, '0')
	const day = String(date.getDate()).padStart(2, '0')

	return `${year}-${month}-${day}`
}

export const NewsDate = dateString => {
	const date = new Date(dateString)

	return date.toLocaleString('uk-UA', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	})
}
