export function NoResultDisclaimer({ value }) {
	return (
		<div className='NoResultContainer'>
			<h3 className='NoResultHeader'>
				За вашим запитом '{value}' не було знайдено нічого!
			</h3>
			<p className='NoResultDescription'>
				Перевірте поточний запит або впишіть новий.
			</p>
		</div>
	)
}
