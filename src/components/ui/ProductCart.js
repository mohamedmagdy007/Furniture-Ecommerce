import React from "react";
import styles from "./products.module.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";
const ProductCart = ({ item, layout }) => {
  const { id, productName, imgUrl, category, price, shortDesc } = item;
  const dispatch = useDispatch();
  const AddToCartHandler = () => {
    dispatch(
      cartActions.addItems({
        id: id,
        productName: productName,
        price: price,
        imgUrl: imgUrl,
      })
    );
    toast.success("Product added success");
  };
  return (
    <>
      {layout === false ? (
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
              <span onClick={AddToCartHandler}>
                <i className="ri-add-line"></i>
              </span>
            </div>
          </div>
        </Col>
      ) : (
        <Col lg="10" className="d-flex">
          <div
            className={`d-flex flex-row align-items-center ${styles.product__item} ${styles.layout__row}`}
          >
            <div className={styles.product__img}>
              <Link to={`/productDetails/${id}`}>
                <img src={imgUrl} alt={productName} className="img-fluid" />
              </Link>
            </div>
            <div className={`p-2 ${styles.product__info}`}>
              <h3 className={styles.product__name}>
                <Link to={`/productDetails/${id}`}>{productName}</Link>
              </h3>
              <span>{category}</span>
              <p>{shortDesc}</p>
              <div
                className={`${styles["Product__Cart-bottom"]} d-flex align-items-center justify-content-between`}
              >
                <span className={styles.price}>${price}</span>
                <span onClick={AddToCartHandler}>
                  <i className="ri-add-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Col>
      )}
    </>
  );
};

export default ProductCart;
