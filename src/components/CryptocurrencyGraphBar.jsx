import React from 'react'

const CryptocurrencyGraphBar = ({price, coin}) => {
	
	const getPrice = (coin) => {
		const maxValue = Math.max(...price)
		const minValue = Math.min(...price)
		
		return (5 + ((coin - minValue) * 95) / (maxValue - minValue))
	}
	
	
	return (
		<>
			<div className='graph-bar' style={{height: `${getPrice(coin)}%`}}></div>
		</>
	)
}

export default CryptocurrencyGraphBar