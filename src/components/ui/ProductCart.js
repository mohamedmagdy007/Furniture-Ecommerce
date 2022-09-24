import React from "react";
import styles from "./products.module.css";
import productImg from "../../assets/images/arm-chair-01.jpg";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
const ProductCart = ({ item }) => {
  const { id, productName, imgUrl, category, price } = item;
  return (
    <Col lg="3" md="4" sm="6">
      <div className={styles.product__item}>
        <div className={styles.product__img}>
          <Link to={`/productDetails/${id}`}>
            <img src={imgUrl} alt={productName} />
          </Link>
        </div>
        <div className={`p-2 ${styles.product__info}`}>
          <h3 className={styles.product__name}>
            <Link to={`/productDetails/${id}`}>{productName}</Link>
          </h3>
          <span>{category}</span>
        </div>
        <div
          className={`${styles["Product__Cart-bottom"]} d-flex align-items-center justify-content-between`}
        >
          <span className={styles.price}>${price}</span>
          <span>
            <i className="ri-add-line"></i>
          </span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCart;
