import React from 'react'
import CryptocurrencyItem from './CryptocurrencyItem'

const CryptocurrencyList = ({cryptocurrencies, deleteCoin}) => {
	return (
		<div className='list'>
			{cryptocurrencies.map(item => <CryptocurrencyItem key={cryptocurrencies.key}
			                                                  deleteCoin={deleteCoin} {...item} />)}
		</div>
	)
}

export default CryptocurrencyList