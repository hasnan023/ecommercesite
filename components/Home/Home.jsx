import React from 'react'
import Navbar from './Navbar/Navbar'
import Header from './Header/Header'
import Products from '../Products/Products'
import Footer from './Footer/Footer'
import Navbar2 from './Navbar2/Navbar2'

const Home = () => {
  return (
    <div>
      <Navbar/>
      
      <Header/>
      <Products/>
      <Footer/>
      
    </div>
  )
}

export default Home;
