import React from "react";
import Component1 from "../components/Component1";
import Component2 from "../components/Component2";
import Component3 from "../components/Component3";
import classes from "../Styles/HomePage/HomePage.module.scss";

function HomePage() {
  return (
    <section className={classes["section"]}>
      <article className={classes["article"]}>
        <Component1 />
        <Component2 />
      </article>
      <Component3 />
    </section>
  );
}

export default HomePage;
