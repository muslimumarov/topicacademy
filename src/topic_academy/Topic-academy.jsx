import React from "react";
import {useTranslation} from "react-i18next";
import Box1 from "../images/test1.svg";
import Box2 from "../images/test2.svg";
import Box3 from "../images/test3.svg";
import Box4 from "../images/test4.svg";
import Box5 from "../images/test5.svg";
import Box6 from "../images/test6.svg";

function TopicAcademy() {
    const {t} = useTranslation();

    const topics = [{id: 1, title: t("title1"), description: t("description1"), img: Box1}, {
        id: 2, title: t("title2"), description: t("description2"), img: Box2
    }, {id: 3, title: t("title3"), description: t("description3"), img: Box3}, {
        id: 4, title: t("title4"), description: t("description4"), img: Box4
    }, {id: 5, title: t("title5"), description: t("description5"), img: Box5}, {
        id: 6, title: t("title6"), description: t("description6"), img: Box6
    },];

    return (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mb-48 lg:grid-cols-3 gap-14 p-4">
            {topics.map((topic) => (<div className='relative'>
                <div key={topic.id}
                     className="bg-white topic-inner-wrap  p-4 shadow-custom-light rounded-xl lg:w-[30000px] overflow-hidden flex flex-col justify-between"
                     style={{
                         width: "100%", maxWidth: "400px", height: "308px",
                     }}
                >
                    <img src={topic.img}
                         alt={`Image ${topic.id}`}
                         className="absolute radiuspx   top-[-35px] left-[24px]  w-[80px] h-[80px]   z-150"
                         style={{zIndex: 100}} // Ensuring zIndex is set
                    />
                    <div className="  xl:pl-[30px]   flex flex-col  items-start justify-center">
                        <h1 className=" text-left xl:mb-[29px] xl:mt-[60px] md:mt-[55px] mobile:mt-[65px] mobile:mb-[20px] mobile:text-[25px] sm:mt-[63px] sm:mb-[23px] sm:text-[20px] md:text-[24px] md:mb-[24px] lg:mt-[55px] lg:mb-[24px]    text-[27px] lg:text-[21px] ">{topic.title}</h1>
                        <p className="text-gray-600 leading-[20px]  xl:w-[275.5px] mobile:w-[220px]  sm:w-[230px]  md:w-[280px] lg:w-[250px] text-[14px]  ">
                            {topic.description}
                        </p>
                    </div>
                </div>
            </div>))}
        </div>

    );
}

export default TopicAcademy;
