import React, { Component } from 'react';
import { PortfolioStyles } from './PortfolioStyles';
import { Layout, Typography, Row, Col } from 'antd';
import {useSpring, animated} from 'react-spring'
// import ProfilePic from '../../assets/images/me.jpg';
const { Title } = Typography;
const { Content } = Layout;

class Portfolio extends Component {
    render() {
        return (
            <PortfolioStyles>
                <Layout id="portfolio-intro">
                    <div className="numbers three">
                        <Title>03.</Title>
                    </div>
                    <Content>
                    <Row type="flex" justify="center" gutter={[16, 16]}>
                        <Col xs={{ span: 25 }} lg={{ span: 12 }}>
                            <div className="box"></div>
                        </Col>
                        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                            <div className="box"></div>
                        </Col>
                        <Col xs={{ span: 25 }} lg={{ span: 12 }}>
                            <div className="box"></div>
                        </Col>
                        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                            <div className="box"></div>
                        </Col>
                    </Row>
                    </Content>
                </Layout>
            </PortfolioStyles>
        );
    }
}

export default Portfolio;