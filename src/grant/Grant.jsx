import React from "react";
import {useTranslation} from "react-i18next";
import  Grantfoto from "../images/gks.png"
import  "./grant.css"
function Grant() {
    const { t } = useTranslation(); // Tarjima funksiyasi

    return (
        <div className="grant mb-[132px]">
            <h2 className="foryou-title grant-activ-title">{t("grant")}</h2>
            <div className="grant-wrap">
                <img src={Grantfoto} alt="grant section foto" className="grant-img"/>
                <div className="grant-innerWrap">
                    <h3 className="grant-title text-[22px] mb-5">{t("granttitle")}</h3>
                    <p className="grant-text text-[18px] mb-8 w-[450px]">{t("granttext")}</p>
                    <h3 className="grant-innertitle text-[24px] mb-8">{t("innertitle")}</h3>
                    <ul className="grant-list">
                        <li className="grant-item text-[18px] w-[450px]">{t("grantdescone")}</li>
                        <li className="grant-item text-[18px] w-[450px]">{t("grantdesctwo")}</li>
                        <li className="grant-item text-[18px] w-[470px]">{t("grantdescthree")}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Grant;