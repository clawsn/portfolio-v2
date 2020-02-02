import React, { Component } from 'react';
import { HeaderStyles } from './HeaderStyles';
import { Typography, Row, Col } from 'antd';
import {useSpring, animated} from 'react-spring'
import {Spring} from 'react-spring/renderprops'
// import ProfilePic from '../../assets/images/me.jpg';
const { Title } = Typography;

class Header extends Component {
    
    render() {
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
                            <div id="menu-btn">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className="jumbo-wrap">
                            <div className="jumbo-text">
                                <Text />
                            <div className="line-left"></div>
                            </div>
                        </div>
                    </div>
                    <Spring
                from={{
                  // Start invisible and offscreen
                  opacity: 0, marginTop: -1000,
                }}
                to={{
                  // End fully visible and in the middle of the screen
                  opacity: 1, marginTop: 0,
                }}
              >
                { props => (
                  // The actual box that slides down
                    <div className="numbers one" style={ props }>
                        <Title>
                            01.
                        </Title>
                    </div>
              )}
            </Spring>
                </section>
            </HeaderStyles>
        );
    }
}
const Text = () => {
    const props = useSpring({marginTop: 1, from: {opacity: 0}})
    return (
    <animated.div style={props}>
        <Title>
            <span className="little">HI, my name is Kyle Clausen</span>
            <span className="big">Front-end</span> 
            <span className="big">Software Engineer</span>
        </Title>
    </animated.div>
    )
}

const NumAnimation = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}})
    return (
    <animated.div style={props}>
        
    </animated.div>
    )
}
export default Header;