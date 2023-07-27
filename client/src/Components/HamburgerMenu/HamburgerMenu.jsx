import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import './HamburgerMenu.scss'
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function BasicMenu() {
	
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event &&
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<Box
			sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{[<Link className='link' to='/products/1'>Women</Link>,
					<Link className='link' to='/products/2'>Men</Link>,
					<Link className='link' to='/products/3'>Children</Link>,
					<Link className='link' to='/'>Home page</Link>,
					<Link className='link' to='/'>About</Link>,
					<Link className='link' to='/'>Contact</Link>,
					<Link className='link' to='/'>Store</Link>,
				].map((link) => (
					<ListItem key={link.props.children} disablePadding>
						<ListItemButton >
								<ListItemText className='btn' primary={link} />
						</ListItemButton>
					</ListItem>
				))}
				<div className='item_nav-btn-ham'>
					<img src="/img/united-kingdom.png" alt="lenguage" />
					<KeyboardArrowDownIcon />
				</div>
				<div className="item_nav-btn-ham">
					<span>USD</span>
					<KeyboardArrowDownIcon />
				</div>
			</List>
		</Box>
	);
	return (
		<div>

			{['left'].map((anchor) => (
				<React.Fragment key={anchor}>
					<Button onClick={toggleDrawer(anchor, true)}><MenuIcon /></Button>
					<SwipeableDrawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
						onOpen={toggleDrawer(anchor, true)}
					>
						{list(anchor)}
					</SwipeableDrawer>
				</React.Fragment>
			))}
		</div>
	);
}















// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import './HamburgerMenu.scss'
// import { Link } from 'react-router-dom';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import MenuIcon from '@mui/icons-material/Menu';



// export default function BasicMenu() {
// 	const [anchorEl, setAnchorEl] = React.useState(null);
// 	const open = Boolean(anchorEl);
// 	const handleClick = (event) => {
// 		setAnchorEl(event.currentTarget);
// 	};
// 	const handleClose = () => {
// 		setAnchorEl(null);
// 	};

// 	return (
// 		<div className='main'>
// 			<Button
// 				id="basic-button"
// 				aria-controls={open ? 'basic-menu' : undefined}
// 				aria-haspopup="true"
// 				aria-expanded={open ? 'true' : undefined}
// 				onClick={handleClick}
// 			>
// 				<MenuIcon />
// 			</Button>
// 			<Menu className='menu'
// 				id="basic-menu"
// 				anchorEl={anchorEl}
// 				open={open}
// 				onClose={handleClose}
// 				MenuListProps={{
// 					'aria-labelledby': 'basic-button',
// 				}}
// 			>
// 				<MenuItem className='item' onClick={handleClose}>
// 					<Link className='link' to='/products/1'>Women</Link>
// 				</MenuItem>
// 				<MenuItem className='item' onClick={handleClose}>
// 					<Link className='link' to='/products/2'>Men</Link>
// 				</MenuItem>
// 				<MenuItem className='item' onClick={handleClose}>
// 					<Link className='link' to='/products/3'>Children</Link>
// 				</MenuItem>
// 				<MenuItem className='item' onClick={handleClose}>
// 					<Link className='link' to='/'>Home page</Link>
// 				</MenuItem>
// 				<MenuItem className='item' onClick={handleClose}>
// 					<Link className='link' to='/'>About</Link>
// 				</MenuItem>
// 				<MenuItem className='item' onClick={handleClose}>
// 					<Link className='link' to='/'>Contact</Link>
// 				</MenuItem>
// 				<MenuItem className='item' onClick={handleClose}>
// 					<Link className='link' to='/'>Store</Link>
// 				</MenuItem>
// 				<MenuItem className='item' onClick={handleClose}>
// 					<div className="item-main">
// 						<div className='item_nav-btn'>
// 							<img src="/img/united-kingdom.png" alt="lenguage" />
// 							<KeyboardArrowDownIcon />
// 							<div className="item_nav-btn">
// 								<span>USD</span>
// 								<KeyboardArrowDownIcon />
// 							</div>
// 						</div>
// 					</div>
// 				</MenuItem>
// 			</Menu>
// 		</div>
// 	);
// }