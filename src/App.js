import React, { Fragment } from 'react';
import './assets/stylesheets/global.css';
import "antd/dist/antd.css";
import Header from './Components/Header/Header';
import About from './Components/About/About'

function App() {
    return (
        <Fragment>
            <Header />
            <About />
            <section
                style= {{
                    backgroundColor: "red",
                    height: "100vh",
                    margin: "20px"
                }}
            >
            </section>
            <section
                style= {{
                    backgroundColor: "green",
                    height: "100vh",
                    margin: "20px"
                }}
            >
            </section>
        </Fragment>
    );
}

export default App;
