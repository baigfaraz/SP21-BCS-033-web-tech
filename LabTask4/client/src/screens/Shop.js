import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Icon } from "@iconify/react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card2 from "../components/Card2";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
// import { Link } from "react-router-dom";
import axiosInstance from "../service/axiosInstance";
import { useNavigate } from 'react-router-dom';


export default function Shop() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const fetchAllProducts = async () => {
    try {
      const response = await axiosInstance.get(
        "http://localhost:5000/product/getProducts"
      );
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching products:", error.response.data);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const searchProducts = async () => {
    if (!search.trim()) {
      fetchAllProducts();
      return;
    }

    try {
      const response = await axiosInstance.get(
        `http://localhost:5000/product/getProductByCategory/${search}`
      );
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error searching products:", error.response.data);
    }
  };
  const handleProductClick = (product) => {
    // Use navigate to navigate to the specified URL and pass state
    navigate(`/Shop/${product}`, { state: { productData: product } });
  };

  return (
    <>
      <Header />
      <div className="container  searchBarArea">
        <input
          type="text"
          placeholder="Search for products, brands and more"
          className="inputField"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <div className="home5-1">
          <Icon
            icon="iconamoon:search-thin"
            color="#114683"
            fontSize={25}
            style={{ cursor: "pointer" }}
            onClick={searchProducts}
          />
        </div>
      </div>
      {products.length === 0 ? (
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="shopProductHeading">No Products Found</h1>
        </div>
      ) : (
        <div className="container product">
          <h1 className="shopProductHeading">All Products</h1>
          <div>
            <Container>
              <Row>
                {products.map((product) => (
                  <Col key={product._id}>
                    <div
                      className="cardDecoration"
                      onClick={() => handleProductClick(product._id)}
                    >
                      <Card2
                        image={`http://localhost:5000/images/${product.product_image}`}
                        name={product.product_name}
                        price={product.product_price}
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </div>
      )}
      <div>
        <Subscribe />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
