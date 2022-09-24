import React from "react";
import { Col, Container, Row } from "reactstrap";
import ProductList from "./ProductList";
const SectionsCategories = ({ title, data, secondData }) => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="section__title">{title}</h2>
          </Col>
          <ProductList data={data} />
          {secondData && <ProductList data={secondData} />}
        </Row>
      </Container>
    </section>
  );
};

export default SectionsCategories;
