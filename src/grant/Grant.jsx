import React from "react";
import {useTranslation} from "react-i18next";
import Grantfoto from "../images/gks.png"
import "./grant.css"

function Grant() {
    const {t} = useTranslation(); // Tarjima funksiyasi

    return (
            <div className="grant mb-[132px]">
            <h2 className="foryou-title  xl:text-[45px]  mx-auto my-0 xl:w-[900px] grant-activ-title">{t("grant")}</h2>
            <div className=" grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 my-40 lg:grid-cols-3 gap-4 ">
                <img src={Grantfoto}  alt="grant-section-foto" className="grant-img inline-block md:w-[600px] mobile:ml-[-17px] "/>
                    <div className="grant-activ-topwrap">
                        <h3 className="grant-title text-[22px] mb-5">{t("granttitle")}</h3>
                        <p className="grant-text  text-[18px] mb-8  ">{t("granttext")}</p>
                    </div>
                    <div className="md:w-full col-span-2 lg:col-auto">
                        <h3 className="grant-innertitle  text-[24px]  mb-8">{t("innertitle")}</h3>
                        <ul className="grant-list">
                            <li className="grant-item   text-[18px] ">{t("grantdescone")}</li>
                            <li className="grant-item  text-[18px] ">{t("grantdesctwo")}</li>
                            <li className="grant-item  text-[18px] ">{t("grantdescthree")}</li>
                        </ul>
                    </div>
                </div>
            <div className="grant-video">
                <iframe className=" h-[550px]  p-3 rounded-[20px] text-[32px] mx-auto
                            w-full   sm:w-[650px, mr-[30]] md:w-[768px, mr-[30]] lg:w-[995px, mr-[30]] xl:w-[1170px, mr-[30]] "
                        src="https://www.youtube.com/embed/nKyvYnzIDgI?si=6JJeSV5HDG63VvKr"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"></iframe>
            </div>
            <div
                className="grant-alert  p-5 bg-custom-gray text-center text-white rounded-[5px] text-[26px] bg-custom-gray    aligin-center  bg-black ">
                {t("vedeoDedsc")}
            </div>
        </div>
    )
}

export default Grant;