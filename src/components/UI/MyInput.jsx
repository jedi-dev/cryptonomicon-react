import React from 'react'

const MyInput = ({name, onChange}) => {
	return (
		<input
			id='first_name'
			type='text'
			className='validate'
			value={name}
			onChange={e => onChange(e.target.value)}
			placeholder={'Cryptocurrency'}
		/>
	)
}

export default MyInput