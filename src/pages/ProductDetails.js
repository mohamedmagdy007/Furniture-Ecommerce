import React from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/Details.module.css";
import AllProduct from "../assets/data/products";
import { Col, Container, Row } from "reactstrap";
import { useDispatch } from "react-redux";
import Helmet from "../components/helmet/Helmet";
import { toast } from "react-toastify";
import { CommonSection } from "../components/ui/common-section/CommonSection";
import { cartActions } from "../redux/slices/cartSlice";
const ProductDetails = () => {
  const { id } = useParams();
  const product = AllProduct.find((items) => items.id === id);

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    review,
    description,
    shortDesc,
  } = product;
  const dispatch = useDispatch();
  const AddToCartHandler = () => {
    console.log("bjkbjbj");
    dispatch(
      cartActions.addItems({
        id: id,
        productName: productName,
        price: price,
        image: imgUrl,
      })
    );
    toast.success("Product added success");
  };
  return (
    <Helmet title={"Product-Details"}>
      <CommonSection title={productName} />
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt={productName} />
            </Col>
            <Col lg="6">
              <div className={styles.product__details}>
                <h2>{productName}</h2>
                <div className={styles.product__rating}>
                  <div>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-half-s-fill"></i>
                    </span>
                  </div>
                  <p>({avgRating}ratings)</p>
                </div>
                <span className={styles.product__price}>{price}</span>
                <p>{shortDesc}</p>
                <button className={styles.addToCart} onClick={AddToCartHandler}>
                  Add To Cart
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
