import React, { useEffect, useState, useCallback } from "react";
import { Container, Row } from "reactstrap";
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
  const [open, setOpen] = useState(true);
  const toggleFunc = useCallback(() => setOpen(!open), [open]);
  const [filter, setFilter] = useState(allProdcts);
  const [sort, setSort] = useState("");
  const [fallProducts, setFAllProducts] = useState(allProdcts);
  const [pageNumber, setPageNumber] = useState(0);
  const [range, setRange] = useState(1000);
  const [searchTerm, setSearchTerm] = useState("");
  const [rangeProduct, setRangeProduct] = useState([]);
  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
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

  let pageCount = Math.ceil(
    filter.length && rangeProduct.length / productPerPage
  );
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const filterHandle = (e) => {
    setCategory(e.target.dataset.filter);
    setPageNumber(0);
  };

  useEffect(() => {
    if (sort === "defualt") {
      setFAllProducts(
        (filter && rangeProduct).sort((a, b) => {
          const nameA = a.id;
          const nameB = b.id;
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        })
      );
    }
    if (sort === "name-a") {
      setFAllProducts(
        (filter && rangeProduct).sort((a, b) => {
          const nameA = a.productName.toUpperCase();
          const nameB = b.productName.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        })
      );
    }
    if (sort === "name-z") {
      setFAllProducts(
        (filter && rangeProduct).sort((a, b) => {
          const nameA = a.productName.toUpperCase();
          const nameB = b.productName.toUpperCase();
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
          return 0;
        })
      );
    }
    if (sort === "price-highest") {
      setFAllProducts(
        (filter && rangeProduct).sort((a, b) => b.price - a.price)
      );
    }
    if (sort === "price-lowest") {
      setFAllProducts(
        (filter && rangeProduct).sort((a, b) => a.price - b.price)
      );
    }
  }, [filter, sort, rangeProduct]);

  useEffect(() => {
    const fiteredProducts = filter.filter((item) => item.price <= range);
    setRangeProduct(fiteredProducts);
  }, [range, filter]);

  useEffect(() => {
    const fiteredProducts = filter.filter((item) => {
      if (searchTerm === "") return item;
      if (item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
        return item;
    });
    setRangeProduct(fiteredProducts);
  }, [searchTerm, filter]);

  useEffect(() => {
    const displayPage =
      filter.slice(visitedPage, visitedPage + productPerPage) &&
      rangeProduct.slice(visitedPage, visitedPage + productPerPage);
    setFAllProducts(displayPage);
  }, [visitedPage, filter, sort, rangeProduct]);
  
  const clearFilterHandler = () => {
    setCategory("all");
    setFilter(allProdcts);
    setSort("defualt");
    document.querySelector("#sort").selectedIndex = 0;
    setRange(1000);
    setSearchTerm("");
  };

  return (
    <Helmet title={"Shop"}>
      <CommonSection title="Shop" />
      <Container>
        <div className={styles.grid__layout}>
          <div className={styles.sideBar}>
            <div className={styles.content}>
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
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
                <p>${range}</p>
                <input
                  type="range"
                  name="range"
                  id="range"
                  value={range}
                  max={1000}
                  onChange={(e) => setRange(e.target.value)}
                />
              </div>
              <button
                className={styles.filter__btn}
                onClick={clearFilterHandler}
              >
                Clear Filter
              </button>
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
              <p>
                {category === "all" ? allProdcts.length : fallProducts.length}{" "}
                Products Found
              </p>
              <div className={styles.line}></div>
              <div className="d-flex flex-wrap">
                <span className="me-1">Sort By</span>
                <select
                  name="sort"
                  id="sort"
                  className={styles.sort}
                  onChange={(e) => setSort(e.target.value)}
                >
                  <option value="defualt">Defualt</option>
                  <option value="price-lowest">price (lowest)</option>
                  <option value="price-highest">price (highest)</option>
                  <option value="name-a">price (A - z)</option>
                  <option value="name-z">price (Z - a)</option>
                </select>
              </div>
            </div>
            {fallProducts.length === 0 ? (
              <p style={{ fontWeight: 600 }}>
                Sorry, no products matched your search.
              </p>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </Container>
    </Helmet>
  );
};

export default Shop;
