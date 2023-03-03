import './App.css'
import {ChoosingCryptocurrency} from './components/ChoosingCryptocurrency'
import {getCryptocurrency} from './api'
import {useState} from 'react'

function App() {
	const [cryptocurrencies, setCryptocurrencies] = useState([])
	const createCoinList = (name) => {
		getCryptocurrency(name).then((data) => {
			setCryptocurrencies([...cryptocurrencies, {coin: name, price: data.USD}])
		})
		
	}
	return <div className='App'>
		<main className='container content'>
			<ChoosingCryptocurrency create={createCoinList} />
		</main>
	</div>
}

export default App
