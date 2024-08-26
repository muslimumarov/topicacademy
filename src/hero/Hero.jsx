import {useTranslation} from "react-i18next";
import "./hero.css"

function Hero () {
  const {t, i18n} = useTranslation();

  return (
    <div className="hero">
    <span className="hero-span">{t("hero-span")}</span>
    <div className="hero-wrap">
    <h1 className="hero-title">{t("hero-title")}</h1>
    </div>
    <div className="hero-textbigwrap">
    <div className="hero-texwrapone">
    <p className="hero-text">{t("hero-text")}</p>
    </div>
    <div className="hero-textwrapfirs">
    <p className="hero-text">{t("hero-text2")}</p>
    </div>
    </div>
    <button className="hero-button">{t("hero-button")}</button>
    <span className="hero-endspan">{t("hero-span2")}</span>
    </div>
    )
  }
  export default Hero;