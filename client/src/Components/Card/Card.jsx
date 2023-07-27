import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'

const Card = ({ item }) => {

	return (
		<Link className='link' to={`/product/${item.id}`}>
			<div className="card">
				<div className="image">
					{item?.attributes.isNew && <span>New Season</span>}
					<img src={process.env.REACT_APP_UPLOAD_URL + item.attributes?.Img.data.attributes.url} alt="" className='mainImg' />
					<img src={process.env.REACT_APP_UPLOAD_URL + item.attributes?.Img2.data.attributes.url} alt="" className='secondImg' />
				</div>
				<h2>{item?.attributes.Title}</h2>
				<div className="prices">
					<h3>${item?.attributes.oldPrice || item?.attributes.Price + 20}</h3>
					<h3>${item?.attributes.Price}</h3>
				</div>
			</div>
		</Link>
	)
}

export default Card