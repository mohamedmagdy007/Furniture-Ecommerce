import React, { useRef } from "react";
import styles from "./header.module.css";
import { NavLink } from "react-router-dom";
import { Container, Row } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import person from "../../assets/images/user-icon.png";
import { useSelector } from "react-redux";
const Nav__link = [
  { path: "/home", display: "Home" },
  { path: "/shop", display: "Shop" },
  { path: "/cart", display: "Cart" },
];

const Header = () => {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle(styles.show__menu);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className={styles.header}>
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
              ref={menuRef}
              onClick={toggleMenu}
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
              <span className={styles.cart__icon}>
                <i className="ri-shopping-bag-line"></i>
                <span className={styles.badge}>{totalQuantity}</span>
              </span>
              <span>
                <img src={person} alt="user" />
              </span>
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
