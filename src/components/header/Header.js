import React, { useRef } from "react";
import styles from "./header.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Container, Row } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import person from "../../assets/images/user-icon.png";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";
import { cartUiActions } from "../../redux/slices/cartUiShopping";
const Nav__link = [
  { path: "/home", display: "Home" },
  { path: "/shop", display: "Shop" },
  { path: "/cart", display: "Cart" },
];

const Header = () => {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle(styles.show__menu);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const profileActions = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  const { currentUser } = useAuth();

  const togglesprofileActions = () => {
    profileActions.current.classList.toggle(`${styles.show__profileActions}`);
  };
  const logOut = (e) => {
    e.stopPropagation();
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <header className={`${styles.header} ${styles.sticky}`}>
      <Container>
        <Row>
          <div className={styles.nav__wrapper}>
            <div className={styles.logo}>
              <img src={logo} alt="logo" />
              <div>
                <h1>Multimart</h1>
              </div>
            </div>
            <div
              className={styles.navigation}
              onClick={toggleMenu}
              ref={menuRef}
            >
              <ul className={styles.menu}>
                {Nav__link.map((item, index) => (
                  <li className={styles.nav__item} key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? `${styles.nav__active}` : null
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.nav__icons}>
              <span className={styles.fav__icon}>
                <i className="ri-heart-line"></i>
                <span className={styles.badge}>1</span>
              </span>
              <span className={styles.cart__icon} onClick={toggleCart}>
                <i className="ri-shopping-bag-line"></i>
                <span className={styles.badge}>{totalQuantity}</span>
              </span>
              <div className={styles.profile}>
                <img
                  src={currentUser ? currentUser.photoURL : person}
                  alt="user"
                  onClick={togglesprofileActions}
                />
                <div
                  className={styles.profile__actions}
                  ref={profileActions}
                  onClick={togglesprofileActions}
                >
                  {currentUser ? (
                    <div onClick={logOut} style={{ cursor: "pointer" }}>
                      logout
                    </div>
                  ) : (
                    <div className="d-flex flex-column">
                      <Link to="/signup">SignUp</Link>
                      <Link to="/login">LogIn</Link>
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.mobile__menu} onClick={toggleMenu}>
                <span>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
