import React from "react";
import styles from "../styles/Cart.module.css";
import Helmet from "../components/helmet/Helmet";
import { CommonSection } from "../components/ui/common-section/CommonSection";
import { Col, Container, Row } from "reactstrap";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Cart = () => {
  const cartitems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title={"cart"}>
      <CommonSection title="shopping cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartitems.length === 0 ? (
                <h2 className="text-center fs-3">No item added to the cart</h2>
              ) : (
                <div className={styles.table__responsive}>
                  <table className={`${styles.table} table bordered`}>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartitems.map((item) => (
                        <Tr item={item} key={item.id} />
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </Col>
            <Col lg="3">
              <div className="d-flex align-items-center justify-content-between">
                <h6>Subtotal</h6>
                <span className="fs-4 fw-bold">${totalAmount}</span>
              </div>
              <p className="fs-6">
                taxes and shipping will calculate in checkout
              </p>
              <div className="">
                <button className={`${styles.buy__btn} w-100`}>
                  <Link to="/shop">Continue Shopping</Link>
                </button>
                <button className={`${styles.buy__btn} w-100 ${cartitems.length === 0 ? styles.btn_disable : null}`}  disabled={cartitems.length === 0 ? true : false}>
                  <Link to="/checkout">Checkout</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.delelteItem(item.id));
  };
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt={item.productName} />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}px</td>
      <td onClick={deleteProduct}>
        <i className="ri-delete-bin-line"></i>
      </td>
    </tr>
  );
};
export default Cart;
