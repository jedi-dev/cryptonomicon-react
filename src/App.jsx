import './App.css'
import {ChoosingCryptocurrency} from './components/ChoosingCryptocurrency'
import {getCryptocurrency} from './api'
import {useState} from 'react'
import CryptocurrencyList from './components/CryptocurrencyList'
import MySelect from './components/UI/MySelect'

function App() {
	const [cryptocurrencies, setCryptocurrencies] = useState([])
	const createCoinList = (name) => {
		getCryptocurrency(name).then((data) => {
			setCryptocurrencies([...cryptocurrencies, {coin: name, price: data.USD, key: Date.now()}])
		})
		
	}
	
	const deleteCoin = (name) => {
		setCryptocurrencies(cryptocurrencies.filter(e => e.coin !== name))
	}
	return <div className='App'>
		<main className='container content'>
			<ChoosingCryptocurrency create={createCoinList} />
			<div style={{margin: '10px 0 10px 0'}}>
				<MySelect
					options={[
						{value: 'coin', name: 'По названию'},
						{value: 'price', name: 'По возрастанию цены'},
						{value: 'price', name: 'По убыванию цены'}
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
