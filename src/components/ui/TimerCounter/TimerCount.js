import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import counterImg from "../../../assets/images/counter-timer-img.png";
import Clock from "./Clock";
import styles from "./timer.module.css";
const TimerCount = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col lg="6" md="6">
          <div className={styles["clock__top-content"]}>
            <h4 className="text-white fs-6 mb-3">Limited offers</h4>
            <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
          </div>
          <Clock />
          <button className={styles.buy__btn}>
            <Link to="/shop">Visit Store</Link>
          </button>
        </Col>
        <Col lg="6" md="6">
          <img src={counterImg} alt="timer" />
        </Col>
      </Row>
    </Container>
  );
};

export default TimerCount;
