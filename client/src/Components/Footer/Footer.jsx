import React from 'react'
import './Footer.scss'


const Footer = () => {

	return (
		<div className='footer'>
			<div className='top'>
				<div className="item">
					<h1>Categories</h1>
					<span>Women</span>
					<span>Men</span>
					<span>Shoes</span>
					<span>Accessories</span>
					<span>New Arrivals</span>
				</div>
				<div className="item">
					<h1>Links</h1>
					<span>FAQ</span>
					<span>Pages</span>
					<span>Stores</span>
					<span>Compare</span>
					<span>Cookies</span>
				</div>
				<div className="item_text">
					<h1>About</h1>
					<span>
						It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
					</span>
				</div>
				<div className="item_text">
					<h1>Contacts</h1>
					<span>
						At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. 
					</span>
				</div>
			</div>
			<div className="bottom_footer">
				<div className="left">
					<span className='logo'>Lamastore</span>
					<span className='copyright'>
						© Copyright 2023 & All Rights Reserved
					</span>
				</div>
				<div className="right">
					<img src="/img/payment.png" alt="paymant" />
				</div>
			</div>
		</div>

	)
}

export default Footer