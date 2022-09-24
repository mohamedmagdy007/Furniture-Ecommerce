import React from "react";
import styles from "./footer.module.css";
import { Container, Row, Col } from "reactstrap";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col xl="3" md="6">
            <h2>Multimart</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
              qui reprehenderit ipsam, harum id rerum fuga distinctio sapiente
              accusantium, iusto earum officiis doloribus minima quo neque,
              asperiores commodi beatae? Voluptas!m
            </p>
          </Col>
          <Col xl="3" md="6">
            <h2>Top Categories</h2>
            <p>Mobile Phones</p>
            <p>Modern Sofa</p>
            <p>Arm Chair</p>
            <p>Smart Watches</p>
          </Col>
          <Col xl="3" md="6">
            <h2>Useful Links</h2>
            <p>Shop</p>
            <p>Cart</p>
            <p>Login</p>
            <p>Privacy</p>
          </Col>
          <Col xl="3" md="6">
            <h2>Cotact</h2>
            <p>
              <span>
                <i className="ri-map-pin-line"></i>
              </span>{" "}
              123 Egypt,Alexandria
            </p>
            <p>
              <span>
                <i className="ri-phone-line"></i>
              </span>{" "}
              +0881234568059
            </p>
            <p>
              <span>
                <i className="ri-mail-line"></i>
              </span>{" "}
              Login
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
