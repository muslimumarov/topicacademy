import React from "react";
import {Collapse} from "antd";
import {useTranslation} from "react-i18next";
import {PlusCircleOutlined} from "@ant-design/icons";
import 'antd/dist/reset.css';

const {Panel} = Collapse;

function FaqAccordion() {
    const {t} = useTranslation();

    const faqData = [
        {id: 1, question: t("question1"), answer: t("question4")},
        {id: 2, question: t("question1"), answer: t("question3")},
        {id: 3, question: t("question1"), answer: t("question2")},
        {id: 4, question: t("question1"), answer: t("question4")},
    ];

    return (<div className="mb-10  sm:mb-20 lg:mb-44 block bg-unset px-4 sm:px-6 lg:px-[80px] xl:px-[70px] xxl:px-[8px] mx-auto mt-10">
        <h2 className="text-center text-2xl xl:text-[45px]  sm:text-3xl lg:text-4xl font-medium mb-10 sm:mb-12 lg:mb-14">
            {t("titlefq")}
        </h2>
        <Collapse
            expandIcon={({isActive}) => (<PlusCircleOutlined
                rotate={isActive ? 45 : 0}
                className="text-teal-500 position-relative  transform transition-transform duration-300 w-6 h-6 sm:w-8 sm:h-8"
            />)}
            expandIconPosition="end"
            className="border-none  sm:border-t sm:border-b border-gray-300"
        >
            {faqData.map((item) => (
                <Panel header={
                    <span className=" mobile:font-semibold  sm:text-[20px]">{item.question}</span>}
                     key={item.id}
                     className="bg-unset">
                    <p className="text-[19px] mobile:text-[13px]  ">{item.answer}</p>
            </Panel>))}
        </Collapse>
    </div>);
}

export default FaqAccordion;
