import React from "react";
import image1 from "../assets/image1.jpg";
import "../App.css";

export default function Subscribe() {
  return (
    <>
      <div className=" container home5">
        <h1 className="categoriesHeading">Keep in touch</h1>
        <p className="paragrapgh">Lorem ipsum dolor sit amet</p>
        <div
          style={{
            backgroundImage: `url(${image1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "200px",
            width: "100%",
            borderRadius: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          <input
            type="text"
            placeholder="Enter your email"
            className="inputField"
          />
          <div className="home5-1">
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
    </>     
  );
}
