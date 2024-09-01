import React, {useState} from "react";
import "./kurs.css";
import {useTranslation} from "react-i18next";
import Kurs1 from "../images/kurs1.png";
import Kurs2 from "../images/kurs2.png";
import Kurs3 from "../images/kurs3.png";
import {Button, Form, Modal, Input} from 'antd';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import axios from "axios";

function Kurs() {
    const {t} = useTranslation();


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [text, setText] = useState('');
    const [phone, setPhone] = useState('');

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = (values) => {
        sendMessage(values);
    };

    const sendMessage = (values) => {
        const token = '7249790547:AAE-ggnpMMskVdZzqKwpcxcv65gabuMzidY';
        const chatId = -1002080403231;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        axios.post(url, {
            chat_id: chatId, text: `Ismi: ${values.text} \n Telefon-raqami: ${values.phone}`
        })
            .then((res) => {
                alert("Muvaffaqiyatli bajarildi");
                handleOk(); // Form yuborilgandan so'ng modalni yopish
            })
            .catch((error) => {
                console.log('Xatolik yuz berdi', error);
                console.log(chatId)
            });
    };


    return (<div className="kurs mb-32 py-8">
        <h2 className="foryou-title text-center text-2xl md:text-4xl font-bold mb-12 text-gray-800">
            {t("kurs-title")}
        </h2>
        <div
            className="kurs-list grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 lg:gap-10 gap-12     justify-items-center px-4 md:px-0">
            {/* Intensive Course Card */}
            <div
                className="kurs-item   bg-gray-100 rounded-[40px] shadow-lg overflow-hidden flex flex-col items-center transition-transform transform hover:scale-105">
                <img src={Kurs1} alt="Intensive Course" className=' ml-14 h-[205px]   object-cover  w-[428px]  '/>
                <div className="p-4 w-full flex justify-between flex-col items">
                    <div className="kurs-wrapt mb-[25px] flex  ">
                        <h3 className=" max-w-[400px] mx-auto pl-0 ml-0 sm:ml-[30px] lg:text-[22px] text-[26px] md:ml-[3px] font-semibold text-gray-900 ">{t("kurs1-span")}</h3>
                        <button
                            className="bg-green-900 mobile:text-[14px]   mobile:pl-[20px] mobile:pr-[20px]   sm:mr-[50px] md:mr-[3px]  sm:pt-[1px] sm:pl-[13px]  sm:pr-[13px] sm:pb-[1px] sm:text-[10px]  sm:w-[135px] md:w-[140px]      text-center   text-white font-semibold rounded-full  transition duration-300  ">
                            {t("kurs1-button")}
                        </button>
                    </div>
                    <p className="text-left sm:ml-[30px] md:ml-[3px]  text-sm max-w-[210px] sm:w-[300px] md:w-[215px] lg:w-[215px] xl:w-[280px] text-[15px]  text-gray-600 ">{t("kurs1-desc")}</p>
                    <div className="mt-6 w-full flex items-center justify-between">
                        <button onClick={showModal}
                                className="  py-2 px-3.5 xl:py-[12px]  xl:px-[50px]  sm:ml-[30px] md:ml-[3px]  sm:pr-[20px] sm:pl-[25px]   text-center  bg-green-500 text-[9px] text-white  font-semibold rounded-full hover:bg-gr-300 transition duration-300">
                            {t("kurs1-endbutton")}
                        </button>
                        <Modal width={700} className=" ant-modal-title p-[44px] bg-transparent modal-modal"
                               title="Basic Modal"
                               open={isModalOpen}
                               onOk={handleOk} onCancel={handleCancel}>
                            <h1 className="foryou-form-title">O'z ma'lumotlaringizni qoldiring</h1>
                            <span className="foryou-form-span">Sizga to'liqroq ma'lumot berish uchun mutaxassislarimiz siz bilan bog'lanishadi
            </span>

                            <Form className="foryou-form-form"
                                  name="phone-input"
                                  initialValues={{remember: true}}
                                  onFinish={onFinish}
                            >
                                <Form.Item
                                    name="text"
                                    rules={[{required: true, message: 'Iltimos, matn kiriting!'}]}
                                >
                                    <Input
                                        id='name'
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                        placeholder="Matnni kiriting"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="phone"
                                    rules={[{required: true, message: 'Iltimos, telefon raqamingizni kiriting!'}]}
                                >
                                    <PhoneInput
                                        id='phone'
                                        country={'uz'}
                                        value={phone}
                                        onChange={phone => setPhone(phone)}
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Button
                                        className='foryou-form-button bg-emerald-700 text-white p-5 hover:bg-green-600'
                                        type="primary" htmlType="submit">
                                        Bepul darsga yozilish
                                    </Button>
                                </Form.Item>
                            </Form>

                        </Modal>
                        <span
                            className="text-green-600 block sm:mr-[60px] md:mr-[2px] xl:text-[15px]  text-[15px] font-bold">{t("kurs1-endspan")}</span>
                    </div>
                </div>
            </div>
            {/*-------------------------------------*/}

            <div
                className="kurs-item   bg-gray-100 rounded-[40px] shadow-lg overflow-hidden flex flex-col items-center transition-transform transform hover:scale-105">
                <img src={Kurs2} alt="Intensive Course" className=' ml-5 h-[205px]   object-cover  w-[428px]  '/>
                <div className="p-4 w-full flex justify-between flex-col items">
                    <div className="kurs-wrapt mb-[25px] flex  ">
                        <h3 className=" max-w-[400px] mx-auto pl-0 ml-0 lg:text-[22px] text-[26px] font-semibold text-gray-900 ">{t("kurs2-span")}</h3>
                        <button
                            className="bg-green-900 mobile:text-[14px]   mobile:pl-[20px] mobile:pr-[20px]  sm:pt-[1px] sm:pb-[1px] sm:text-[10px]  sm:w-[120px] md:w-[140px]      text-center   text-white font-semibold rounded-full  transition duration-300  ">
                            {t("kurs1-button")}
                        </button>
                    </div>
                    <p className="text-left mb-[20px] text-sm max-w-[190px] sm:w-[300px] md:w-[215px] lg:w-[215px] xl:w-[280px] text-[15px]  text-gray-600 ">{t("kurs2-desc")}</p>
                    <div className="mt-6 w-full flex items-center justify-between">
                        <button   onClick={showModal}
                            className="  py-2 px-3.5 xl:py-[12px]  xl:px-[50px]  sm:ml-[30px] md:ml-[3px]  sm:pr-[20px] sm:pl-[25px]   text-center  bg-green-500 text-[9px] text-white  font-semibold rounded-full hover:bg-gr-300 transition duration-300">
                            {t("kurs1-endbutton")}
                        </button>
                        <Modal width={700} className=" ant-modal-title p-[44px] bg-transparent modal-modal"
                               title="Basic Modal"
                               open={isModalOpen}
                               onOk={handleOk} onCancel={handleCancel}>
                            <h1 className="foryou-form-title">O'z ma'lumotlaringizni qoldiring</h1>
                            <span className="foryou-form-span">Sizga to'liqroq ma'lumot berish uchun mutaxassislarimiz siz bilan bog'lanishadi
            </span>

                            <Form className="foryou-form-form"
                                  name="phone-input"
                                  initialValues={{remember: true}}
                                  onFinish={onFinish}
                            >
                                <Form.Item
                                    name="text"
                                    rules={[{required: true, message: 'Iltimos, matn kiriting!'}]}
                                >
                                    <Input
                                        id='name'
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                        placeholder="Matnni kiriting"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="phone"
                                    rules={[{required: true, message: 'Iltimos, telefon raqamingizni kiriting!'}]}
                                >
                                    <PhoneInput
                                        id='phone'
                                        country={'uz'}
                                        value={phone}
                                        onChange={phone => setPhone(phone)}
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Button
                                        className='foryou-form-button bg-emerald-700 text-white p-5 hover:bg-green-600'
                                        type="primary" htmlType="submit">
                                        Bepul darsga yozilish
                                    </Button>
                                </Form.Item>
                            </Form>

                        </Modal>
                        <span className="text-green-600 text-[13px] font-bold">{t("kurs2-endspan")}</span>
                    </div>
                </div>
            </div>
            {/*-----------------------------------------*/}
            <div
                className="kurs-item   bg-gray-100 rounded-[40px] shadow-lg overflow-hidden flex flex-col items-center transition-transform transform hover:scale-105">

                <img src={Kurs3} alt="Intensive Course" className=" ml-5 h-[205px]   object-cover  w-[428px]  "/>
                <div className="p-4 w-full flex justify-between flex-col items">
                    <div className="kurs-wrapt mb-[25px] flex  ">
                        <h3 className=" max-w-[400px] mx-auto pl-0 ml-0 lg:text-[22px] text-[26px] font-semibold text-gray-900 ">{t("kurs3-span")}</h3>
                        <button
                            className="bg-green-900 mobile:text-[14px]  mobile:pl-[20px] mobile:pr-[20px]  sm:pt-[1px] sm:pb-[1px] sm:text-[10px]  sm:w-[120px] md:w-[140px]      text-center   text-white font-semibold rounded-full  transition duration-300  ">
                            {t("kurs1-button")}
                        </button>
                    </div>
                    <p className="text-left text-sm max-w-[3000px] sm:w-[300px] md:w-[215px] lg:w-[280px] xl:w-[280px] text-[15px]  text-gray-600 ">{t("kurs3-desc")}</p>
                    <div className="mt-6 w-full flex items-center justify-between">
                        <button onClick={showModal}
                                className="  py-2 px-3.5 xl:py-[12px]  xl:px-[50px]  sm:ml-[30px] md:ml-[3px]  sm:pr-[20px] sm:pl-[25px]   text-center  bg-green-500 text-[9px] text-white  font-semibold rounded-full hover:bg-gr-300 transition duration-300">
                            {t("kurs1-endbutton")}
                        </button>
                        <Modal width={500} className=" ant-modal-title p-[44px] bg-transparent modal-modal"
                               title="Basic Modal"
                               open={isModalOpen}
                               onOk={handleOk} onCancel={handleCancel}

                                                >
                            <h1 className="foryou-form-title text-white">O'z ma'lumotlaringizni qoldiring</h1>
                            <span className="foryou-form-span text-white">Sizga to'liqroq ma'lumot berish uchun mutaxassislarimiz siz bilan bog'lanishadi
            </span>

                            <Form className="foryou-form-form"
                                  name="phone-input"
                                  initialValues={{remember: true}}
                                  onFinish={onFinish}
                            >
                                <Form.Item
                                    name="text"
                                    rules={[{required: true, message: 'Iltimos, matn kiriting!'}]}
                                >
                                    <Input
                                        id='name'
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                        placeholder="Matnni kiriting"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="phone"
                                    rules={[{required: true, message: 'Iltimos, telefon raqamingizni kiriting!'}]}
                                >
                                    <PhoneInput
                                        id='phone'
                                        country={'uz'}
                                        value={phone}
                                        onChange={phone => setPhone(phone)}
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Button
                                        className='mt-[15px] foryou-form-button bg-emerald-700 text-white p-5 hover:bg-green-600'
                                        type="primary" htmlType="submit">
                                        Bepul darsga yozilish
                                    </Button>
                                </Form.Item>
                            </Form>

                        </Modal>
                        <span className="text-green-600 text-[13px] font-bold">{t("kurs3-endspan")}</span>
                    </div>
                </div>
            </div>

        </div>
    </div>);
}

export default Kurs;

