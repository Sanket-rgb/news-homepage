import React, { useContext, useEffect, useState } from "react";
import ScreenWidthContext from "../store/screenwidth-context";
import classes from "../Styles/Components/MainNavigation.module.scss";
import Navbar from "./Header/Navbar";

function MainNavigation() {
  const { screenWidth } = useContext(ScreenWidthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (screenWidth > 420) {
      setIsMobileMenuOpen(false);
    }
  }, [screenWidth]);

  const overlayClass = `${classes["overlay"]} ${
    classes[isMobileMenuOpen ? "active" : ""]
  }`;

  return (
    <header className={classes["header"]}>
      <div className={classes["logo-container"]}>
        <img src="/assets/images/logo.svg" alt="logo" />
      </div>
      <nav className={classes["desktop_menu"]}>
        <Navbar />
      </nav>
      {!isMobileMenuOpen && (
        <div className={classes["mobile-menu-icon"]} onClick={toggleMobileMenu}>
          <img src="/assets/images/icon-menu.svg" alt="menu" />
        </div>
      )}
      {isMobileMenuOpen && (
        <div className={classes["mobile-menu"]}>
          <div className={classes["close-button"]} onClick={toggleMobileMenu}>
            <img src="/assets/images/icon-menu-close.svg" alt="close_menu" />
          </div>
          <Navbar className={classes["menu-list"]} />
        </div>
      )}
      {isMobileMenuOpen && <div className={overlayClass} />}
    </header>
  );
}

export default MainNavigation;
