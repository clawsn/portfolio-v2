import React, { Component } from 'react';
import { HeaderStyles } from './HeaderStyles';
import { Typography, Row, Col} from 'antd';
import {useSpring, animated} from 'react-spring'
import {Spring} from 'react-spring/renderprops'
// import ProfilePic from '../../assets/images/me.jpg';
const { Title } = Typography;

class Header extends Component {
    state = {
        size: 'large',
      };
    render() {
        const { size } = this.state;
        return (
            <HeaderStyles>
                <section id="top">
                    <div className="container section-padding">
                        <div id="top-bar">
                            <div id="logo">
                                <Title  level={3}>
                                    <a href="#0">Clawsn</a>
                                </Title>
                            </div>
                            <div id="resume-btn">
                            <button><a href="#0">Resume</a></button>
                            </div>
                        </div>
                        <div className="jumbo-wrap">
                            <div className="jumbo-text">
                                <Text />
                            {/* <div className="line-left"></div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </HeaderStyles>
        );
    }
}
const Text = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}})
    return (
    <animated.div style={props}>
        <Title>
            <span className="little">HI, my name is Kyle Clausen</span>
            <span className="big">Front-end</span> 
            <span className="big">Developer</span>
        </Title>
    </animated.div>
    )
}
export default Header;