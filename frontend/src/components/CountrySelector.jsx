import React, { useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

const customStyles = {
	control: provided => ({
		...provided,
		backgroundColor: 'transparent',
		border: 'none',
		boxShadow: 'none',
	}),
	option: provided => ({
		...provided,
		padding: 0,
	}),
	singleValue: provided => ({
		...provided,
		color: 'white',
	}),
	placeholder: provided => ({
		...provided,
		color: 'black',
	}),
}

function CountrySelector({ value, onChange }) {
	const options = useMemo(() => countryList().getData(), [])

	return (
		<Select
			options={options}
			value={options.find(option => option.label === value)}
			onChange={onChange}
			styles={customStyles}
			className='border-none'
		/>
	)
}

export default CountrySelector
