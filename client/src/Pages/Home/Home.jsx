import React from 'react'
import Slider from '../../Components/Slider/Slider'
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'
import './Home.scss'
import Categories from '../../Components/Categories/Categories'
import Contacts from '../../Components/Contacts/Contacts'


const Home = () => {
  return (
	  <div className='home'>
		  <Slider />
		  <FeaturedProducts type={'featured'} />
		  <Categories />
		  <FeaturedProducts type={'trending'} />
		  <Contacts />
	 </div>
  )
}

export default Home