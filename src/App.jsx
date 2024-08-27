import React from 'react';
import './App.css';
import Header from "./header/Header";
import Hero from './hero/Hero';
import ForYou from "./for-you/For-you";
function App() {

    return (
        <div className="container">
            <div className="App ">
                <Header/>
                <Hero className="hero-warap"/>
                <ForYou/>
            </div>
        </div>
    );
}

export default App;
