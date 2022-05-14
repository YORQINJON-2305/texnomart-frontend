import React, { useState, useEffect } from 'react'
import "./Excelent.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { GrCart } from "react-icons/gr";
import { BiHeart } from "react-icons/bi";
import { IoGitCompareOutline } from "react-icons/io5"
import axios from "axios"

SwiperCore.use([Navigation, Pagination,  A11y ])

const Excelent = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      async function fetchData() {
        try {
          let allProducts = await axios.get("http://localhost:5000/api/product");
          setProducts(allProducts.data);
        } catch (err) {
          console.log(err);
        }
      }
      fetchData();
    }, []);

    return (
        <div className='excelent_product_container'>
        <h1 className='excelent_title'>Zo'r narx</h1>
        <Swiper
      spaceBetween={40}
      slidesPerView={6}
      navigation
      pagination={{ clickable: true }}
    >

        {
            products?.products?.filter(ft => ft.type?.includes(" narx")).map(product => (
                <SwiperSlide key={product._id}>
                <div className="excelent_product" >
                      <div  className='excelent_price'><span >Zo'r narx</span></div>
                      <div className="excelent_img"> <img src={product.image} alt="" /></div>
                      <div className="ex_product_name">
                          <p>{product.title}</p>
                      </div>
                    <h3 className='ex_product_price'>{product.price}</h3>
                    <div className="ex_purchase">
                        <button className='purchase_btn'> <GrCart /> Savatchaga</button>
                        <BiHeart/>
                        <IoGitCompareOutline/>
                    </div>
                </div>
            </SwiperSlide>
                ))
            
        }
    
    </Swiper>
    </div>
    );
}

export default Excelent