import React from "react";
import Header from "../components/Header";
import image1 from "../assets/image1.jpg";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <div className="container">
        <div
          style={{
            backgroundImage: `url(${image1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "250px",
            width: "100%",
            borderRadius: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
            flexDirection: "column",
            padding: "2rem",
          }}
        >
          <h1 className="categoriesHeading" style={{ color: "white" }}>
            About Us
          </h1>
          <p className="paragrapgh" style={{ color: "white" }}>
            Lorem ipsum dolor sit amet , Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet , Lorem ipsum dolor sit amet Lorem ipsum dolor sit
            amet , Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet , Lorem
            ipsum dolor sit amet
          </p>
        </div>
        <div style={{marginTop:"3rem" , marginBottom:'3rem'}}>
          <Row>
            <Col>
              <h1 className="categoriesHeading">Our Mission</h1>
              <p className="paragrapgh">
                Lorem ipsum dolor sit amet , Lorem ipsum dolor sit amet Lorem
                ipsum dolor sit amet , Lorem ipsum dolor sit amet Lorem ipsum
                dolor sit amet , Lorem ipsum dolor sit amet Lorem ipsum dolor
                sit amet , Lorem ipsum dolor sit amet
                Lorem ipsum dolor sit amet , Lorem ipsum dolor sit amet Lorem
                ipsum dolor sit amet , Lorem ipsum dolor sit amet Lorem ipsum
              </p>
            </Col>
            <Col>
              <img className="image1" src={image1} alt="imag1" />
            </Col>
          </Row>
        </div>
        <div>
            <Subscribe />
        </div>
        <div>
            <Footer />
        </div>
      </div>
    </>
  );
}
