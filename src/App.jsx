import './App.css'
import {ChoosingCryptocurrency} from './components/ChoosingCryptocurrency'
import {getCryptocurrency} from './api'
import {useMemo, useState} from 'react'
import CryptocurrencyList from './components/CryptocurrencyList'
import CoinFilter from './components/CoinFilter'

function App() {
	const [cryptocurrencies, setCryptocurrencies] = useState([])
	const [filter, setFilter] = useState({sort: '', query: ''})
	const createCoinList = (name) => {
		getCryptocurrency(name).then((data) => {
			setCryptocurrencies([...cryptocurrencies, {coin: name, price: data.USD, key: Date.now()}])
		})
	}
	
	const sortedCoins = useMemo(() => {
		if (filter.sort) {
			return [...cryptocurrencies].sort((a, b) => {
				if (filter.sort === 'price-min') {
					return a['price'] - b['price']
				}
				if (filter.sort === 'price-max') {
					return b['price'] - a['price']
				}
				return a[filter.sort].localeCompare(b[filter.sort])
			})
		}
		return cryptocurrencies
	}, [filter.sort, cryptocurrencies])
	
	const sortedAndSearchedCoins = useMemo(() => {
		return sortedCoins.filter(coin => coin.coin.includes(filter.query.toUpperCase()))
	}, [filter.query, sortedCoins])
	
	const deleteCoin = (name) => {
		setCryptocurrencies(cryptocurrencies.filter(e => e.coin !== name))
	}
	
	return <div className='App'>
		<main className='container content'>
			<ChoosingCryptocurrency create={createCoinList} />
			<CoinFilter filter={filter} setFilter={setFilter} />
			<CryptocurrencyList deleteCoin={deleteCoin} cryptocurrencies={sortedAndSearchedCoins} />
		</main>
	</div>
}

export default App
