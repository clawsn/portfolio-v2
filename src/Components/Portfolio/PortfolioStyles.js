import styled from 'styled-components';
// we create the style for the element we are trying to reach
const PortfolioStyles = styled.div`
    section#portfolio-intro {
        position: relative;
        background-color: #161748;
        overflow: hidden;
        height: 100vh;
        margin: 20px;
        .numbers.three {
            position: relative;
            right: 120px;
            top: -200px;
            h1 {
                font-size: 260px;
                margin: 0;
                color: #fff;
            }
            @media (min-width: 940px) {
                position: absolute;
            }
        }
        main {
            position: relative;
            margin-top: -120px;
            height: 100%;
            .box {
                background-color: #0E0E2D;
                height: 300px;
                width: 100%;
            }
        }
        @media (min-width: 940px) {
            main {
                margin-top: 200px;
            }
        }
    }
`;
export { PortfolioStyles };