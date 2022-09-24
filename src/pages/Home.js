import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Helmet from "../components/helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import { Link } from "react-router-dom";
import Service from "../services/Service";
import AllProduct from "../assets/data/products";
import TimerCount from "../components/ui/TimerCounter/TimerCount";
import SectionsCategories from "../components/ui/SectionsCategories";
const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  useEffect(() => {
    const filteredTrendProducts = AllProduct.filter(
      (item) => item.category === "chair"
    );
    const filteredBestProducts = AllProduct.filter(
      (item) => item.category === "sofa"
    );
    const filteredMobileProducts = AllProduct.filter(
      (item) => item.category === "mobile"
    );
    const filteredWirelessProducts = AllProduct.filter(
      (item) => item.category === "wireless"
    );
    const filteredPopularProducts = AllProduct.filter(
      (item) => item.category === "watch"
    );
    setTrendingProducts(filteredTrendProducts);
    setBestSalesProducts(filteredBestProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);
  const year = new Date().getFullYear();
  return (
    <Helmet title={"Home"}>
      <section className={styles.hero__section}>
        <Container>
          <Row className="align-items-center">
            <Col lg="6" md="6">
              <div className={styles.hero__content}>
                <p className={styles.hero__subtitle}>
                  Trending product in {year}
                </p>
                <h2>Make Your Interior More Minimalistic & modern</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus asperiores maiores tempore soluta, nobis totam cumque
                  inventore reprehenderit velit eum quam iure error tenetur,
                  assumenda voluptas deleniti illo harum facilis.
                </p>
                <button className={styles.buy__btn}>
                  <Link to="/shop">SHOP NOW</Link>
                </button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <img src={heroImg} alt="heroimg" />
            </Col>
          </Row>
        </Container>
      </section>
      <Service />
      <SectionsCategories data={trendingProducts} title="Trending Products" />
      <SectionsCategories data={bestSalesProducts} title="Best Sales" />
      <section className={styles.timer__count}>
        <TimerCount />
      </section>
      <SectionsCategories
        data={mobileProducts}
        secondData={wirelessProducts}
        title="New Arrivals"
      />
      <SectionsCategories data={popularProducts} title="Popular in Category" />
    </Helmet>
  );
};

export default Home;
