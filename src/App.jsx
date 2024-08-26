import React from 'react';
import './App.css';
import Header from "./header/Header";
import Hero from './hero/Hero';
function App() {

    return (
        <div className="container">
            <div className="App ">
                <Header/>
                <Hero className="hero-warap"/>
            </div>
        </div>
    );
}

export default App;
