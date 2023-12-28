import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Headers from "../components/Header";
import { Icon } from "@iconify/react";
import axiosInstance from "../service/axiosInstance";
import { useNavigate } from "react-router-dom";


export default function Cart() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  

  const fetchProduct = async () => {
    try {
      const response = await axiosInstance.get(
        `http://localhost:5000/cart/getUserCart/${localStorage.getItem("user")}`
      );
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching products:", error.response.data);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleDeleteCart = async (id) => {
    try {
      const response = await axiosInstance.delete(
        `http://localhost:5000/cart/removeFromCart/${id}`
      );
      setProducts({
        products: products.filter((product) => product._id !== id),
      });
    } catch (error) {
      console.error("Error fetching products:", error.response.data);
    }
  };

  return (
    <>
      <div>
        <Headers />
      </div>
      {products.length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
          }}
        >
          <h1 style={{ color: "grey", fontSize: "2rem" }}>
            Your Cart is Empty
          </h1>
        </div>
      ):(

      
      <div className="container">
        <h1 className="shopProductHeading">Cart</h1>

        <table
          className="container"
          style={{
            borderCollapse: "separate",
            borderSpacing: "10px",
            marginBottom: "3rem",
          }}
        >
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Remove Option</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                style={{
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                  borderRadius: "5px",
                }}
              >
                <td>
                  <img
                    src={`http://localhost:5000/images/${product.product_image}`}
                    alt="Product"
                    style={{
                      maxWidth: "50px",
                      maxHeight: "50px",
                      borderRadius: "5px",
                    }}
                  />
                </td>
                <td className="d-flex justifyContent-center">
                  <div className="pagination2">
                    <h1 className="paginationNumber">-</h1>
                    <h1 className="paginationNumber">2</h1>
                    <h1 className="paginationNumber">+</h1>
                  </div>
                </td>
                <td>${product.product_price}</td>
                <td>
                  <button
                    style={{
                      padding: "5px 10px",
                      borderRadius: "5px",
                      backgroundColor: "red",
                      color: "white",
                    }}
                    onClick={() => handleDeleteCart(product._id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "1rem",
            marginBottom: "3rem",
          }}
        >
          <div>
            <p
              style={{
                fontWeight: "bold",
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <Icon
                icon="eva:arrow-back-outline"
                color="#114683"
                fontSize={25}
                style={{cursor:'pointer'}}
                onClick={() => navigate("/shop")}
              />
              Conitnue Shopping
            </p>
          </div>
          <div>
            <span style={{ color: "grey", fontWeight: "bold" }}>Total : </span>
            <span style={{ color: "black", fontWeight: "500" }}>$200</span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              backgroundColor: "#114683",
              color: "white",
              border: "none",
              marginBottom: "3rem",
            }}
          >
            Payment
          </button>
        </div>
      </div>
      
      )}
      <div>
        <Footer />
      </div>
    </>
  );
}
