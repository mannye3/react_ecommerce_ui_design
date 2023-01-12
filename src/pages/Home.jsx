import React from 'react'
import Announcement from '../componets/Announcement'
import Categories from '../componets/Categories'
import Footer from '../componets/Footer'
import Navbar from '../componets/Navbar'
import Newsletter from '../componets/Newsletter'
import Products from '../componets/Products'
import Sliders from '../componets/Sliders'

const Home = () => {
  return (
    <div>
      <Navbar/>
        <Announcement/>
     
     <Sliders/>
     <Categories/>
     <Products/>
     <Newsletter/>
     <Footer/>
    </div>
  )
}

export default Home
