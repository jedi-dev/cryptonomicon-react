import {useMemo} from 'react'

const useSortedCoins = (coins, sort) => {
	const sortedCoins = useMemo(() => {
		if (sort) {
			return [...coins].sort((a, b) => {
				if (sort === 'price-min') {
					return a['price'] - b['price']
				}
				if (sort === 'price-max') {
					return b['price'] - a['price']
				}
				return a[sort].localeCompare(b[sort])
			})
		}
		return coins
	}, [sort, coins])
	
	return sortedCoins
}

const useCoins = (coins, sort, query) => {
	const sortedCoins = useSortedCoins(coins, sort)
	const sortedAndSearchedCoins = useMemo(() => {
		return sortedCoins.filter(coin => coin.coin.includes(query.toUpperCase()))
	}, [query, sortedCoins])
	
	return sortedAndSearchedCoins
}

export {useSortedCoins, useCoins}