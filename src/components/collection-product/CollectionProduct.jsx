import React, { useState, useEffect } from 'react'
import "./CollectionProduct.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { GrCart } from "react-icons/gr";
import { BiHeart } from "react-icons/bi";
import { IoGitCompareOutline } from "react-icons/io5";
import axios from "axios"

SwiperCore.use([Navigation, Pagination,  A11y ])

const CollectionProduct = () => {

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
        <h1 className='excelent_title'>To'plamalar</h1>
        <Swiper
      spaceBetween={40}
      slidesPerView={6}
      navigation
      pagination={{ clickable: true }}
    >

{/* {
            products?.products?.filter(title => title.type.includes('toplam')).map((product) => (
                <SwiperSlide key={product._id} className="slide">
                    <img src={product.image} alt="img" />
                    <span className="info">{product.title}</span>
                    <h4 className="price">{product.price} Сум</h4>
                    <div className="btn">
                      <button><GrCart className="i"/> В корзину</button>
                      <BiHeart/>
                      <img src="https://texnomart.uz/files/global/new-photo/icons/header-compair-new.svg" alt="" />
                    </div>
                </SwiperSlide>
            ))

        } */}

        {
          products?.products?.filter(ft => ft.type?.includes("toplam")).map(product => (
            <SwiperSlide key={product._id}>
          <div className="excelent_product" >
                <div className='collection_product_price'><span >Tavsiya etamiz</span></div>
                <div className="excelent_img"> <img src={product.image} alt="" /></div>
                <div className="ex_product_name">
                    <p>{product.title}</p>
                </div>
              <h3 className='ex_product_price'>{product.price}so'm</h3>
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

export default CollectionProduct