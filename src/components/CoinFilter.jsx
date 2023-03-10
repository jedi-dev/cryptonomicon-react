import React from 'react'
import MyInput from './UI/MyInput'
import MySelect from './UI/MySelect'

const CoinFilter = ({filter, setFilter}) => {
	return (
		<div>
			<div className='row'>
				<div className='input-field'>
					<MyInput
						value={filter.query}
						onChange={e => setFilter({...filter, query: e.target.value})}
						placeholder={'Search'} />
				</div>
			</div>
			<div className='input-field col s6'>
				<MySelect
					value={filter.sort}
					onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
					options={[
						{value: 'coin', name: 'По названию'},
						{value: 'price-min', name: 'По возрастанию цены'},
						{value: 'price-max', name: 'По убыванию цены'}
					]}
				/>
			</div>
		</div>
	)
}

export default CoinFilter