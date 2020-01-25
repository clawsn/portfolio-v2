import React, { Component } from 'react';
import { ContactStyles } from './ContactStyles';
import { Typography, Row, Col } from 'antd';
import {useSpring, animated} from 'react-spring'
// import ProfilePic from '../../assets/images/me.jpg';
const { Title } = Typography;

class Contact extends Component {
    render() {
        return (
            <ContactStyles>
                <section id="portfolio">
                    <div className="numbers four">
                        <Title>04.</Title>
                    </div>
                </section>
            </ContactStyles>
        );
    }
}

export default Contact;