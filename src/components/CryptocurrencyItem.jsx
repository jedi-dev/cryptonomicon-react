import React from 'react'

const CryptocurrencyItem = ({coin, price, deleteCoin}) => {
	return (
		<div className='card'>
			<div className='card-content'>
				<h6>{coin} - USD</h6>
				<span className='card-title'>{price}</span>
			</div>
			<div className='card-action'>
				<a href='#section' onClick={() => deleteCoin(coin)}
				   className='waves-effect waves-light btn-small'><i
					className='material-icons left'>delete</i>Удалить</a>
			</div>
		</div>
	)
}

export default CryptocurrencyItem