import './styles/App.css'
import {ChoosingCryptocurrency} from './components/ChoosingCryptocurrency'
import {getCryptocurrency} from './api'
import {useEffect, useState} from 'react'
import CryptocurrencyList from './components/CryptocurrencyList'
import CoinFilter from './components/CoinFilter'
import {useCoins} from './hooks/useCoins'

function App() {
	const [cryptocurrencies, setCryptocurrencies] = useState([])
	const [filter, setFilter] = useState({sort: '', query: ''})
	const sortedAndSearchedCoins = useCoins(cryptocurrencies, filter.sort, filter.query)
	const [coinSelected, setCoinSelected] = useState(false)
	const [graph, setGraph] = useState([])
	
	useEffect(() => {
		return () => clearInterval(interval)
	}, [])
	
	const createCoinList = (coinName) => {
		if (!cryptocurrencies.some(e => e.coin === coinName)) {
			setCryptocurrencies([...cryptocurrencies,
				{
					coin: coinName,
					price: 0,
					key: Date.now()
				}])
			if (!graph.some(e => e.coin === coinName)) {
				setGraph([...graph,
					{
						coin: coinName,
						price: []
					}])
			}
			interval(coinName)
		} else {
			setCoinSelected(true)
		}
	}
	
	const interval = (name) => {
		setInterval(async () => {
			await getCryptocurrency(name).then(price => {
				setCryptocurrencies(prevState => prevState.map(e => {
					if (e.coin === name) {
						e.price = price.USD > 1 ? price.USD.toFixed(2) : price.USD.toPrecision(2)
					}
					return e
				}))
				setGraph(prevState => prevState.map(e => {
					if (e.coin === name) {
						e.price = [...e.price, price.USD]
					}
					return e
				}))
			})
		}, 5000)
		
	}
	const deleteCoin = (name, e) => {
		e.stopPropagation()
		setCryptocurrencies(cryptocurrencies.filter(e => e.coin !== name))
		clearInterval(interval)
	}
	
	const getSelected = () => {
		if (coinSelected)
			setCoinSelected(false)
	}
	
	return <div className='App'>
		<main className='container content'>
			<ChoosingCryptocurrency create={createCoinList} selected={coinSelected} getSelected={getSelected} />
			<CoinFilter filter={filter} setFilter={setFilter} />
			<CryptocurrencyList graph={graph} deleteCoin={deleteCoin} cryptocurrencies={sortedAndSearchedCoins} />
		</main>
	</div>
}

export default App
