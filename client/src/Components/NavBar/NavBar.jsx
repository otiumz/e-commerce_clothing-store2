import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import './NavBar.scss'
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';
import BasicMenu from '../HamburgerMenu/HamburgerMenu';
import MenuIcon from '@mui/icons-material/Menu';





const NavBar = () => {


	const [open, setOpen] = useState(false)
	const products = useSelector(state => state.cart.products);
	return (
		<div className='navbar'>
			<div className='wrapper'>
				<div className='left'>
					<div className='item_nav-btn'>
						<img src="/img/united-kingdom.png" alt="lenguage" />
						<KeyboardArrowDownIcon />
					</div>
					<div className="item_nav-btn">
						<span>USD</span>
						<KeyboardArrowDownIcon />
					</div>
					<div className='menu_basic'>
						<BasicMenu />
						
					</div>
					
					<div className="item_nav">
						<Link className='link' to='/products/1'>Women</Link>
					</div>
					<div className="item_nav">
						<Link className='link' to='/products/2'>Men</Link>
					</div>
					<div className="item_nav">
						<Link className='link' to='/products/3'>Children</Link>
					</div>
				</div>
				<div className='center'>
					<Link className='logo' to='/'>
						<img src="./img/logo.png" alt="" />
					</Link>
				</div>
				<div className='right'>
					<div className='item_nav'>
						<Link className='link' to='/'>Home page</Link>
					</div>
					<div className='item_nav'>
						<Link className='link' to='/'>About</Link>
					</div>
					<div className='item_nav'>
						<Link className='link' to='/'>Contact</Link>
					</div>
					<div className='item_nav'>
						<Link className='link' to='/'>Store</Link>
					</div>
					<div className="icons">
						<SearchIcon />
						<PersonOutlineIcon />
						<FavoriteBorderIcon />
						<div className="cartIcon" onClick={() => setOpen(!open)}>
							<ShoppingCartIcon />
							<span>{products.length}</span>
						</div>
					</div>
				</div>
			</div>
			{open && <Cart />}
		</div>
	)
}

export default NavBar