export const formatDate = (date: string): string => {
	const options: Intl.DateTimeFormatOptions = {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		timeZone: 'UTC',
	}

	const formattedDate = new Date(date).toLocaleString('ru', options)

	return formattedDate
}
