import React from "react";
import { Container } from "reactstrap";
import styles from "./CommonSection.module.css";

export const CommonSection = (props) => {
  return (
    <section className={styles.common__section}>
      <Container>
        <h2 className="text-white text-center ">{props.title}</h2>
      </Container>
    </section>
  );
};
