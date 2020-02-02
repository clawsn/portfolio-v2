import React, { Component, useRef, Fragment } from 'react';
import { AboutStyles } from './AboutStyles';
import { Layout, Typography, Row, Col } from 'antd';
import { useInView } from 'react-intersection-observer'
// import ProfilePic from '../../assets/images/me.jpg';
const { Title, Paragraph } = Typography;
const { Content } = Layout;

class About extends Component {

    render() {
        return (
            <AboutStyles>
                <Layout id="about-intro" ref={this.myDivToFocus}>
                    <div className="container section-padding">
                            <SceneOne />
                            
                    </div>
                </Layout>
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
                <NumAnimated />
                <Content>
                    <Row type="flex" justify="center" gutter={[16, 16]}>
                        <Col xs={{ span: 24 }} lg={{ span: 8 }}>
                            <div className="box">
                            <Title level={1}> Kyle Clausen</Title>
                            <Paragraph className="text">
                    Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                    a design language for background applications, is refined by Ant UED Team. Ant Design, a
                    design language for background applications, is refined by Ant UED Team. Ant Design, a design
                    language for background applications, is refined by Ant UED Team. Ant Design, a design
                    language for background applications, is refined by Ant UED Team.
                    </Paragraph>
                            </div>
                        </Col>
                        <Col xs={{ span: 24 }} lg={{ span: 4 }}>
                            <div className="box">
                                <Paragraph copyable={{ text: 'Hello, Ant Design!' }}>Replace copy text.</Paragraph>

                            </div>
                        </Col>
                    </Row>
                </Content>
            </div>
    </div>
        
    )
}
const NumAnimated = () => {
    const [ref, inView, entry] = useInView({
        rootMargin: '-300px 0px',
        threshold: 0,
    })

    return (
        <div className={`numbers two ${inView ? 'animated' : ''}`} ref={ref}>
            <Title>
                02.
            </Title>
        </div>
        
    )
}
export default About;