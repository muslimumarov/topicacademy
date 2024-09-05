import {useTranslation} from "react-i18next";
import React from "react";
import Translate from "../translate/Translate";
import './header.css';
import Logo from '../images/logo.png';
import NavbarResponsiv from "./NavbarResponsiv";

function Header() {
    const {t, i18n} = useTranslation();
    return (
    <div className="header">
        <div className="header-wrapper">
            <a href="#">
                <img className='header-img-logo rounded-md'   src={Logo} alt="topic logo"/>
            </a>
            <div className="header-innerWrapper position-relative flex mt-3 items-center ">
                <span  className="header-span">{t("logo-text")}</span>
                <nav className="header-nav navbar">
                    <ul className="navbar-list">
                        <li className="nav-item">{t("Nega biz")}</li>
                        <li className="nav-item">{t("Natijalar")}</li>
                        <li className="nav-item">{t("Kurslar")}</li>
                        <li className="nav-item">{t("Ko’p beriladigan savollar")}</li>
                    </ul>
                </nav>
                <a href="+998 (33) 306 0098" className="header-contact"><span className='contact-span font-semibold'>+998 (33) 306 0098</span>
                    {t("Hoziroq bog'\nlaning")}</a>
                <NavbarResponsiv />
                  <Translate/>
            </div>

        </div>

    </div>
    );
}

export default Header;
