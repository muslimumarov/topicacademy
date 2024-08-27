import React from 'react';
import "../for-you/for-you.css"; // Boshqa CSS fayllarini import qiling
import MarqueFoto from "../images/sertifikat.svg"; // Rasm manzili
import { useTranslation } from "react-i18next"; // Tarjima uchun
import Marquee from "react-fast-marquee"; // Marquee komponenti

function Result() {
    const { t } = useTranslation(); // Tarjima funksiyasi

    return (
        <div className="result mb-[142px]">
            <h2 className="foryou-title">{t("result-title")}</h2>

            <Marquee direction={"right"} speed={50} pauseOnHover={false}> {/* pauseOnHover ni false qilib o'zgartiring */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {Array(20).fill().map((_, index) => (
                        <img

                            key={index}
                            src={MarqueFoto}
                            className="marquee-image ml-6 mb-8"
                            width="213"
                            height="327"
                        />
                    ))}
                </div>
            </Marquee>
            <Marquee direction={"left"} speed={60} pauseOnHover={false}> {/* pauseOnHover ni false qilib o'zgartiring */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {Array(20).fill().map((_, index) => (
                        <img

                            key={index}
                            src={MarqueFoto}
                            className="marquee-image ml-3 "
                            width="313"
                            height="467"
                        />
                    ))}
                </div>
            </Marquee>
        </div>
    );
}

export default Result;
