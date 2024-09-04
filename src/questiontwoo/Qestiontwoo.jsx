import React, {useState} from "react";
import {Modal, Button, Input} from "antd";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import "antd/dist/reset.css";
import axios from "axios";
import {useTranslation} from "react-i18next";

function QuestionTwood() {
    const {t} = useTranslation();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [isHovered, setIsHovered] = useState(false);
    const [Togri_yoz_ey, setError] = useState("");
    const [nameError, setNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [successModalVisible, setSuccessModalVisible] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let formIsValid = true;

        if (!name) {
            setNameError(true);
            formIsValid = false;
        } else {
            setNameError(false);
        }

        if (!phone) {
            setPhoneError(true);
            formIsValid = false;
        } else {
            setPhoneError(false);
        }

        if (!formIsValid) {
            setError("Iltimos, barcha majburiy maydonlarni to'ldiring.");
            return;
        }

        try {
            // API ga so'rov yuborish uchun
            const token = '7249790547:AAE-ggnpMMskVdZzqKwpcxcv65gabuMzidY';
            const chatId = -1002080403231;
            const url = `https://api.telegram.org/bot${token}/sendMessage`;

            const response = await axios.post(url, {
                chat_id: chatId, text: `Ismingiz: ${name} \n Telefon raqamingiz: ${phone}`
            });

            if (response.status === 200) {
                setSuccessModalVisible(true);
                setError("");
            } else {
                setError("Server xatosi, iltimos keyinroq urinib ko'ring.");
            }
        } catch (error) {
            setError("Tarmoq xatosi, iltimos keyinroq urinib ko'ring.");
        }
    };

    return (<div className="question mobile:py-[38px] px-[95px] lg:py-[65px] xl:w-[1200px] lg:px-[105px] align-items-center grid sm:py-[44px]  sm:pl-[44px]
                         sm:px-[44px]  sm:grid-cols-1  md:grid-cols-2    sm:flex-row
                        mt-[33px] mb-[53px] bg-gradient-to-br from-[#C9E9ED] via-[#DFFFF1] to-[#FFFFFF]">
        <div
            className="question-one text-center md:left-[9px] md:top-[5px]  mobile:right-[65px] sm:left-[75px] relative  md:w-[300px] mobile:w-[300px] w-full  sm:w-[440px]  mb-8 sm:mb-0">
            <h2 className="qestion-title lg:text-[40px] md:text-left  md:w-[304px] sm:mr-[70px] md:text-[30px]  mobile:text-[34px]  mb-5 sm:text-[35px]">
                {t("questonttwo-title")}
            </h2>
            <p className="question md:text-left leading-[29px] lg:w-[300px] md:w-[260px] md:text-[16px] lg:text-[19px] mobile:text-[13px] mobile:w-[300px]  sm:text-center sm:w-[350px] text">{t("questonttwo-text")}</p>
        </div>
        <div
            className="question-twoo maxsus-question md:left-[9px] md:top-[-5px]   mobile:right-[65px] sm:left-[38px] relative   w-full sm:w-auto">
            <form className="mt-8 md:mt-[12px]  space-y-6 w-full max-w-md" onSubmit={handleSubmit}>
                <div className="rounded-md  shadow-sm -space-y-px">
                    <div className="">
                        <Input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Ismingiz"
                            className={`mb-2 ${nameError ? " border-red-500 border " : "border-none"} p-4 rounded-[34px] bg-customGreen `}
                        />
                    </div>
                    <div
                        className={"maxsus-input"}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <PhoneInput
                            country={"uz"}
                            value={phone}
                            onChange={(phone) => setPhone(phone)}
                            inputStyle={{
                                backgroundColor: isHovered ? '#ffffff' : '#BFF1C5',
                                width: "100%",
                                height: "40px",
                                borderRadius: "50px",
                                border: phoneError ? "1px solid #F5222D" : "1px solid #d9d9d9",
                                paddingTop: '25px',
                                paddingBottom: '25px',
                            }}
                        />
                    </div>
                </div>

                {Togri_yoz_ey && <div className="text-red-500 mt-2">{Togri_yoz_ey}</div>}

                <div>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="w-full py-2"
                        style={{
                            backgroundColor: "#36CFC9",
                            borderColor: "#69B6B3",
                            borderRadius: ' 34px',
                            padding: '25px',
                            background: '#69B6B3 '
                        }}
                    >
                        SAVOL BERISH
                    </Button>
                </div>
            </form>

           <div className="question-end-modal">
               <Modal
                   title="Muvaffaqiyatli amalga oshirildi"
                   visible={successModalVisible}
                   onOk={() => setSuccessModalVisible(false)}
                   onCancel={() => setSuccessModalVisible(false)}
               >
                   <p className="modal-end ">So'rovingiz muvaffaqiyatli amalga oshirildi!</p>
               </Modal>
           </div>
        </div>
    </div>);
}

export default QuestionTwood;
