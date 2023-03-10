import React from 'react'

const MyButton = ({onClick, name, icon}) => {
	return (
		<a href='#section'
		   onClick={onClick}
		   className='waves-effect waves-light btn'>
			<i className='material-icons left'>{icon}</i>
			{name}
		</a>
	)
}

export default MyButton