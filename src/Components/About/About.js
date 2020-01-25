import React, { Component, useRef, Fragment } from 'react';
import { AboutStyles } from './AboutStyles';
import { Typography } from 'antd';
import { useInView } from 'react-intersection-observer'
// import ProfilePic from '../../assets/images/me.jpg';
const { Title, Paragraph } = Typography;


class About extends Component {

    render() {
        return (
            <AboutStyles>
                <section>
                    <div className="container section-padding">
                            <SceneOne />
                    </div>
                </section>
            </AboutStyles>
        );
    }
}
const SceneOne = () => {
    const [ref, inView, entry] = useInView({
        rootMargin: '-300px 0px',
        threshold: 0,
    })

    return (
        <div className={`profile-wrap ${inView ? 'animated' : ''}`} ref={ref}>
            <div className={`profile-image ${inView ? 'animated' : ''}`} ref={ref}>
            <div className="image"></div>
            </div>
        <div className="profile-body">
            <div className="numbers two">
                <Title>
                    02.
                </Title>
            </div>
        </div>
    </div>
        
    )
}
export default About;