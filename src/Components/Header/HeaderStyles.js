import styled from 'styled-components';
// we create the style for the element we are trying to reach
const HeaderStyles = styled.div`
    section#top {
        background-color: blue;
        margin: 20px;
        .container.section-padding {
            padding: 20px;
        }
    }

/*     
    @media (min-width: 649px) {
    }
    @media (max-width: 940px) {
    } */
`;
// you may notice all we are doing is appending the HTML tag to the styled object, from there on it's regular CSS
export { HeaderStyles };