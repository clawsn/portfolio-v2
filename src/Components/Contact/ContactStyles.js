
import styled from 'styled-components';
// we create the style for the element we are trying to reach
const ContactStyles = styled.div`
    section#portfolio {
        position: relative;
        background-color: green;
        overflow: hidden;
        height: 100vh;
        margin: 20px;
        .numbers.four {
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
export { ContactStyles };