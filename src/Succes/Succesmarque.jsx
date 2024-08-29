import React from 'react';
import "../for-you/for-you.css"; // Boshqa CSS fayllarini import qiling
import MarqueFoto from "../images/sertifikat.svg"; // Rasm manzili
import Marquee from "react-fast-marquee"; // Marquee komponenti

function Succesmarque() {

    return (
        <div className="succes-marque">
            <Marquee direction={"left"} speed={60} pauseOnHover={false}> {/* pauseOnHover ni false qilib o'zgartiring */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {Array(20).fill().map((_, index) => (
                        <img
                            key={index}
                            src={MarqueFoto}
                            className="marquee-image ml-6 "
                            width="248"
                        />
                    ))}
                </div>
            </Marquee>
        </div>
    );
}

export default Succesmarque;
