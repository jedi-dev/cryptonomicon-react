import {API_KEY, API_URL} from './config'
import axios from 'axios'

const getCryptocurrency = async (crypto) => {
	const response = await axios.get(`${API_URL}/data/price?fsym=${crypto}&tsyms=USD&api_key=${API_KEY}`)
	return response.data
}

const getNamesOfCryptocurrencies = async () => {
	const response = await axios.get(`${API_URL}/data/all/coinlist?summary=true`)
	return response.data
}

export {getCryptocurrency, getNamesOfCryptocurrencies}