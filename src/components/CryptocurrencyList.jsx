import React, {useState} from 'react'
import CryptocurrencyItem from './CryptocurrencyItem'
import CryptocurrencyGraph from './CryptocurrencyGraph'

const CryptocurrencyList = ({cryptocurrencies, deleteCoin, graph}) => {
	const [active, setActive] = useState(null)
	
	if (!cryptocurrencies.length) {
		return <div className='card'><span className='card-title'>Ни одной криптовалюты не выбрано</span>
		</div>
	}
	const getElem = (item) => {
		setActive(item)
	}
	return (
		<>
			<div className='list'>
				{cryptocurrencies.map(item =>
					<CryptocurrencyItem
						key={item.key}
						deleteCoin={deleteCoin}
						item={item}
						isActive={active === item}
						onClick={() => getElem(item)}
						{...item} />
				)}
			</div>
			<CryptocurrencyGraph graph={graph} active={active} onClick={getElem} />
		</>
	)
}

export default CryptocurrencyList