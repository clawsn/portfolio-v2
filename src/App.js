import React, { Fragment, Component } from 'react';
import './assets/stylesheets/global.css';
import "antd/dist/antd.css";
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import SideNav from "./Components/SideNav/SideNav"
import scrollToComponent from 'react-scroll-to-component';

class App extends Component {   
    render() {
    const scrollSettings = {
        offset: 200,
        // align: "top",
        // duration: 1000,
        ease: "inOutCube"
      };
        return (
            <Fragment>
                <div id="side-nav-scroll" style={{display: "none"}}>
                  <ul>
                    <li><button onClick={() => scrollToComponent(this.intro, { offset: 100, align: 'top', duration: 1500})}>Go To Intro</button></li>
                    <li><button onClick={() => scrollToComponent(this.about, { offset: 0, align: 'top', duration: 1500})}>Go To About</button></li>
                    <li><button onClick={() => scrollToComponent(this.porfolio, { offset: -200, align: 'middle', duration: 1500})}>Go To Portolio</button></li>
                    <li><button onClick={() => scrollToComponent(this.contact, { offset: -200, align: 'middle', duration: 1500})}>Go To Contact</button></li>
                  </ul>
                </div>
                <SideNav />
                <Header 
                    ref={(section) => { this.intro = section; }}
                />
                <About ref={(section) => { this.about = section; }} />
                <Portfolio ref={(section) => { this.porfolio = section; }} />
                <Contact ref={(section) => { this.contact = section; }} />
            </Fragment>
        );
    }
}

export default App;
