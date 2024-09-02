import  React from 'react';
import { useTranslation } from "react-i18next"; // Tarjima uchun

function QuestionTwood() {
    const { t } = useTranslation(); // Tarjima funksiyasi

    return (
        <div className="question  mt-[333px] mb-[333px] shadow-md">
                 <div className="question-one">
                     <h2 className="qestion-title">{t("questonttwo-title")}</h2>
                     <p className="question text">{t("questonttwo-text")}</p>
                 </div>
            <div className="question-twoo">

            </div>

        </div>
    )
}
export default QuestionTwood;