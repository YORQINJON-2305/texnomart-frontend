import React, { useState } from "react";
import "./Navbar.css";
import { IoLocationOutline, IoGitCompareOutline } from "react-icons/io5";
import { FaGlobeAfrica } from "react-icons/fa";
import {
  MdKeyboardVoice,
  MdOutlineLocalFireDepartment,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { BiUser, BiHeart } from "react-icons/bi";
import { GrCart, GrFormClose } from "react-icons/gr";

const Navbar = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [withLogin, setWithLogin] = useState(false);
  const [card, setCard] = useState(false);

  console.log(openLogin);

  return (
    <>
      <div
        className="fade"
        style={
          openLogin || card
            ? { transform: "scale(1)" }
            : { transform: "scale(0)" }
        }
      ></div>
      <div className="container">
        <div className="nav_wrap">
          <div className="nav">
            <ul className="nav_ul">
              <li>
                <IoLocationOutline style={{ fontSize: "16px" }} /> Namangan
              </li>
              <li>Bizning do'konlarimiz</li>
              <li>B2B savdosi</li>
              <li>Muddatli to'lovga sotib olish</li>
              <li>To'lov usullari</li>
              <li>Mahsulotlar uchun kafolat</li>
              <li style={{ marginLeft: "150px", fontWeight: "500" }}>
                Qo'ng'iroq qilish:
              </li>
              <li
                style={{
                  marginLeft: "-30px",
                  fontSize: "19px",
                  fontWeight: "600",
                }}
              >
                +998998769855
              </li>
              <div className="lang_wrap">
                <FaGlobeAfrica />
                <select name="" id="">
                  <option value="Uz">O'z</option>
                  <option value="ЎЗ">ЎЗ</option>
                </select>
              </div>
            </ul>
          </div>
        </div>
        <div className="searchbar_container">
          <div className="search_wrap">
            <img
              src="https://texnomart.uz/files/global/new-photo/img/logotipe/logotipe.svg"
              alt=""
            />
            <div className="search_input_wrap">
              <div className="search_input">
                <select id="">
                  <option value="">Kiyimlar</option>
                  <option value="">Kiyimlar</option>
                  <option value="">Kiyimlar</option>
                </select>
                <input type="text" />
                <MdKeyboardVoice className="voice_icon" />
              </div>
              <div className="search_icon">
                <BsSearch />
              </div>
            </div>
            <ul className="search_ul">
              <li
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setOpenLogin(true);
                }}
              >
                <BiUser /> Kirish
              </li>
              <li>
                <IoGitCompareOutline /> Taqqoslash
              </li>
              <li>
                <BiHeart /> Sevimlilar
              </li>
              <li style={{ cursor: "pointer" }} onClick={() => setCard(true)}>
                <span className="count_product">0</span>
                <GrCart /> Savatcha
              </li>
            </ul>
          </div>
          <div className="nav_tab_collection">
            <div className="hover_katalog_wrap">
              <div className="katalog">
                <img
                  src="http://cdn.onlinewebfonts.com/svg/img_212017.png"
                  alt=""
                />
                <h1>Katalog</h1>
                <div className="hover_container">
                  <div className="hover_item_wrapper">
                    <div className="hover_sidebar">
                      <div className="sidebar_item_wrap">
                        <div className="sidebar_item">
                          <div className="sidear_item_img">
                            <img
                              src="https://texnomart.uz/files/global/new-photo/img/category_for_pc/texnika_dlya_doma.svg"
                              alt=""
                            />
                          </div>
                          <div className="sidebar_text_wrapper">
                            <p style={{ whiteSpace: "nowrap" }}>
                              Maishiy texnika
                            </p>
                          </div>
                          <div className="sidebar_arrow_wrap">
                            <MdKeyboardArrowRight className="sidebar_arrow" />
                          </div>
                        </div>
                        <div className="sidebar_item">
                          <div className="sidear_item_img">
                            <img
                              src="https://texnomart.uz/files/global/new-photo/img/category_for_pc/ofisnaya_texnika.svg"
                              alt=""
                            />
                          </div>
                          <div className="sidebar_text_wrapper">
                            <p style={{ whiteSpace: "nowrap" }}>
                              Ofis jihozlari
                            </p>
                          </div>
                          <div className="sidebar_arrow_wrap">
                            <MdKeyboardArrowRight className="sidebar_arrow" />
                          </div>
                        </div>
                        <div className="sidebar_item">
                          <div className="sidear_item_img">
                            <img
                              src="https://texnomart.uz/files/global/new-photo/img/category_for_pc/texnika_dlya_kuxni.svg"
                              alt=""
                            />
                          </div>
                          <div className="sidebar_text_wrapper">
                            <p style={{ whiteSpace: "nowrap" }}>
                              Oshxona uchun texnika
                            </p>
                          </div>
                          <div className="sidebar_arrow_wrap">
                            <MdKeyboardArrowRight className="sidebar_arrow" />
                          </div>
                        </div>
                        <div className="sidebar_item">
                          <div className="sidear_item_img">
                            <img
                              src="https://texnomart.uz/files/global/new-photo/img/category_for_pc/tovar_dlya_avto.svg"
                              alt=""
                            />
                          </div>
                          <div className="sidebar_text_wrapper">
                            <p style={{ whiteSpace: "nowrap" }}>
                              Avtomobil uchun mahsulotlar
                            </p>
                          </div>
                          <div className="sidebar_arrow_wrap">
                            <MdKeyboardArrowRight className="sidebar_arrow" />
                          </div>
                        </div>
                        <div className="sidebar_item">
                          <div className="sidear_item_img">
                            <img
                              src="https://texnomart.uz/files/global/new-photo/img/category_for_pc/klimaticheskaya_texnika.svg"
                              alt=""
                            />
                          </div>
                          <div className="sidebar_text_wrapper">
                            <p style={{ whiteSpace: "nowrap" }}>
                              Iqlim texnikasi
                            </p>
                          </div>
                          <div className="sidebar_arrow_wrap">
                            <MdKeyboardArrowRight className="sidebar_arrow" />
                          </div>
                        </div>
                        <div className="sidebar_item">
                          <div className="sidear_item_img">
                            <img
                              src="https://texnomart.uz/files/global/new-photo/img/category_for_pc/televizori_i_telekarti.svg"
                              alt=""
                            />
                          </div>
                          <div className="sidebar_text_wrapper">
                            <p style={{ whiteSpace: "nowrap" }}>
                              Televizorlar va telekartalar
                            </p>
                          </div>
                          <div className="sidebar_arrow_wrap">
                            <MdKeyboardArrowRight className="sidebar_arrow" />
                          </div>
                        </div>
                        <div className="sidebar_item">
                          <div className="sidear_item_img">
                            <img
                              src="https://texnomart.uz/files/global/new-photo/img/category_for_pc/telefoni_i_gatjeti.svg"
                              alt=""
                            />
                          </div>
                          <div className="sidebar_text_wrapper">
                            <p style={{ whiteSpace: "nowrap" }}>
                              Telefonlar va gadjetlar
                            </p>
                          </div>
                          <div className="sidebar_arrow_wrap">
                            <MdKeyboardArrowRight className="sidebar_arrow" />
                          </div>
                        </div>
                        <div className="sidebar_item">
                          <div className="sidear_item_img">
                            <img
                              src="https://texnomart.uz/files/global/new-photo/img/category_for_pc/komputernaya_texnika.svg"
                              alt=""
                            />
                          </div>
                          <div className="sidebar_text_wrapper">
                            <p style={{ whiteSpace: "nowrap" }}>
                              Kompyuter texnikasi
                            </p>
                          </div>
                          <div className="sidebar_arrow_wrap">
                            <MdKeyboardArrowRight className="sidebar_arrow" />
                          </div>
                        </div>
                        <div className="sidebar_item">
                          <div className="sidear_item_img">
                            <img
                              src="https://texnomart.uz/files/global/new-photo/img/category_for_pc/audiotexnika_i_hifi.svg"
                              alt=""
                            />
                          </div>
                          <div className="sidebar_text_wrapper">
                            <p style={{ whiteSpace: "nowrap" }}>
                              Audiotexnika va Hi-Fi
                            </p>
                          </div>
                          <div className="sidebar_arrow_wrap">
                            <MdKeyboardArrowRight className="sidebar_arrow" />
                          </div>
                        </div>
                        <div className="sidebar_item">
                          <div className="sidear_item_img">
                            <img
                              src="https://texnomart.uz/files/global/new-photo/img/category_for_pc/krasota_i_zdorove.svg"
                              alt=""
                            />
                          </div>
                          <div className="sidebar_text_wrapper">
                            <p style={{ whiteSpace: "nowrap" }}>
                              Go'zallik va salomatlik
                            </p>
                          </div>
                          <div className="sidebar_arrow_wrap">
                            <MdKeyboardArrowRight className="sidebar_arrow" />
                          </div>
                        </div>
                        <div className="sidebar_item">
                          <div className="sidear_item_img">
                            <img
                              src="https://texnomart.uz/files/global/new-photo/img/category_for_pc/tovati_dlya_detey.svg"
                              alt=""
                            />
                          </div>
                          <div className="sidebar_text_wrapper">
                            <p style={{ whiteSpace: "nowrap" }}>
                              Bolalar uchun mahsulotlar
                            </p>
                          </div>
                          <div className="sidebar_arrow_wrap">
                            <MdKeyboardArrowRight className="sidebar_arrow" />
                          </div>
                        </div>
                        <div className="sidebar_item">
                          <div className="sidear_item_img">
                            <img
                              src="https://texnomart.uz/files/global/new-photo/img/category_for_pc/foto_i_video.svg"
                              alt=""
                            />
                          </div>
                          <div className="sidebar_text_wrapper">
                            <p style={{ whiteSpace: "nowrap" }}>
                              Rasmlar va videolar
                            </p>
                          </div>
                          <div className="sidebar_arrow_wrap">
                            <MdKeyboardArrowRight className="sidebar_arrow" />
                          </div>
                        </div>
                        <div className="sidebar_item">
                          <div className="sidear_item_img">
                            <img
                              src="https://texnomart.uz/files/global/new-photo/img/category_for_pc/spor_i_uvlichenye.svg"
                              alt=""
                            />
                          </div>
                          <div className="sidebar_text_wrapper">
                            <p style={{ whiteSpace: "nowrap" }}>
                              Sport va sevimli mashg'ulot
                            </p>
                          </div>
                          <div className="sidebar_arrow_wrap">
                            <MdKeyboardArrowRight className="sidebar_arrow" />
                          </div>
                        </div>
                        <div className="sidebar_item">
                          <div className="sidear_item_img">
                            <img
                              src="https://texnomart.uz/files/global/new-photo/img/category_for_pc/igroviye_pristavki.svg"
                              alt=""
                            />
                          </div>
                          <div className="sidebar_text_wrapper">
                            <p style={{ whiteSpace: "nowrap" }}>
                              O'yin konsollari
                            </p>
                          </div>
                          <div className="sidebar_arrow_wrap">
                            <MdKeyboardArrowRight className="sidebar_arrow" />
                          </div>
                        </div>
                        <div className="sidebar_item">
                          <div className="sidear_item_img">
                            <img
                              src="https://texnomart.uz/files/global/new-photo/img/category_for_pc/tovari_dlya_doma.svg"
                              alt=""
                            />
                          </div>
                          <div className="sidebar_text_wrapper">
                            <p style={{ whiteSpace: "nowrap" }}>
                              Maishiy mahsulotlar
                            </p>
                          </div>
                          <div className="sidebar_arrow_wrap">
                            <MdKeyboardArrowRight className="sidebar_arrow" />
                          </div>
                        </div>
                        <div className="sidebar_item">
                          <div className="sidear_item_img">
                            <img
                              src="https://texnomart.uz/files/global/new-photo/img/category_for_pc/aksii_i_skidki.svg"
                              alt=""
                            />
                          </div>
                          <div className="sidebar_text_wrapper">
                            <p style={{ whiteSpace: "nowrap" }}>
                              Aksiyalar va chegirmalar
                            </p>
                          </div>
                          <div className="sidebar_arrow_wrap">
                            <MdKeyboardArrowRight className="sidebar_arrow" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="nav_tabs_ul">
              <MdOutlineLocalFireDepartment
                style={{ color: "red", fontSize: "20px", marginLeft: "50px" }}
              />
              <li style={{ marginLeft: "0px" }}> AKSIYALAR</li>
              <li>SMARTFONLAR</li>
              <li>MUZLATGICHLAR</li>
              <li>СHANGYUTGICHLAR</li>
              <li>XAVO SOVUTGICHLAR</li>
              <li>NOUTBUKLAR</li>
              <li>KIR YUVISH MASHINALARI</li>
              <li>TELEVIZORLAR</li>
              <li>BARCHA KATEGORIYALAR</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="login_container"
        style={openLogin ? { marginTop: "30px" } : { marginTop: "-1000px" }}
      >
        <div className="login_text">
          <div
            className="sign_in"
            onClick={() => setRegister(false)}
            style={
              register
                ? { backgroundColor: "#F7F7F7F7" }
                : { backgroundColor: "#fff" }
            }
          >
            <h3>Kirish</h3>
          </div>
          <div
            className="register"
            onClick={() => setRegister(true)}
            style={
              register
                ? { backgroundColor: "#fff" }
                : { backgroundColor: "#F7F7F7F7" }
            }
          >
            <h3>Ro'yxatdan o'tish</h3>
          </div>
          <div className="close_login" onClick={() => setOpenLogin(false)}>
            <GrFormClose />
          </div>
        </div>
        <div className="sign_in_wrap">
          <div className="phone_text_login">
            <p>Telefon</p>
          </div>
          <input type="text" placeholder="+998" />
          <button>Telefon orqali kirish</button>
          <p onClick={() => setWithLogin(true)} style={{ cursor: "pointer" }}>
            Login orqali krish
          </p>
        </div>
        <div
          className="register_container"
          style={register ? { display: "block" } : { display: "none" }}
        >
          <div className="register_input_wrap">
            <div className="phone_text">
              <p>Telefon</p>
            </div>
            <input type="text" placeholder="+998" />
            <input type="text" placeholder="Ism" />
            <input type="text" placeholder="Familiya" />
            <div className="checkbox_wrap">
              <input
                type="checkbox"
                style={{ width: "20px", height: "20px" }}
              />
              <span style={{ marginLeft: "8px" }}>
                Chegirmalar va aksiyalar haqida bilishni istayman
              </span>
            </div>
            <button>Ro'yxatdan o'tish</button>
          </div>
        </div>
        <div
          className="with_login_container"
          style={withLogin ? { display: "block" } : { display: "none" }}
        >
          <div className="login_input_wrap">
            <input type="text" placeholder="Login" />
            <input type="text" placeholder="Parol" />
            <button>Login orqali kirish</button>
            <p
              onClick={() => setWithLogin(false)}
              style={{ cursor: "pointer" }}
            >
              Telefon orqali kirish
            </p>
          </div>
        </div>
      </div>
      <div
        className="card_container"
        style={card ? { marginTop: "30px" } : { marginTop: "-1000px" }}
      >
        <div className="close_card" onClick={() => setCard(false)}>
            <GrFormClose />
          </div>
        
        <div className="card_text_wrapper"><h1>Hozir xarid qilish</h1></div>
        <div className="card_product_wrap">
          <div className="card_product_text">
            <img src="https://texnomart.uz/files/global/new-photo/img/error/shopping-cart.svg" alt="" />
              <div className="card_text_h1">
                <h1>Savatchada hozirda hech nima yo'q</h1>
              </div>
            <button className="card_buy_btn">Xarid qilish</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
