import React from "react";
import { ListGroupItem } from "reactstrap";
import styles from "./cartItems.module.css";
import imgchair from "../../../assets/images/arm-chair-01.jpg";
const CartItems = () => {
  return (
    <ListGroupItem className={`border-0 ${styles.cart__item}`}>
      <div className={`${styles["cart__item-info"]} d-flex gap-2`}>
        <img src={imgchair} alt="product-info" />
        <div
          className={`${styles["cart__product-info"]} d-flex align-items-center w-100 gap-4 justify-content-between`}
        >
          <div>
            <h6 className={styles["cart__product-title"]}>Chair</h6>
            <p
              className={`d-flex align-items-center gap-5 ${styles["cart__product-price"]}`}
            >
              2x <span>$40.00</span>
            </p>
            <div className={styles["cart__item-increase"]}>
              <span>
                <i className="ri-add-line"></i>
              </span>
              <span>2</span>
              <span>
                <i className="ri-subtract-line"></i>
              </span>
            </div>
          </div>
          <span className={styles.delete__btn}>
            <i className="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItems;
