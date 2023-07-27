import React, { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from 'react-router-dom'
import useFetch from "../../hooks/useFetch"
import { useDispatch } from 'react-redux';
import { addToCart } from "../../redux/cartReducer";

const Product = () => {


	const id = useParams().id
	const [selectedImg, setSelectedImg] = useState('Img')
	const [quantity, setQuantity] = useState(1)  

	const dispatch = useDispatch()

	const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

	return (
		<div className='product'>
			{loading ? 'loading' : <>
				<div className="left">
					<div className="images">
						<img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.Img?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg('Img')} />
						<img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.Img2?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg('Img2')} />
					</div>
					<div className="mainImg">
						<img src={process.env.REACT_APP_UPLOAD_URL +data?.attributes?.[selectedImg]?.data?.attributes?.url} alt="" />
					</div>
				</div>
				<div className="right">
					<h1>{data?.attributes?.Title}</h1>
					<span className='price'>{data?.attributes?.Price}$</span>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo vel quam facere eos nulla animi quae optio odio corporis! Veniam commodi dicta ducimus dolorem voluptate molestiae quidem a, rem quo.
					</p>
					<div className="quantity">
						<button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
						{quantity}
						<button onClick={() => setQuantity(prev => prev + 1)}>+</button>
					</div>
					<button className='add' onClick={() => dispatch(addToCart({
						id: data.id,
						title: data.attributes.Title,
						desc: data.attributes.Desc,
						price: data.attributes.Price,
						img: data.attributes.Img.data.attributes.url,
						quantity,
					}))}>
						<AddShoppingCartIcon />
						ADD TO CART
					</button>
					<div className="links">
						<div className="item">
							<FavoriteBorderIcon /> ADD TO WISH LIST
						</div>
						<div className="item">
							<BalanceIcon /> ADD TO COMPARE
						</div>
					</div>
					<div className="info">
						<span>Vendor: Polo</span>
						<span>Product Type: T-Shirt</span>
						<span>Tag: T-Shirt, Women, Top</span>
						<hr />
					</div>

					<div className="info">
						<span>DESCRIPTION</span>
						<hr />
						<span>ADDITIONAL INFORMATION</span>
						<hr />
						<span>FAQ</span>
					</div>
				</div></>}
		</div>
	)
}

export default Product