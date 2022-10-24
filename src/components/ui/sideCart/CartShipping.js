import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";
import CartItems from "./CartItems";
import styles from "./cartItems.module.css";
import { cartUiActions } from "../../../redux/slices/cartUiShopping";
const CartShipping = () => {
  const cartitems = useSelector((state) => state.cart.cartItems);
  console.log(cartitems);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(cartUiActions.toggle());
  };
  return (
    <div className={styles["cart__container"]}>
      <ListGroup className={styles.cart}>
        <div className={styles.cart__close} onClick={toggle}>
          <span>
            <i className="ri-close-fill"></i>
          </span>
        </div>
        <div className={styles["cart__item-list"]}>
          {cartitems.length === 0 ? (
            <h6 className="text-center mt-5">No item added ti the cart</h6>
          ) : (
            cartitems.map((item) => <CartItems item={item} key={item.id} />)
          )}
        </div>
        <div className={styles.cart__bottom}>
          <h6>
            subtotal amount: <span>$123</span>
          </h6>
          <button
            className={`${cartitems.length === 0 ? styles.btn_disable : null}`}
            disabled={cartitems.length === 0 ? true : false}
          >
            <Link to="/checkout">Checkout</Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default CartShipping;
