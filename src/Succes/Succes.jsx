import React from 'react';
import "./succes.css"
import {useTranslation} from "react-i18next";

import {Button} from "antd";
import Succesmarque from "./Succesmarque";

function Succes() {
    const {t, i18n} = useTranslation();
    return (<div className="succes">
        <div className="succes-wrap-title  mx-auto">
            <h3 className="foryou-title   succes-title-activ sm:text-[32px] lg:text-[36px] ">{t("succes-title")}</h3>
        </div>
        <div className="succes-wrap">
            <div className="succes-innershadow">
                <div className="succes-text  d-block mt-[58px] md:mb-[70px]">
                    <p>{t("succes-text")}</p>
                </div>
                <div className="succes-desc md:inline-block mobile:hidden text-[18px] w-[285px] mb-[20px]">
                    <p>{t("succes-desc")}</p>
                </div>
                <Button
                    className="succes-button w-[300px] bg-emerald-500  text-white rounded-[50px] p-9">{t("succes-button")}
                </Button>
            </div>
            <div className="succes-innerwrap ">
                <Succesmarque/>
            </div>
        </div>
    </div>)
}

export default Succes