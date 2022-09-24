import React from "react";
import { Col, Row, Container } from "reactstrap";
import styles from "./service.module.css";
import servicesData from "../assets/data/serviceData";
const Service = () => {
  return (
    <section className={styles.services}>
      <Container>
        <Row>
          {servicesData.map((item, index) => (
            <Col lg="3" md="6" key={index} className="mb-3 mb-lg-0">
              <div
                className={styles.services__item}
                style={{ background: item.bg }}
              >
                <span>
                  <i className={item.icon}></i>
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Service;
