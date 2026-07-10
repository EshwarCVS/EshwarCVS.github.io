import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Contact from "./contact/Contact";
import ScrollToTopButton from "./topbutton/Top";
import DynamicPortfolio from "./dynamic/DynamicPortfolio";
import SplashScreen from "./splashScreen/SplashScreen";
import {SiteDataProvider} from "../contexts/SiteDataContext";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import {splashScreen} from "../portfolio";
import "./Main.scss";

const Main = () => {
  const [isDark, setIsDark] = useLocalStorage("isDark", true);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => clearTimeout(splashTimer);
    }
  }, []);

  const changeTheme = () => setIsDark(!isDark);

  return (
    <div className={isDark ? "dark-mode portfolio-app" : "portfolio-app"}>
      <StyleProvider value={{isDark, changeTheme}}>
        <SiteDataProvider>
          {isShowingSplashAnimation && splashScreen.enabled ? (
            <SplashScreen />
          ) : (
            <>
              <Header />
              <DynamicPortfolio />
              <Contact />
              <Footer />
              <ScrollToTopButton />
            </>
          )}
        </SiteDataProvider>
      </StyleProvider>
    </div>
  );
};

export default Main;
