import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import image2 from "../assets/img2.png";
import image1 from "../assets/image1.jpg";
import Card1 from "../components/Card1";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../service/axiosInstance";
import Card2 from "../components/Card2";
import { Link } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  async function fetchOneProductPerCategory() {
    try {
      const response = await axiosInstance.get(
        "http://localhost:5000/product/getOneProductPerCategory"
      );

      if (response.status === 200) {
        setProducts(response.data);
      } else {
        console.error("Error:", response.data.message);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  useEffect(() => {
    fetchOneProductPerCategory();
  }, []);

  return (
    <>
      <div className="home1">
        <div className="home-1-1">
          <Header />
        </div>
        <div className=" container home1-2">
          <div className="home1-2-1">
            <h1 className="MainHeading">Explore Furniro</h1>
            <p className="paragrapgh">
              Explore our curated collection of exquisite furniture, where style
              meets comfort. From timeless classics to contemporary
              masterpieces, our website invites you to discover the perfect
              pieces that transform your space into a haven of sophistication
              and functionality. Elevate your home with our handpicked
              selection, blending craftsmanship and design to create an
              unparalleled furniture shopping experience. Welcome to a world
              where every click brings you closer to the living spaces of your
              dreams
            </p>
            <button
              className="btn btn-primary"
              style={{ backgroundColor: "#114683", marginTop: "2rem" }}
              onClick={() => {
                navigate("/shop");
              }}
            >
              Shop Now
            </button>
          </div>
          <div className="home1-2-2">
            <img className="image1" src={image1} alt="image1" />
          </div>
        </div>
      </div>
      <div className="container home2">
        <img className="image2" src={image2} alt="image2" />
        <div className="home2-1">
          <h1 className="align-self-start aboutUsHeading">About Us</h1>

          <p className="paragrapgh">
            At exploreFurniro, we are more than just a furniture retailer – we
            are curators of style and comfort, dedicated to transforming houses
            into homes. With a passion for quality craftsmanship and design
            excellence, we handpick each piece in our collection to ensure that
            it not only meets but exceeds your expectations
          </p>
        </div>
        <div>
          <button
            className="btn btn-primary"
            style={{ backgroundColor: "#114683", marginTop: "2rem" }}
            onClick={() => {
              navigate("/about");
            }}
          >
            Read More
          </button>
        </div>
      </div>

      <div className=" container home3">
        <h1 className="categoriesHeading">Categories</h1>
        <p className="paragrapgh">Explore your favourite categories</p>
        <div>
          <Container>
            <Row>
              {products.map((product) => (
                <Col key={product._id}>
                  <Link className="cardDecoration" to={`/Shop`}>
                    <Card1
                      image={`http://localhost:5000/images/${product.product_image}`}
                      title={product.product_name}
                      stock={product.product_Stock}
                    />
                  </Link>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
      {/* <div className="container home4">
        <h1 className="categoriesHeading">Trending Products</h1>
        <p className="paragrapgh">Explore our trend</p>
        <div>
          <Container>
            <Row>
              <Col>
                <Card2 />
              </Col>
              <Col>
                <Card2 />
              </Col>
              <Col>
                <Card2 />
              </Col>
              <Col>
                <Card2 />
              </Col>
            </Row>
          </Container>
        </div>
      </div> */}
      <div>
        <Subscribe />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
