import React from 'react'
import CryptocurrencyGraphBar from './CryptocurrencyGraphBar'

const CryptocurrencyGraph = ({active, graph, onClick}) => {
	
	return (
		<>{
			active ? (<div>
				<div className='graph-header'>
					<h5>{active.coin}-USD</h5>
					<a href='#selection' onClick={() => onClick(null)} className='btn-floating'><i
						className='material-icons close'>close</i></a>
				</div>
				<div className='graph'>{
					graph.map((e) => {
						if (e.coin === active.coin) {
							return e.price.slice(-20).map((coin, i) => <CryptocurrencyGraphBar key={i + coin} price={e.price}
							                                                                   coin={coin} />)
						}
						return null
					})
				}</div>
			</div>) : null
		}</>
	)
}

export default CryptocurrencyGraph