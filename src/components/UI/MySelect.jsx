import React from 'react'

const MySelect = ({options, value, onChange}) => {
	return (
		<select
			value={value}
			onChange={(event) => onChange(event.target.value)}
			style={{display: 'block'}}>
			<option value='' disabled>Выберите вариант сортировки</option>
			{options.map((option, i) => <option key={i + 1} value={option.value}>{option.name}</option>)}
		</select>
	)
}

export default MySelect