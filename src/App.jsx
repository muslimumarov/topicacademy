import React from 'react';
import './App.css';
import Header from "./header/Header";
import Hero from './hero/Hero';
import ForYou from "./for-you/For-you";
import Result from "./result/Result";
import Grant from "./grant/Grant";
import Succes from "./Succes/Succes";
import Kurs from "./kurs/Kurs";
import TopicAcademy from "./topic_academy/Topic-academy";
import FaqAccordion from "./Question";
import QuestionTwood from "./questiontwoo/Qestiontwoo";
function App() {

    return (
        <div className="App-container">
            <div className="container ">
                <Header/>
                <Hero/>
                <ForYou/>
                <Result/>
                <Grant/>
                <Succes/>
                <Kurs/>
                <TopicAcademy/>
                <FaqAccordion/>
                <QuestionTwood/>
            </div>

        </div>
    );
}

export default App;
