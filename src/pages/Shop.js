import React, { useEffect, useState, useCallback } from "react";
import { Container, Row, Collapse } from "reactstrap";
import Helmet from "../components/helmet/Helmet";
import { CommonSection } from "../components/ui/common-section/CommonSection";
import ProductList from "../components/ui/ProductList";
import styles from "../styles/Shop.module.css";
import AllProduct from "../assets/data/products";
import ReactPaginate from "react-paginate";
const Shop = () => {
  const [allProdcts, setAllProdcts] = useState(AllProduct);
  const [layout, setLayout] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleFunc = useCallback(() => setOpen(!open));
  const [FallProducts, setFAllProducts] = useState(allProdcts);
  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;

  useEffect(() => {
    const displayPage = AllProduct.slice(
      visitedPage,
      visitedPage + productPerPage
    );
    setFAllProducts(displayPage);
  }, [visitedPage]);

  const pageCount = Math.ceil(AllProduct.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <Helmet title={"Shop"}>
      <CommonSection title="Shop" />
      <Container>
        <div className={styles.grid__layout}>
          <div className={styles.sideBar}>
            <div className={styles.content}>
              <input type="text" placeholder="Search" />
              <div>
                <button className={styles.h2} onClick={toggleFunc}>
                  <span>Category</span>
                  <i className="ri-arrow-down-s-fill"></i>
                </button>
                <div className={open === true ? "d-bock" : "d-none"}>
                  <p>All</p>
                  <p>Sofa</p>
                  <p>Chair</p>
                  <p>Mobile</p>
                  <p>Watch</p>
                  <p>Wireless</p>
                </div>
              </div>
              <div>
                <h2>Price</h2>
                <p>$3,0000.99</p>
                <input type="range" name="range" id="range" max={799} />
              </div>
              <button className={styles.filter__btn}>Clear Filter</button>
            </div>
          </div>
          <div className="mt-4 mt-lg-0">
            <div
              className={`d-flex align-items-center justify-content-between gap-2 ${styles.layout__nav}`}
            >
              <div className={styles.layout__btns}>
                <button
                  onClick={() => setLayout(false)}
                  className={`${layout === false ? `${styles.active}` : null}`}
                >
                  <i className="ri-layout-grid-fill"></i>
                </button>
                <button
                  onClick={() => setLayout(true)}
                  className={`${layout === true ? `${styles.active}` : null}`}
                >
                  <i className="ri-align-justify"></i>
                </button>
              </div>
              <p>{FallProducts.length} Products Found</p>
              <div className={styles.line}></div>
              <div className="d-flex flex-wrap">
                <span className="me-1">Sort By</span>
                <select name="sort" id="sort" className={styles.sort}>
                  <option value="price-lowest">price (lowest)</option>
                  <option value="price-highest">price (highest)</option>
                  <option value="name-a">price (A - z)</option>
                  <option value="name-a">price (Z - a)</option>
                </select>
              </div>
            </div>
            <Row className="justify-content-center">
              <ProductList data={FallProducts} layout={layout} />
            </Row>
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={changePage}
              previousLabel="Prev"
              nextLabel="Next"
              containerClassName="paginationBttns"
            />
          </div>
        </div>
      </Container>
    </Helmet>
  );
};

export default Shop;
