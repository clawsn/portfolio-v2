
import styled from 'styled-components';
// we create the style for the element we are trying to reach
const ContactStyles = styled.div`
    section#contact-intro {
        position: relative;
        background-color: #ffffff;
        overflow: hidden;
        margin: 20px 20px 0px 20px;
        min-height: 310px;
            .contact-intro-wrap {
                transform: perspective(400px) rotateX(-30deg);
                transition: .8s all ease-in-out;
                padding: 26px 15px;
                margin-top: -240px;
                
                .animated-text {
                    text-align: center;
                    transition: 1s all ease-in-out;
                    opacity: .8;
                    h1 {
                        font-family: 'DM Sans',sans-serif;
                        font-size: 120px;
                        color: #fff;
                        text-transform: uppercase;
                        margin-top: -70px;
                        margin-bottom: 0;
                    }
                    .text {
                        font-size: 2em;
                        color: #fff;
                        font-family: 'Open Sans', sans-serif;
                    }
                    h1,.text {
                        text-align: center;
                    }
                    button {
                        border: 3px solid #478559;
                        padding: 0;
                        background-color: transparent;
                        box-shadow: 6px -6px 0 0px #f95d9b, 12px -12px 0px #161748;
                        transition: .16s all ease-in-out;
                        a {
                            display: block;
                            text-decoration: none;
                            padding: 1rem 2rem;
                            font-size: 1.5em;
                            font-family: 'DM Sans',sans-serif;
                            color: #fff;
                            text-transform: uppercase;
                            transition: .2s all ease-in-out;
                        }
                        &:hover {
                            box-shadow: 0px 0px #f95d9b;
                            border: 3px solid #f95d9b;
                            a {
                                background-color: #f95d9b;
                            }
                        }
                    }
                   
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
                transform: perspective(0px) rotateX(0deg);
                margin-top: 0;
                background-color: #0E0E2D;
                .animated-text {
                    opacity: 1;
                    .button {
                        margin-bottom: 0;
                    }
                }
                .numbers.four {
                    margin-left: 0px;
                    h1 {
                        color: blue;
                    }
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
        @media (max-width: 939px) {
            .contact-intro-wrap {
                .animated-text {
                    h1 {
                        font-size: 50px;
                        margin-top: -50px;
                    }
                   
                }
            }

        }
        @media (min-width: 940px) {

        }
    }
`;
export { ContactStyles };