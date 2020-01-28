import styled from 'styled-components';
// we create the style for the element we are trying to reach
const PortfolioStyles = styled.div`
    section#portfolio-intro {
        position: relative;
        background-color: orange;
        overflow: hidden;
        height: 100vh;
        margin: 20px;
        .numbers.three {
            position: relative;
            right: 120px;
            top: -120px;
            h1 {
                font-size: 260px;
                margin: 0;
                color: #fff;
            }
            @media (min-width: 940px) {
                position: absolute;
            }
        }
    }
`;
export { PortfolioStyles };