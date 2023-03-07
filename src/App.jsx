import './App.css'
import {ChoosingCryptocurrency} from './components/ChoosingCryptocurrency'
import {getCryptocurrency} from './api'
import {useState} from 'react'
import CryptocurrencyList from './components/CryptocurrencyList'
import MySelect from './components/UI/MySelect'

function App() {
	const [cryptocurrencies, setCryptocurrencies] = useState([])
	const [selectedSort, setSelectedSort] = useState('')
	const createCoinList = (name) => {
		getCryptocurrency(name).then((data) => {
			setCryptocurrencies([...cryptocurrencies, {coin: name, price: data.USD, key: Date.now()}])
		})
	}
	const deleteCoin = (name) => {
		setCryptocurrencies(cryptocurrencies.filter(e => e.coin !== name))
	}
	const sortCoin = (sort) => {
		setSelectedSort(sort)
		setCryptocurrencies([...cryptocurrencies].sort((a, b) => {
			if (sort === 'price-min') {
				return a['price'] - b['price']
			}
			if (sort === 'price-max') {
				return b['price'] - a['price']
			}
			return a[sort].localeCompare(b[sort])
		}))
	}
	
	return <div className='App'>
		<main className='container content'>
			<ChoosingCryptocurrency create={createCoinList} />
			<div style={{margin: '20px 0 10px 0'}}>
				<MySelect
					value={selectedSort}
					onChange={sortCoin}
					options={[
						{value: 'coin', name: 'По названию'},
						{value: 'price-min', name: 'По возрастанию цены'},
						{value: 'price-max', name: 'По убыванию цены'}
					]}
				/>
			</div>
			{cryptocurrencies.length ?
				<CryptocurrencyList deleteCoin={deleteCoin} cryptocurrencies={cryptocurrencies} /> :
				<div style={{textAlign: 'center'}} className='card'><span className='card-title'>Ни одной криптовалюты не выбрано</span>
				</div>}
		</main>
	</div>
}

export default App
