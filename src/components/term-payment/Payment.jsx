import React from 'react'
import "./Payment.css"

const Payment = () => {
  return (
    <div className='payment_container'>
            <h1>Telefonlar va maishiy texnika muddatli to'lovga</h1>
            <div className="payment_wrap">
                <div className="payment_tab_wrap">
                    <div className="item_img">
                        <img src="https://texnomart.uz/files/global/new-photo/img/shop-advantage/perechilsenie.svg" alt="" />
                    </div>
                    <h4 style={{fontWeight: "550"}}>Muddatli to'lovga sotib olish</h4>
                    <p className='payment_text_p'>Texnomartda masihiy texnika mahsulotlari uchun qulay to'lov</p>
                </div>
                <div className="payment_seperator"></div>
                <div className="payment_tab_wrap">
                    <div className="item_img">
                        <img src="https://texnomart.uz/files/global/new-photo/img/shop-advantage/delivery.svg" alt="" />
                    </div>
                    <h4 style={{fontWeight: "550"}}>Bepul yetkazish</h4>
                    <p className='payment_text_p'>Texnomartga tovarlarni yetkazib berish shartlari </p>
                </div>
                <div className="payment_seperator"></div>
                <div className="payment_tab_wrap">
                    <div className="item_img">
                        <img src="https://texnomart.uz/files/global/new-photo/img/shop-advantage/warranty.svg" alt="" />
                    </div>
                    <h4 style={{fontWeight: "550"}}>Mahsulotlar uchun kafolat</h4>
                    <p className='payment_text_p'>Texnomartda mahsulotning kafolati va qaytarilishi haqida hamma narsani bilib oling</p>
                </div>
                <div className="payment_seperator"></div>
                <div className="payment_tab_wrap">
                    <div className="item_img">
                        <img src="https://texnomart.uz/files/global/new-photo/img/shop-advantage/bonus.svg" alt="" />
                    </div>
                    <h4 style={{fontWeight: "550"}}>Bonus tizimi</h4>
                    <p className='payment_text_p'>Bonus tizimi</p>
                </div>
                <div className="payment_seperator"></div>
                <div className="payment_tab_wrap">
                    <div className="item_img">
                        <img src="https://texnomart.uz/files/global/new-photo/img/shop-advantage/help.svg" alt="" />
                    </div>
                    <h4 style={{fontWeight: "550"}}>Yordam</h4>
                    <p className='payment_text_p'>Ko'p beriladigan savollar</p>
                </div>
            </div>
    </div>
  )
}

export default Payment