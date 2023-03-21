import {useEffect, useState} from 'react'
import {getNamesOfCryptocurrencies} from '../api'
import MyInput from './UI/MyInput'
import MyButton from './UI/MyButton'

function ChoosingCryptocurrency({create, selected, getSelected}) {
	const [name, setName] = useState('')
	const [namesOfCryptocurrencies, setNamesOfCryptocurrencies] = useState([])
	const [filteredCoins, setFilteredCoins] = useState([])
	
	
	useEffect(() => {
		fetchNamesOfCryptocurrencies()
		return () => {
			setNamesOfCryptocurrencies([])
		}
	}, []) // eslint-disable-line react-hooks/exhaustive-deps
	useEffect(() => {
		const coins = namesOfCryptocurrencies
			.filter(e => e.includes(name.toUpperCase()))
			.sort((a, b) => a.length - b.length)
			.slice(0, 4)
		if (name) {
			setFilteredCoins(coins)
			getSelected()
		} else {
			setFilteredCoins([])
		}
		
		return () => {
			setFilteredCoins([])
		}
	}, [name]) // eslint-disable-line react-hooks/exhaustive-deps
	
	async function fetchNamesOfCryptocurrencies() {
		await getNamesOfCryptocurrencies(name).then(response =>
			setNamesOfCryptocurrencies(Object.keys(response.Data)))
		
	}
	
	const addCoin = (e) => {
		e.preventDefault()
		create(name.toUpperCase())
		setName('')
	}
	
	
	const handleKeyDown = () => {
		if (name) {
			create(name.toUpperCase())
			setName('')
		}
	}
	
	return (
		<>
			<h5>Тикер</h5>
			<div className='input-field col s12'>
				<div className='row'>
					<div className='input-field col s6'>
						<MyInput
							value={name}
							onChange={e => setName(e.target.value)}
							onKeyDown={e => e.key === 'Enter' ? handleKeyDown() : null}
							placeholder={'Cryptocurrency'} />
					</div>
				</div>
				{selected ? <div>Такая криптовалюта уже выбрана</div> : null}
				<div className='helper-coins'>
					{filteredCoins ? filteredCoins.map((e, i) =>
							<span className='helper-text' key={i + 1} onClick={(e) => setName(e.target.innerText)} data-error='wrong'
							      data-success='right'>{e}</span>)
						: null}
				</div>
			</div>
			<MyButton onClick={name ? addCoin : null} name={'Добавить'} icon={'add_circle_outline'} />
		</>
	)
}

export {ChoosingCryptocurrency}