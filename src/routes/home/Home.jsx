import React from 'react'
import "./Home.css"
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Banner from '../../components/banner/Banner'
import Slider from '../../components/tabs-slide/Slider'
import Excelent from '../../components/excelent-product/Excelent'
import NewProduct from '../../components/new-product/NewProduct'
import XitProduct from '../../components/Xit-product/XitProduct'
import CollectionProduct from '../../components/collection-product/CollectionProduct'
import Payment from '../../components/term-payment/Payment'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Slider/>
        <Excelent/>
        <NewProduct/>
        <XitProduct/>
        <CollectionProduct/>
        <Payment/>
        <Footer/>
    </div>
  )
}

export default Home