import React from 'react';
import ImgFooter from "../images/logo_horizontal.svg"
import Facebook from "../images/phone.svg"
import Telegram from "../images/telegram.svg"
import Instagram from "../images/insta.svg"
import Youtube from "../images/youtube.svg"
import {useTranslation} from "react-i18next";

function Footer() {
    const {t, i18n} = useTranslation();
    return (<div className="footer  xxl:w-[1640px] py-[45px] bg-[#333333]
    px-[42.5px] rounded-[17px]   mt-[124px]">
        <div className=" grid place-items-center  grid-cols-2  sm:grid-cols-3
        lg:grid-cols-3 cm:gap-[240px]">
            <a href="#" className="footer-logo">
                <img src={ImgFooter} alt="footer logo" className="footer-img-logo"/>
            </a>
            <ul className="footer-list  md:flex  sm:inline-block gap-4 sm:mt-4 mobile:hidden  ">
                <li className="text-white md:w-[80px]">{t("Nega biz")}</li>
                <li className="text-white">{t("Natijalar")}</li>
                <li className="text-white">{t("Kurslar")}</li>
                <li className="text-white" >{t("savollar")}</li>
            </ul>
            <ul className="footer-social-list relative lg:flex mobile:bottom-10 sm:bottom-[-7px]  sm:grid-cols-4 sm:mt-0 mobile:mt-[95px] mr-8 ">
                <li className="footer-item-socil lg:ml-5">
                    <img src={Facebook} className="social-logo-end" alt="socil logo"/>
                </li>
                <li className="footer-item-socil lg:ml-5">
                    <img src={Telegram} className="social-logo-end" alt="socil logo"/>
                </li>
                <li className="footer-item-socil lg:ml-5">
                    <img src={Instagram} className="social-logo-end" alt="socil logo"/>
                </li>
                <li className="footer-item-socil lg:ml-5">
                    <img src={Youtube} className="social-logo-end " alt="socil logo"/>
                </li>
            </ul>

        </div>
    </div>)
}

export default Footer;