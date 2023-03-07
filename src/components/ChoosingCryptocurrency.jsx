import {useEffect, useState} from 'react'
import {getNamesOfCryptocurrencies} from '../api'
import MyInput from './UI/MyInput'

function ChoosingCryptocurrency({create}) {
	const [name, setName] = useState('')
	const [namesOfCryptocurrencies, setNamesOfCryptocurrencies] = useState([])
	const [filteredCoins, setFilteredCoins] = useState([])
	
	
	useEffect(() => {
		getNamesOfCryptocurrencies(name).then((data) => {
			setNamesOfCryptocurrencies(Object.keys(data.Data))
		})
		return () => {
			setNamesOfCryptocurrencies([])
		}
	}, []) // eslint-disable-line react-hooks/exhaustive-deps
	useEffect(() => {
		const coins = namesOfCryptocurrencies
			.filter(e => e.includes(name.toUpperCase()))
			.sort((a, b) => a.length - b.length)
			.slice(0, 4)
		name ? setFilteredCoins(coins) : setFilteredCoins([])
		return () => {
			setFilteredCoins([])
		}
	}, [name]) // eslint-disable-line react-hooks/exhaustive-deps
	
	const addCoin = (e) => {
		e.preventDefault()
		create(name.toUpperCase())
		setName('')
	}
	
	const addName = (name) => {
		setName(name)
	}
	
	return (
		<>
			<h5>Тикер</h5>
			<div className='input-field col s12'>
				<div className='row'>
					<div className='input-field col s6'>
						<MyInput name={name} onChange={addName} />
					</div>
				</div>
				<div className='helper-coins'>
					{filteredCoins ? filteredCoins.map((e, i) =>
							<span className='helper-text' key={i + 1} onClick={(e) => setName(e.target.innerText)} data-error='wrong'
							      data-success='right'>{e}</span>)
						: null}
				</div>
			
			</div>
			<a href='#section' onClick={name ? addCoin : null}
			   className='waves-effect waves-light btn'><i
				className='material-icons left'>add_circle_outline</i>Добавить</a>
		</>
	)
}

export {ChoosingCryptocurrency}