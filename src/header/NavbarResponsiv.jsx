import React, { useState } from 'react';
import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import "./header.css";

const NavbarResponsiv = () => {
    const { t } = useTranslation(); // useTranslation hookini ichida chaqiramiz
    const [current, setCurrent] = useState('1');

    const items = [
        {
            key: 'sub2',
            label: t('Menu'), // Tarjima
            children: [
                {
                    key: '1',
                    label: t('Nega biz'),
                },
                {
                    key: '2',
                    label: t('Natijalar'),
                },
                {
                    key: '3',
                    label: t('Kurslar'),
                },
                {
                    key: '4',
                    label: t('Ko’p beriladigan savollar\n'),
                },
                {
                    key: 'sub3',
                    label: t('Contact'),
                    children: [
                        {
                            key: '5',
                            label: <a href="tel:+998330600098">+998 (33) 306 0098</a>, // O'qish fazoviy bog'lanish
                        },
                        {
                            key: '6',
                            label: (
                                <a href="https://topiktashkec.uz/register" target='_blank' rel="noopener noreferrer">
                                    {t("Hoziroq bog'\nlaning")}
                                </a>
                            ),
                        },
                    ],
                },
            ],
        },
    ];

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <div className="navbar-responsiv">
            <Menu
                onClick={onClick}
                style={{
                    // width: 146,
                    // height: "auto", // Balandlikni avtomatik qilaylik
                }}
                selectedKeys={[current]}
                mode="inline"
                items={items}
            />
        </div>
    );
};

export default NavbarResponsiv;
