import {API_KEY, API_URL} from './config'

const getCryptocurrency = async (crypto) => {
	const response = await fetch(`${API_URL}/data/price?fsym=${crypto}&tsyms=USD&api_key=${API_KEY}`)
	return await response.json()
}

const getNamesOfCryptocurrencies = async () => {
	const response = await fetch(`${API_URL}/data/all/coinlist?summary=true`)
	return await response.json()
}

export {getCryptocurrency, getNamesOfCryptocurrencies}