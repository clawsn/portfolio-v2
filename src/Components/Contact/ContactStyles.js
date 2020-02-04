
import styled from 'styled-components';
// we create the style for the element we are trying to reach
const ContactStyles = styled.div`
    section#contact-intro {
        position: relative;
        background-color: #ffffff;
        overflow: hidden;
        margin: 20px 20px 0px 20px;
        .container {
            max-width: 1170px;
            margin: 0 auto;

            .contact-intro-wrap {
                .animated-text {
                    margin-top: -20px;
                    transition: .6s all ease-in-out;
                    opacity: 0;
                    
                }
                .ball {
                    position: relative;
                    border: 1px solid red;
                    &__round {
                        height: 200px;
                        width: 100%;
                        max-width: 200px;
                        background: red;
                        border-radius: 50%;
                        margin-left: auto;
                    }
                }
            }
            .contact-intro-wrap.animated {
                .animated-text {
                    margin-top: 0;
                    opacity: 1;
                    transition-delay: 1s
                }
                .numbers.four {
                    margin-left: 0px;
                    h1 {
                        color: blue;
                    }
                }
            }
            h1 {
                font-family: 'DM Sans',sans-serif;
                font-size: 4em;
            }
            .text {
                font-size: 1em;
            }
            h1,.text {
                text-align: center;
            }
        }
        .numbers.four {
            position: relative;
            margin-left: 100px;
            transition: 1s all ease-in-out;
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