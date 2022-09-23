import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Helmet from "../components/helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import { Link } from "react-router-dom";
import Service from "../services/Service";
import ProductList from "../components/ui/ProductList";
import AllProduct from "../assets/data/products";
import TimerCount from "../components/ui/TimerCounter/TimerCount";
const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  useEffect(() => {
    const filteredTrendProducts = AllProduct.filter(
      (item) => item.category === "chair"
    );
    const filteredBestProducts = AllProduct.filter(
      (item) => item.category === "sofa"
    );
    setTrendingProducts(filteredTrendProducts);
    setBestSalesProducts(filteredBestProducts);
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
      <section className={styles.trending__products}>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className={styles.best__sales}>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best Sales</h2>
            </Col>
            <ProductList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>
      <section className={styles.timer__count}>
        <TimerCount />
      </section>
    </Helmet>
  );
};

export default Home;
