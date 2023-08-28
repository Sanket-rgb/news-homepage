import React, { useContext } from "react";
import ScreenWidthContext from "../store/screenwidth-context";
import classes from "../Styles/Components/Component1.module.scss";
function Component1() {
  const { screenWidth } = useContext(ScreenWidthContext);

  const desktopImage = "/assets/images/image-web-3-desktop.jpg";
  const mobileImage = "/assets/images/image-web-3-mobile.jpg";

  const imageSrc = screenWidth <= 420 ? mobileImage : desktopImage;

  return (
    <article className={classes["article"]}>
      <div className={classes["image-container"]}>
        <img src={imageSrc} alt="article-icon" />
      </div>
      <div className={classes["component-1-description"]}>
        <h1>The Bright Future of Web 3.0?</h1>
        <div>
          <p>
            We dive into the next evolution of the web that claims to put the
            platforms back into the hands of the people. But is it really
            fulfilling its promise?
          </p>
          <button>read more</button>
        </div>
      </div>
    </article>
  );
}

export default Component1;
