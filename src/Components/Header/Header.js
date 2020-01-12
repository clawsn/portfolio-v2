import React, { Component } from 'react';
import { HeaderStyles } from './HeaderStyles';
import { Typography } from 'antd';

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
                        <div className="jumbo-text-wrap">
                            <div className="jumbo-text">
                                <Title>
                                    <span className="little">HI, my name is Kyle Clausen</span>
                                    <span className="big">Front-end</span> 
                                    <span className="big">Software Engineer</span>
                                    
                                </Title>
                            <div className="line-left"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </HeaderStyles>
        );
    }
}

export default Header;