import React from 'react'
import CryptocurrencyItem from './CryptocurrencyItem'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

const CryptocurrencyList = ({cryptocurrencies, deleteCoin}) => {
	if (!cryptocurrencies.length) {
		return <div style={{textAlign: 'center'}} className='card'><span className='card-title'>Ни одной криптовалюты не выбрано</span>
		</div>
	}
	return (
		<div className='list'>
			<TransitionGroup component={null}>
				{cryptocurrencies.map(item =>
					<CSSTransition
						key={cryptocurrencies.key}
						timeout={500}
						classNames='coin'
					>
						<CryptocurrencyItem
							deleteCoin={deleteCoin}
							{...item} />
					</CSSTransition>
				)}
			</TransitionGroup>
		
		</div>
	)
}

export default CryptocurrencyList