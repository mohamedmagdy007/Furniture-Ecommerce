import React from "react";
import styles from "../styles/Checkout.module.css";
import Helmet from "../components/helmet/Helmet";
import { CommonSection } from "../components/ui/common-section/CommonSection";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import { useSelector } from "react-redux";
const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className={styles.billing__form}>
                <FormGroup className={styles.form__group}>
                  <input type="text" placeholder="Enter your name" />
                </FormGroup>
                <FormGroup className={styles.form__group}>
                  <input type="email" placeholder="Enter your email" />
                </FormGroup>
                <FormGroup className={styles.form__group}>
                  <input type="number" placeholder="Phone number" />
                </FormGroup>
                <FormGroup className={styles.form__group}>
                  <input type="text" placeholder="Street address" />
                </FormGroup>
                <FormGroup className={styles.form__group}>
                  <input type="text" placeholder="City" />
                </FormGroup>
                <FormGroup className={styles.form__group}>
                  <input type="text" placeholder="Postal code" />
                </FormGroup>
                <FormGroup className={styles.form__group}>
                  <input type="text" placeholder="Country" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className={styles.checkout__cart}>
                <h6>
                  Total Qty: <span>{totalQty}</span>
                </h6>
                <h6>
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6>
                  Shipping: <br />
                  Free shipping
                   <span>$0</span>
                </h6>
              
                <h4>
                  Total cost: <span>${totalQty * totalAmount}</span>
                </h4>
                <button className={`${styles.buy__btn} auth__btn w-100`}>
                  Place an order
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
