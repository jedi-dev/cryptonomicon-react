import React from 'react'

const MySelect = ({options, value, onChange}) => {
	return (
		<select
			className='input-select'
			value={value}
			onChange={(event) => onChange(event.target.value)}>
			<option value='' disabled>Выберите вариант сортировки</option>
			{options.map((option, i) => <option key={i + 1} value={option.value}>{option.name}</option>)}
		</select>
	)
}

export default MySelect