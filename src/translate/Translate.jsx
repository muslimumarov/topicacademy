import React from 'react'
import "./translate.css"
import {useTranslation} from "react-i18next";
import { TbWorld } from "react-icons/tb";
function Translate ()  {

     const {t, i18n} = useTranslation();
     const languages = localStorage.getItem("i18nextLng")
     const handlechange = (event) => {
         const selLanguage = event.target.value
         i18n.changeLanguage(selLanguage)
     }
  return (
      <div className="translate  z-50 flex   items-center gap-2">
          <TbWorld className='translate-icon' />
          <select className='translate-select pl-2' name="lng" id="ln" onChange={handlechange} value={languages}>
              <option disabled>Tilni tanlag</option>
              <option value="uz">Uzb</option>
              <option value="en">Eng</option>
              <option value="ru">Ru</option>
          </select>
      </div>
  )
 }

export default Translate;