import React from "react";
import { useSelector } from "react-redux";
import Routers from "../../routers/Routers";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import CartShipping from "../ui/sideCart/CartShipping";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <>
      <Header />
      {showCart && <CartShipping />}
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
