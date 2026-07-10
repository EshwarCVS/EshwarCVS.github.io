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
  const [mode, setMode] = useLocalStorage("siteMode", "formal");
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => clearTimeout(splashTimer);
    }
  }, []);

  const changeMode = next => setMode(next === "fun" ? "fun" : "formal");

  useEffect(() => {
    document.documentElement.setAttribute("data-mode", mode);
    document.body.style.backgroundColor = "";
  }, [mode]);

  return (
    <div className={`portfolio-app mode-${mode}`} data-mode={mode}>
      <StyleProvider value={{isDark: mode === "fun", mode, changeMode}}>
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
