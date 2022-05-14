import React, { useState, useEffect } from 'react'
import "./NewProduct.css"
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

const NewProduct = () => {

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
        <h1 className='excelent_title'>Yangi Mahsulotlar</h1>
        <Swiper
      spaceBetween={40}
      slidesPerView={6}
      navigation
      pagination={{ clickable: true }}
    >

        {
            products?.products?.filter(ft => ft.type?.includes("yangi")).map(pr => (
                <SwiperSlide key={pr._id}>
                    <div  className="excelent_product">
                        <div className='new_product_price'><span >Yangi</span></div>
                        <div className="excelent_img"> <img src={pr.image} alt="" /></div>
                        <div className="ex_product_name">
                            <p>{pr.title}</p>
                        </div>
                        <h3 className='ex_product_price'>{pr.price} so'm</h3>
                        <div className="ex_purchase">
                            <div className="product_btn_wrap">
                                <button className='purchase_btn'> <GrCart /> Savatchaga</button>
                            </div>
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

export default NewProduct