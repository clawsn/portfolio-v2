import React, { Component } from 'react';
import { SideNavStyles } from './SideNavStyles';
import { Typography, Row, Col, Button } from 'antd';
import {useSpring, animated} from 'react-spring'
import scrollToComponent from 'react-scroll-to-component';

const { Title } = Typography;

class SideNav extends Component {
    render() {
        return (
            <SideNavStyles>
                <div id="side-nav-scroll">
                    <ul>
                        <li className="side-nav-item">
                            <button>
                                <span>01.</span> 
                                {/* <span> Intro</span> */}
                            </button>
                        </li>
                        <li className="side-nav-item">
                            <button>
                            <span>02.</span> 
                            {/* <span> About</span> */}
                            </button>
                        </li>
                        <li className="side-nav-item">
                            <button>
                            <span>03.</span> 
                            {/* <span> Portfolio</span> */}
                            </button>
                        </li>
                        <li className="side-nav-item">
                            <button>
                            <span>04.</span> 
                            {/* <span> Contact</span> */}
                            </button>
                        </li>
                    </ul>
                </div>
                
            </SideNavStyles>
        );
    }
}
export default SideNav;