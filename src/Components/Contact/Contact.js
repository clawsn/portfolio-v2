import React, { Component } from 'react';
import { ContactStyles } from './ContactStyles';
import { Typography, Row, Col} from 'antd';
import {useSpring, animated} from 'react-spring';
import { useInView, InView } from 'react-intersection-observer'
const { Title, Paragraph } = Typography;
class Contact extends Component {
    
    render() {
        return (
            <ContactStyles >
                <section id="contact-intro">
                    
                    <div className="container section-padding">
                        <ContactScene />
                        
                    </div>
                </section>
            </ContactStyles>
        );
    }
}
const ContactScene = () => {
    return (
        <InView
        >
            {({ inView, ref, entry }) => (
            <div ref={ref}>
                <div className={`contact-intro-wrap ${inView ? 'animated' : ''}`}>
                    {/* <div className="numbers four">
                        <Title>04.</Title>
                    </div> */}
                    <div class="ball">
                        <div class="ball__round"></div>
                    </div>
                    <div className="animated-text">
                        <Title>Contact Me</Title>
                        <Paragraph className="text">This site was made with</Paragraph>
                    </div>
                </div>
            </div>
            )}
        </InView>
    )
}
export default Contact;