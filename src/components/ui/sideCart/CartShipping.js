import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";
import CartItems from "./CartItems";
import styles from "./cartItems.module.css";
const CartShipping = () => {
  return (
    <div className={styles["cart__container"]}>
      <ListGroup className={styles.cart}>
        <div className={styles.cart__close}>
          <span>
            <i className="ri-close-fill"></i>
          </span>
        </div>
        <div className={styles["cart__item-list"]}>
          <CartItems />
        </div>
        <div className={styles.cart__bottom}>
          <h6>
            subtotal amount: <span>$123</span>
          </h6>
          <button>
            <Link to="/checkout">Chechout</Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default CartShipping;
