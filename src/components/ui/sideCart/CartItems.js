import React from "react";
import { ListGroupItem } from "reactstrap";
import styles from "./cartItems.module.css";
import imgchair from "../../../assets/images/arm-chair-01.jpg";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../redux/slices/cartSlice";
const CartItems = ({ item }) => {
  const { id, productName, imgUrl, price, quantity, totalPrice } = item;
  const dispatch = useDispatch();
  const incrementItems = () => {
    dispatch(
      cartActions.addItems({
        id,
        productName,
        price,
        imgUrl,
      })
    );
  };
  const decrementItem = () => {
    dispatch(cartActions.removeItem(id));
  };
  const deleteItem = () => {
    dispatch(cartActions.delelteItem(id));
  };
  return (
    <ListGroupItem className={`border-0 ${styles.cart__item}`}>
      <div className={`${styles["cart__item-info"]} d-flex gap-2`}>
        <img src={imgUrl} alt="product-info" />
        <div
          className={`${styles["cart__product-info"]} d-flex align-items-center w-100 gap-4 justify-content-between`}
        >
          <div>
            <h6 className={styles["cart__product-title"]}>{productName}</h6>
            <p
              className={`d-flex align-items-center gap-5 ${styles["cart__product-price"]}`}
            >
              {quantity}x <span>${price}</span>
            </p>
            <div className={styles["cart__item-increase"]}>
              <span onClick={incrementItems}>
                <i className="ri-add-line"></i>
              </span>
              <span>{quantity}</span>
              <span onClick={decrementItem}>
                <i className="ri-subtract-line"></i>
              </span>
            </div>
          </div>
          <span className={styles.delete__btn} onClick={deleteItem}>
            <i className="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItems;
