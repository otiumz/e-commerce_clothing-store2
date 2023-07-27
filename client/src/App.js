import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import './index.scss';



const Layout = () => {

	return (
		<div className="app">
			<NavBar />
			<Outlet />
			<Footer />
		</div>
	)
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />
			},
			{
				path: "/products/:id",
				element: <Products />
			},
			{
				path: "/product/:id",
				element: <Product />
			}
		]
	}
])
 

export default function App() {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	)
}

