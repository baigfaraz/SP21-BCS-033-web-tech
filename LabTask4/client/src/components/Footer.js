import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Icon } from "@iconify/react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row className="footerRow">
          <Col className="footerLogo">
            <Logo />
          </Col>
          <Col>
            <Row>
              <h1 className="footerHeading">Navigation</h1>
            </Row>
            <Row>
              <a href="#" className="link">
                Home
              </a>
            </Row>
            <Row>
              <a href="#" className="link">
                About
              </a>
            </Row>
            <Row>
              <a href="#" className="link">
                Categories
              </a>
            </Row>
            <Row>
              <a href="#" className="link">
                Contact
              </a>
            </Row>
          </Col>
          <Col>
            <Row>
              <h1 className="footerHeading">Contact Us</h1>
            </Row>
            <Row>
              <p className="link">For all inquiries contact us</p>
            </Row>
            <Row>
              <a href="#" className="link">
                baigfaraz000@gmail.com
              </a>
            </Row>
            <Row>
              <p className="link">head over to our social media pages</p>
            </Row>
            <Row>
              <p className="link">send us a message</p>
            </Row>
            <Row>
              <Col>
                <a href="#">
                  <Icon icon="skill-icons:twitter" fontSize={26} />
                </a>
              </Col>
              <Col>
                <a href="#">
                  <Icon icon="skill-icons:instagram" fontSize={26} />
                </a>
              </Col>
              <Col>
                <a href="#">
                  <Icon icon="logos:whatsapp-icon" fontSize={26} />
                </a>
              </Col>
              <Col>
                <a href="#">
                  <Icon icon="logos:facebook" fontSize={26} />
                </a>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <h1 className="footerHeading">Payment</h1>
            </Row>
            <Row>
              <p className="link">Pay your bills at</p>
            </Row>
            <Row>
              <Col>
                <a href="#">
                  <Icon icon="logos:visaelectron" fontSize={25} />
                </a>
              </Col>
              <Col>
                <a href="#">
                  <Icon icon="cib:cc-paypal" fontSize={25} />
                </a>
              </Col>
              <Col>
                <a href="#">
                  <Icon icon="logos:mastercard" fontSize={25} />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
