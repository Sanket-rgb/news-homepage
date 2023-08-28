import React from "react";
import classes from "../Styles/Components/Component3.module.scss";

function Component3() {
  return (
    <article className={classes["article"]}>
      <div className={classes["list-item"]}>
        <div className={classes["image-container"]}>
          <img src="/assets/images/image-retro-pcs.jpg" alt="retro-pc" />
        </div>
        <div className={classes["item-details"]}>
          <h1>01</h1>
          <h4>Reviving Retro PCs</h4>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className={classes["list-item"]}>
        <div className={classes["image-container"]}>
          <img src="/assets/images/image-top-laptops.jpg" alt="laptop" />
        </div>
        <div className={classes["item-details"]}>
          <h1>02</h1>
          <h4>Top 10 Laptops of 2022</h4>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>
      <div className={classes["list-item"]}>
        <div className={classes["image-container"]}>
          <img src="/assets/images/image-gaming-growth.jpg" alt="gaming" />
        </div>
        <div className={classes["item-details"]}>
          <h1>03</h1>
          <h4>The Growth of Gaming</h4>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </article>
  );
}

export default Component3;
