import {useTranslation} from "react-i18next";
import { Button, Flex } from 'antd';

import "./hero.css"

function Hero () {
  const {t, i18n} = useTranslation();

  return (
   <>
     <div className="hero">
     <span className="hero-span">{t("hero-span")}</span>
     <div className="hero-wrap">
     <h1 className="hero-title text-[54px]">{t("hero-title")}</h1>
     </div>
     <div className="hero-textbigwrap">
     <div className="hero-texwrapone">
     <p className="hero-text hero-textone">{t("hero-text")}</p>
     </div>
     <div className="hero-textwrapfirs">
     <p className="hero-text hero-texttwo">{t("hero-text2")}</p>
     </div>
     </div>
         <Flex gap="small" >
             <Button className="text-white hero-button bg-emerald-700 w-[322px] h-[80px] rounded-[50px] text-[19px] font-[700] mb-4" type="primary"  >
               {t("hero-button")}
             </Button>
         </Flex>
         <span className="hero-endspan ml-5">{t("hero-span2")}</span>
     </div></>
    )
  }
  export default Hero;