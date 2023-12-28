import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
  
    <div style={{height:'100vh'}}>
      <Header />
      <div className="container" >
        <div>
          <h1 className="categoriesHeading" style={{ marginTop: "2rem" }}>
            Contact us
          </h1>
          <p className="paragrapgh">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div
            className="mt-5"
            style={{ width: "50%", borderColor: "2px solid #114683" }}
          >
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Message</label>
                <textarea
                  type="text"
                  placeholder="Type your message here..."
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="termsAnd Policy">
                <input
                  type="checkbox"
                  style={{ marginRight: "1rem", marginTop: "1rem" }}
                />
                <label for="exampleInputPassword1">
                  I agree to the terms and conditions
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ marginTop: "2rem" }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div>
        <Footer />
    </div>

    </>
  );
}
