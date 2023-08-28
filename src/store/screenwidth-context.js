import React, { useEffect, useState } from "react";
const ScreenWidthContext = React.createContext({
  screenWidth: window.innerWidth,
  setScreenWidth: () => {},
});

export const ScreenWidthContextProvider = (props) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    // Add an event listener to listen for window resize events
    window.addEventListener("resize", handleResize);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ScreenWidthContext.Provider
      value={{
        screenWidth,
      }}
    >
      {props.children}
    </ScreenWidthContext.Provider>
  );
};
export default ScreenWidthContext;
