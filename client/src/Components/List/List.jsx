import React from 'react'
import './List.scss'
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'

const List = ({ sort, maxPrice, subCats, catId }) => {

	
	const { data, loading, error } = useFetch(`/products?populate=*&[filters][categories][id]=${catId}${subCats.map(item => `&filters[sub_categories][id][$eq]=${item}`)}&[filters][Price][$lte]=${maxPrice}&sort=Price:${sort}`
	);


	return (
		<div className='list'>
			{loading ? 'loading' : data?.map(item => (<Card item={item} key={item.id} />))}
		</div>
	)
}

export default List