import React, { useState} from 'react';
import {useTranslation, } from 'react-i18next';
import './for-you.css';
import ForYouone from '../images/reklama1.png';
import ForYoutwo from '../images/reklama2.png';
import ForYouthree from '../images/reklama3.png';
import ForYoufour from '../images/reklama4.png';
import ForYoufife from '../images/reklama5.png';
import ForYousix from '../images/reklama6.png';
import {Button, Form, Modal, Input} from 'antd';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import axios from "axios";

function ForYou() {
    const {t, i18n} = useTranslation();

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
            chat_id: chatId,
            text: `Ismi: ${values.text} \n Telefon-raqami: ${values.phone}`
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

    return (<div className="foryou">
        <h2 className="foryou-title md:mb-[60px]" >{t('fortitle')}</h2>
        <ul className="foryou-list">
            <li className="foryou-list-item">
                <img src={ForYouone} className="foryou-img" alt="testing img"/>
                <div className="foryou-desc">{t('lione')}</div>
            </li>
            <li className="foryou-list-item">
                <img src={ForYoutwo} className="foryou-img" alt="testing img"/>
                <div className="foryou-desc">{t('litwo')}</div>
            </li>
            <li className="foryou-list-item">
                <img src={ForYouthree} className="foryou-img" alt="testing img"/>
                <div className="foryou-desc">{t('lithree')}</div>
            </li>
            <li className="foryou-list-item">
                <img src={ForYoufour} className="foryou-img" alt="testing img"/>
                <div className="foryou-desc">{t('lifoo')}</div>
            </li>
            <li className="foryou-list-item">
                <img src={ForYoufife} className="foryou-img" alt="testing img"/>
                <div className="foryou-desc">{t('lifife')}</div>
            </li>
            <li className="foryou-list-item">
                <img src={ForYousix} className="foryou-img" alt="testing img"/>
                <div className="foryou-desc">{t('lisix')}</div>
            </li>
        </ul>
        <Button onClick={showModal}
                className="open-modal-button text-white foryou-button bg-emerald-700 w-[322px] h-[80px] rounded-[50px] text-[19px] font-[700]"
                type="primary"
        >
            {t('foryoubutton')}
        </Button>
        <Modal width={700} className=" ant-modal-title p-[44px] bg-transparent modal-modal" title="Basic Modal"
               open={isModalOpen}
               onOk={handleOk} onCancel={handleCancel}>
            <h1 className="foryou-form-title text-white">O'z ma'lumotlaringizni qoldiring</h1>
            <span className="foryou-form-span text-white">Sizga to'liqroq ma'lumot berish uchun mutaxassislarimiz siz bilan bog'lanishadi
            </span>

            <Form  className="foryou-form-form"
                name="phone-input"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="text"
                    rules={[{ required: true, message: 'Iltimos, matn kiriting!' }]}
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
                    rules={[{ required: true, message: 'Iltimos, telefon raqamingizni kiriting!' }]}
                >
                    <PhoneInput
                        id='phone'
                        country={'uz'}
                        value={phone}
                        onChange={phone => setPhone(phone)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button className='foryou-form-button bg-emerald-700 text-white p-5 hover:bg-green-600' type="primary" htmlType="submit">
                        Bepul darsga yozilish
                    </Button>
                </Form.Item>
            </Form>

        </Modal>
    </div>);
}

export default ForYou;


