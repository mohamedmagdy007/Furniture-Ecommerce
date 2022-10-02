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
  const [category, setCategory] = useState("all");
  const [layout, setLayout] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleFunc = useCallback(() => setOpen(!open), [open]);
  const [filter, setFilter] = useState(allProdcts);
  const [fallProducts, setFAllProducts] = useState(allProdcts);
  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  console.log(visitedPage);

  useEffect(() => {
    if (category === "all") {
      setFilter(allProdcts);
    }
    if (category === "sofa") {
      const fiteredProducts = allProdcts.filter(
        (item) => item.category === "sofa"
      );
      setFilter(fiteredProducts);
    }
    if (category === "chair") {
      const fiteredProducts = allProdcts.filter(
        (item) => item.category === "chair"
      );
      setFilter(fiteredProducts);
    }
    if (category === "mobile") {
      const fiteredProducts = allProdcts.filter(
        (item) => item.category === "mobile"
      );
      setFilter(fiteredProducts);
    }
    if (category === "watch") {
      const fiteredProducts = allProdcts.filter(
        (item) => item.category === "watch"
      );
      setFilter(fiteredProducts);
    }
    if (category === "wireless") {
      const fiteredProducts = allProdcts.filter(
        (item) => item.category === "wireless"
      );
      setFilter(fiteredProducts);
    }
  }, [category, allProdcts]);

  useEffect(() => {
    const displayPage = filter.slice(visitedPage, visitedPage + productPerPage);
    setFAllProducts(displayPage);
  }, [visitedPage, filter]);

  const pageCount = Math.ceil(filter.length / productPerPage);
  const changePage = ({ selected }) => {
    console.log("selected==>", selected);
    setPageNumber(selected);
  };

  const filterHandle = (e) => {
    setCategory(e.target.dataset.filter);
    setPageNumber(0);
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
                  <p
                    className={`${
                      category === "all" ? styles.btn__active : null
                    }`}
                    data-filter="all"
                    onClick={filterHandle}
                  >
                    All
                  </p>
                  <p
                    className={`${
                      category === "sofa" ? styles.btn__active : null
                    }`}
                    data-filter="sofa"
                    onClick={filterHandle}
                  >
                    Sofa
                  </p>
                  <p
                    className={`${
                      category === "chair" ? styles.btn__active : null
                    }`}
                    data-filter="chair"
                    onClick={filterHandle}
                  >
                    Chair
                  </p>
                  <p
                    className={`${
                      category === "mobile" ? styles.btn__active : null
                    }`}
                    data-filter="mobile"
                    onClick={filterHandle}
                  >
                    Mobile
                  </p>
                  <p
                    className={`${
                      category === "watch" ? styles.btn__active : null
                    }`}
                    data-filter="watch"
                    onClick={filterHandle}
                  >
                    Watch
                  </p>
                  <p
                    className={`${
                      category === "wireless" ? styles.btn__active : null
                    }`}
                    data-filter="wireless"
                    onClick={filterHandle}
                  >
                    Wireless
                  </p>
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
              <p>{fallProducts.length} Products Found</p>
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
            <Row>
              <ProductList data={fallProducts} layout={layout} />
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
