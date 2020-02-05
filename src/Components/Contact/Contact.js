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
                        <ContactScene />
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
                    {/* <div class="ball">
                        <div class="ball__round"></div>
                    </div> */}
                    <div className="animated-text">
                        <Title>Get In Touch</Title>
                        <Paragraph className="text">My inbox is always open. <br />Feel free to shoot me an email.</Paragraph>
                        <button>
                            <a href="mailto:kyle.clawsn@gmail.com" target="_blank" rel="nofollow noopener noreferrer" class="contact__StyledEmailLink-sc-1m8df4t-3 gHPbIU">Contact me</a>
                        </button>
                    </div>
                </div>
            </div>
            )}
        </InView>
    )
}
export default Contact;