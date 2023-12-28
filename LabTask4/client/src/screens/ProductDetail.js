import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Image1 from "../assets/image1.jpg";
import { Icon } from "@iconify/react";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import axiosInstance from "../service/axiosInstance";
import { useLocation } from "react-router-dom";


export default function ProductDetail(props) {
  const location = useLocation();
  const { productData } = location.state || {};
  const [products, setProducts] = React.useState([]);

  const fetchProduct = async () => {
    try {
      const response = await axiosInstance.get(
        `http://localhost:5000/product/getProductById/${productData}`
      );
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching products:", error.response.data);
    }
  };
const [user,setUser]=useState();
  useEffect(() => {
    fetchProduct();
    const tok = localStorage.getItem('user')
      setUser(tok)
      console.log(tok)
  }, []);

  const handleCartClick = async() => {
    const data = {
    user_id : user,
    product_name : products.product_name,
    product_image :products.product_image,
    product_price : products.product_price,
    product_quantity: 1,
    }
    console.log(data)
    try{
      const response = await axiosInstance.post(
        `http://localhost:5000/cart/addToCart`, data
      );
     alert('added to cart');   
      console.log(response.data);
      console.log('added to cart');
    }
    catch(error){
      console.error("Error fetching products:", error.response.data);
    }
  };
  

  return (
    <>
      <div className="product1">
        <div className="headerHeight">
          <Header />
        </div>
        <div className="container product1-2">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              width: "50%",
            }}
          >
            <div>
              <img
                src={`http://localhost:5000/images/${products.product_image}`}
                alt="product"
                style={{
                  width: "350px",
                  height: "350px",
                  borderRadius: "15px",
                }}
              />
            </div>
          </div>
          <div style={{ flexDirection: "column", width: "50%" }}>
            <h1 className="aboutUsHeading">ProductDetail</h1>
            <p className="paragrapgh">{products.product_description}</p>
            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <>
                <span style={{ color: "red" }}>Price : </span>
                <span style={{ color: "black", fontWeight: "500" }}>
                  ${products.product_price}
                </span>
              </>
              <>
                <span style={{ color: "red" }}>Rating : </span>
                <span style={{ color: "black", fontWeight: "500" }}>2.3</span>
              </>
              <>
                <span style={{ color: "red" }}>Quantity: </span>
                <span style={{ color: "black", fontWeight: "500" }}>
                  {products.product_Stock}
                </span>
              </>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "Row",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p
                  className="paragrapgh"
                  style={{
                    color: "#00B517",
                    fontWeight: "bold",
                    display: "flex",
                    flexDirection: "row",
                    gap: "0.5rem",
                    alignItems: "center",
                    marginTop: "1rem",
                  }}
                >
                  <Icon
                    icon="mdi:tick"
                    color="#00b517"
                    style={{ fontWeight: "bold" }}
                  />
                  In Stock
                </p>
                {/* <div className="pagination2">
                  <h1 className="paginationNumber">-</h1>
                  <h1 className="paginationNumber">2</h1>
                  <h1 className="paginationNumber">+</h1>
                </div> */}
              </div>
              <div
               onClick={() => handleCartClick()}
               >
                <Icon
                  icon="mdi-light:cart"
                  fontSize={35}
                  color="#903D10"
                  style={{
                    backgroundColor: "#E6ECF2",
                    borderRadius: "50%",
                    padding: "4px",
                    cursor: "pointer",
                    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Subscribe />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
