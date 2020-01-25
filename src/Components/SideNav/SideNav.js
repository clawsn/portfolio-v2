import React, { Component } from 'react';
import { SideNavStyles } from './SideNavStyles';
import { Typography, Row, Col } from 'antd';
import {useSpring, animated} from 'react-spring'
// import ProfilePic from '../../assets/images/me.jpg';
const { Title } = Typography;

class SideNav extends Component {
    
    render() {
        return (
            <SideNavStyles>
                <div id="side-nav-scroll">
                    <ul>
                        <li>
                            <a href="#0">
                                <span>01.</span> 
                                <span> Intro</span>
                            </a>
                        </li>
                        <li>
                            <a href="#0">
                                <span>02.</span> 
                                <span> About</span>
                            </a>
                        </li>
                        <li>
                            <a href="#0">
                                <span>03.</span> 
                                <span> Portfolio</span>
                            </a>
                        </li>
                        <li>
                            <a href="#0">
                                <span>04.</span> 
                                <span> Contact</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </SideNavStyles>
        );
    }
}
export default SideNav;