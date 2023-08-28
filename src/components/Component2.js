import React from "react";
import classes from "../Styles/Components/Component2.module.scss";

function Component2() {
  return (
    <article className={classes["article"]}>
      <h1>New</h1>
      <div className={classes["list-item"]}>
        <h2>Hydrogen VS Electric Cars</h2>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
      </div>
      <div className={classes["list-item"]}>
        <h2>The Downsides of AI Artistry</h2>
        <p>
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>
      <div className={classes["list-item"]}>
        <h2>Is VC Funding Drying Up?</h2>
        <p>
          Priave funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </article>
  );
}

export default Component2;
