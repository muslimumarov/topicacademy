import React from "react";
import {useTranslation} from "react-i18next";
import Grantfoto from "../images/gks.png"
import "./grant.css"

function Grant() {
    const {t} = useTranslation(); // Tarjima funksiyasi

    return (<div className="grant mb-[132px]">
        <h2 className="foryou-title grant-activ-title">{t("grant")}</h2>
        <div className="grant-wrap">
            <img src={Grantfoto} alt="grant section foto" className="grant-img mx-auto
                w-full sm:w-[786px] lg:w-[1200px]"/>
            <div className="grant-innerWrap mb-32">
                <h3 className="grant-title text-[22px] mb-5">{t("granttitle")}</h3>
                <p className="grant-text  text-[18px] mb-8 w-[450px]">{t("granttext")}</p>
                <h3 className="grant-innertitle text-[24px] mb-8">{t("innertitle")}</h3>
                <ul className="grant-list">
                    <li className="grant-item  text-[18px] w-[450px]">{t("grantdescone")}</li>
                    <li className="grant-item  text-[18px] w-[450px]">{t("grantdesctwo")}</li>
                    <li className="grant-item  text-[18px] w-[470px]">{t("grantdescthree")}</li>
                </ul>
            </div>
        </div>
        <div className="grant-video">
            <iframe className=" h-[550px] grant-alert p-3 bg-custom-gray text-center text-white rounded-[5px] text-[32px] mx-auto
                        w-full   sm:w-[650px] lg:w-[995px] "
                    src="https://www.youtube.com/embed/nKyvYnzIDgI?si=6JJeSV5HDG63VvKr"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className="grant-alert  lg:h-[120px] p-5 bg-custom-gray text-center text-white rounded-[5px] text-[32px] mx-auto
           w-full sm:w-[630px] lg:w-[995px]    grant-alert  bg-custom-gray    aligin-center  bg-black ">
            {t("vedeoDedsc")}
        </div>
    </div>)
}

export default Grant;