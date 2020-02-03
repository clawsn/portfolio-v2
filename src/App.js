import React, { Fragment, Component } from 'react';
import './assets/stylesheets/global.css';
import "antd/dist/antd.css";
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import { SideNavStyles } from './Components/SideNav/SideNavStyles';
import scrollToComponent from 'react-scroll-to-component';

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    }
  }
    render() {

      console.log(this.about)
        return (
            <Fragment>
              <SideNavStyles>
                <div id="side-nav-scroll" >
                  <ul>
                    <li className="side-nav-item"><button onClick={() => scrollToComponent(this.intro, { offset: -20, align: 'top', duration: 1500})}><span>01.</span> </button></li>
                    <li className="side-nav-item"><button onClick={() => scrollToComponent(this.about, { offset: -200, align: 'top', duration: 1500})}><span>02.</span> </button></li>
                    <li className="side-nav-item"><button onClick={() => scrollToComponent(this.porfolio, { offset: -20, align: 'middle', duration: 1500})}><span>03.</span> </button></li>
                    <li className="side-nav-item"><button onClick={() => scrollToComponent(this.contact, { offset: -20, align: 'middle', duration: 1500})}><span>04.</span> </button></li>
                  </ul>
                </div>
                </SideNavStyles>
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
