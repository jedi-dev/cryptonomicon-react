import React from 'react'

const MyInput = (props) => {
	return (
		<input
			id='first_name'
			type='text'
			className='validate'
			{...props}
		/>
	)
}

export default MyInput