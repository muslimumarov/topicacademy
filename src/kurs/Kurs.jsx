import React from "react";
import "./kurs.css";
import { useTranslation } from "react-i18next";
import Kurs1 from  "../images/kurs1.png"
import Kurs2 from "../images/kurs2.png";
import Kurs3 from "../images/kurs3.png";
import Card from "./card";

function Kurs() {
    const { t } = useTranslation();

    return (
        <div className="kurs mb-32">
            <h2 className="foryou-title">{t("kurs-title")}</h2>
            <ul className="kurs-list">
                <li className="kurs-item">
                    <Card
                        img={Kurs1}
                        span={t("kurs1-span")} // Matnni tarjima qilish
                        button={t("kurs1-button")} // Matnni tarjima qilish
                        desc={t("kurs1-desc")} // Matnni tarjima qilish
                        endbutton={t("kurs1-endbutton")} // Matnni tarjima qilish
                        endspan={t("kurs1-endspan")} // Matnni tarjima qilish
                    />
                </li>
                <li className="kurs-item">
                    <Card
                        img={Kurs2}
                        span={t("kurs2-span")} // Matnni tarjima qilish
                        button={t("kurs1-button")} // Matnni tarjima qilish
                        desc={t("kurs2-desc")} // Matnni tarjima qilish
                        endbutton={t("kurs1-endbutton")} // Matnni tarjima qilish
                        endspan={t("kurs2-endspan")} // Matnni tarjima qilish
                    />
                </li>
                <li className="kurs-item">
                    <Card
                        img={Kurs3}
                        span={t("kurs3-span")} // Matnni tarjima qilish
                        button={t("kurs1-button")} // Matnni tarjima qilish
                        desc={t("kurs3-desc")} // Matnni tarjima qilish
                        endbutton={t("kurs1-endbutton")} // Matnni tarjima qilish
                        endspan={t("kurs3-endspan")} // Matnni tarjima qilish
                    />
                </li>
            </ul>
        </div>
    );
}

export default Kurs;
