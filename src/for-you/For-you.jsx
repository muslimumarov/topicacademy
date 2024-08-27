import React from 'react';
import {useTranslation} from "react-i18next";
import  "./for-you.css"
import ForYouone from "../images/reklama1.png"
import ForYoutwo from "../images/reklama2.png"
import ForYouthree from "../images/reklama3.png"
import ForYoufour from "../images/reklama4.png"
import ForYoufife from "../images/reklama5.png"
import ForYousix from "../images/reklama6.png"
import {Button, Flex} from "antd";

function ForYou () {
    const {t, i18n} = useTranslation();

    return   (
        <div className="foryou">
            <h2 className="foryou-title">{t("fortitle")}</h2>
            <ul className="foryou-list">
                <li className="foryou-list-item">
                    <img src={ForYouone} className="foryou-img" alt="testign img"/>
                    <div className="foryou-desc">{t("lione")}</div>
                </li>
                <li className="foryou-list-item">
                    <img src={ForYoutwo} className="foryou-img" alt="testign img"/>
                    <div className="foryou-desc">{t("litwo")}</div>
                </li>
                <li className="foryou-list-item">
                    <img src={ForYouthree} className="foryou-img" alt="testign img"/>
                    <div className="foryou-desc">{t("lithree")}</div>
                </li>
                <li className="foryou-list-item">
                    <img src={ForYoufour} className="foryou-img" alt="testign img"/>
                    <div className="foryou-desc">{t("lifoo")}</div>
                </li>
                <li className="foryou-list-item">
                    <img src={ForYoufife} className="foryou-img" alt="testign img"/>
                    <div className="foryou-desc">{t("lifife")}</div>
                </li>
                <li className="foryou-list-item">
                    <img src={ForYousix} className="foryou-img" alt="testign img" />
                    <div className="foryou-desc">{t("lisix")}</div>
                </li>
            </ul>

                <Button className="text-white foryou-button bg-emerald-700 w-[322px] h-[80px] rounded-[50px] text-[19px] font-[700] " type="primary"  >
                    {t("foryoubutton")}
                </Button>

        </div>
    )

}

export default ForYou;