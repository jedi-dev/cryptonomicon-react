import React from 'react'
import CryptocurrencyItem from './CryptocurrencyItem'

const CryptocurrencyList = ({cryptocurrencies, deleteCoin}) => {
	if (!cryptocurrencies.length) {
		return <div style={{textAlign: 'center'}} className='card'><span className='card-title'>Ни одной криптовалюты не выбрано</span>
		</div>
	}
	return (
		<div className='list'>
			{cryptocurrencies.map(item => <CryptocurrencyItem key={cryptocurrencies.key}
			                                                  deleteCoin={deleteCoin} {...item} />)}
		</div>
	)
}

export default CryptocurrencyList