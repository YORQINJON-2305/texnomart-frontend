import React from 'react'
import "./Footer.css"
import { FaTelegramPlane, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='container_footer'>
        <div className="footer_wrap">
           <div className="footer_text_container">
            <div className="footer_contact_wrap">
                    <p className='text_contact_p'>Savoliz bormi? Telefon qiling</p>
                    <h1 className='footer_number'>+998 99 876 98 55</h1>
                    <p className='text_contact_p'>Ishonch telefoni</p>
                    <h1 className='footer_number'>+998 99 876 98 55</h1>
                        <ul className='footer_ul'>
                            <li><FaFacebookF/></li>
                            <li><FaTelegramPlane/></li>
                            <li><FaInstagram/></li>
                            <li><FaYoutube/></li>
                        </ul>
                        <button className='footer_btn'><img src="https://texnomart.uz/files/global/new-photo/img/logotipe/playmarket-logo.svg" alt="" /></button>
                    <br />  <a className='footer_link' href="/" >Do'kon manzillari Namangan</a>
                </div>
                <div className="footer_text_wrap">
                    <div className="company_text_wrap">
                        <h3 style={{color: "#fff"}}>Kompaniya</h3>
                        <p style={{marginTop: "20px"}}>B2B savdosi</p>
                        <p>Biz haqimizda</p>
                        <p>Yangiliklar va sharhlar</p>
                        <p>IMEI ni tekshirish</p>
                    </div>
                    <div className="company_text_wrap">
                        <h3 style={{color: "#fff"}}>Ma'lumot</h3>
                        <p style={{marginTop: "20px"}}>Bepul yetkazish</p>
                        <p>Bonus tizimi</p>
                        <p>Texnomartda ishlash</p>
                        <p>Shaxsiy kabinet</p>
                        <p>Aloqa raqamlari</p>
                    </div>
                    <div className="company_text_wrap">
                        <h3 style={{color: "#fff"}}>Haridorga yordam</h3>
                        <p style={{marginTop: "20px"}}>Muddatli to'lovga sotib olish</p>
                        <p>Maxsulotni qaytarish</p>
                        <p>Mahsulotlar uchun kafolat</p>
                        <p>Ko'p so'raladigan savollar</p>
                    </div>
                </div>
           </div>
          <div className="footer_seperator"></div>
          <div className="copright_wrap">
              <div className="copyright_text">
                  <p>2016-2022 ©Texnomart.uz. Barcha huquqlar himoyalangan. Tovarlarning ko'rsatilgan narxlari va ularni sotib olish shartlari faqat joriy sana uchun ko'rsatilgan.</p>
              </div>
              <div className="footer_cart_img">
                  <img src="	https://texnomart.uz/files/global/new-photo/img/payment-type/paymart.png" alt="" />
                  <img src="	https://texnomart.uz/files/global/new-photo/img/payment-type/payme.png" alt="" />
                  <img src="	https://texnomart.uz/files/global/new-photo/img/payment-type/zmarket.png" alt="" />  
                  <img src="	https://texnomart.uz/files/global/new-photo/img/payment-type/zoodmall.png" alt="" />
                  <img src="	https://texnomart.uz/files/global/new-photo/img/card-uzcard.png" alt="" />
              </div>
          </div>
        </div>
    </div>
  )
}

export default Footer