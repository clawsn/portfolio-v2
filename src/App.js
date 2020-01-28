import React, { Fragment } from 'react';
import './assets/stylesheets/global.css';
import "antd/dist/antd.css";
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

function App() {
    return (
        <Fragment>
            <Header />
            <About />
            <Portfolio />
            <Contact />
        </Fragment>
    );
}

export default App;
