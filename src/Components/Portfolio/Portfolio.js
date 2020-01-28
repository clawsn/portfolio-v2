import React, { Component } from 'react';
import { PortfolioStyles } from './PortfolioStyles';
import { Typography, Row, Col } from 'antd';
import {useSpring, animated} from 'react-spring'
// import ProfilePic from '../../assets/images/me.jpg';
const { Title } = Typography;

class Portfolio extends Component {
    render() {
        return (
            <PortfolioStyles>
                <section id="portfolio-intro">
                    <div className="numbers three">
                        <Title>03.</Title>
                    </div>
                </section>
            </PortfolioStyles>
        );
    }
}

export default Portfolio;