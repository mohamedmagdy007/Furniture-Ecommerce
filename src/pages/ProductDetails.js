import React, { useState } from "react";
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
  const [tab, setTab] = useState("desc");
  const { id } = useParams();
  const product = AllProduct.find((items) => items.id === id);

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
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
      <section>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={styles.tab__wrapper}>
                <h6
                  className={`${tab === "desc" ? `${styles.active__tab}` : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? `${styles.active__tab}` : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>
              {tab === "desc" ? (
                <div className={`${styles.tab__content} mt-4`}>
                  <p>{description}</p>
                </div>
              ) : (
                <div className={`${styles.product__review} mt-4`}>
                  <ul>
                    {reviews.map((item) => (
                      <li>
                        <span>
                          {item.rating} {"(arerage rating)"}
                        </span>
                        <p>{item.text}</p>
                      </li>
                    ))}
                  </ul>
                  <div className={styles.review__form}>
                    <form>
                      <h4>Leave your experience</h4>
                      <div className={styles.form__group}>
                        <input type="text" placeholder="Enter name" />
                      </div>
                      <div className={`${styles.form__group} d-flex gap-3`}>
                        <span>
                          1 <i className="ri-star-s-fill"></i>
                        </span>
                        <span>
                          2 <i className="ri-star-s-fill"></i>
                        </span>
                        <span>
                          3 <i className="ri-star-s-fill"></i>
                        </span>
                        <span>
                          4 <i className="ri-star-s-fill"></i>
                        </span>
                        <span>
                          5 <i className="ri-star-s-fill"></i>
                        </span>
                      </div>
                      <div className={styles.form__group}>
                        <textarea rows={4} type="text" placeholder="Review Message.." />
                      </div>
                      <button className={`${styles.buy__btn}`}>Submit</button>
                    </form>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
