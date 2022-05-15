import React, { useState, useEffect } from "react";
import "./AllProducts.css";
import axios from "axios";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [id, setId] = useState("");

  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:5000/api/product");
    setProducts(data.products);
  };

  const deleteHandler = async (e) => {
    e.preventDefault();
    await axios.delete(`http://localhost:5000/api/product/${id}`);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="all_products_wrap">
        <div className="all_product_conatainer">

      {products?.map((pr) => (
          <div key={pr._id} className="excelent_product">
            <div className="excelent_img">
              <img src={pr.image} alt="" />
            </div>
            <div className="ex_product_name">
              <p>{pr.title}</p>
            </div>
            <h3 className="ex_product_price">{pr.price} so'm</h3>
            <div className="ex_purchase"></div>
            <div className="u_p_wrap">
              <Link
                className="update_btn"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  fontWeight: "550",
                }}
                to={`/update/${pr._id}`}
              >
                Update
              </Link>
              <form onSubmit={deleteHandler}>
                <button className="delete_btn" onClick={() => setId(pr._id)}>
                  Delete
                </button>
              </form>
            </div>
          </div>
      ))}
        </div>
    </div>
  );
};

export default AllProducts;
