import React from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from 'react-redux'
import { removeItem, resetCart } from '../../redux/cartReducer';
import { useDispatch } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios";

const Cart = () => {

	const makeRequest = axios.create({
		baseURL: process.env.REACT_APP_API_URL,
		headers: { Authorization: 'bearer ' + process.env.REACT_APP_API_TOKEN }
	})


	const products = useSelector(state => state.cart.products);
	const dispatch = useDispatch()

	const total = () => {
		let total = 0;
		products.forEach(element => (total += element.quantity * element.price));
		return total.toFixed(2)
	}
	const stripePromise = loadStripe('pk_test_51NQ6XMJWB0xSIJqMZ1Xaoi6WEH5vWvc0J4WQQWzbpVdhSpfzbHRoJwNpDhFvEVtX6BpErJSLWSNPNT9fDLhaPH8R007UbVCpKE');
	const handlePayment = async () => {
		try {
			const stripe = await stripePromise;
			const res = await makeRequest.post("/orders", {
				products,
			});
			await stripe.redirectToCheckout({
				sessionId: res.data.stripeSession.id,
			});

		} catch (err) {
			console.log(err.response.data);
		}
	};

	return (
		<div className='cart'>
			<h1>Products in your cart</h1>
			{products?.map((item) => (
				<div className="item" key={item.id}>
					<img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
					<div className="details">
						<h1>{item.title}</h1>
						<p>{item.desc.substring(0, 100)}</p>
						<div className='price'> {item.quantity} x {item.price}$</div>
					</div>
					<DeleteOutlinedIcon className='delete' onClick={() => dispatch(removeItem(item.id))} />
				</div>
			))}
			<div className="total">
				<span>SUBTOTAL</span>
				<span>${total()}</span>
			</div>
			<button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
			<span className='reset' onClick={() => dispatch(resetCart())}>Reset Cart</span>
		</div>
	)
}

export default Cart