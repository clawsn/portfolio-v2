import styled from 'styled-components';
// we create the style for the element we are trying to reach
const HeaderStyles = styled.div`
    section#top {
        position: relative;
        background-color: blue;
        margin: 20px;
        height: 100vh;
        .container.section-padding {
            padding: 20px;
            #top-bar {
                position: relative;
                z-index: 99;
                display: flex;
                align-items: center;
            #logo {
                flex-grow: 1;
                h3 {
                    a {
                        color: #fff;
                        text-transform: uppercase;
                    }
                }
            }
                #menu-btn {
                    cursor: pointer;
                    span {
                        background-color: #fff;
                        display: block;
                        height: 4px;
                        border-radius: 4px;
                        margin-bottom: 6px;
                        margin-left: auto;
                        transition: .2s all ease-in-out;
                        box-shadow: 0px 0px 6px rgba(34,34,34,.4);
                        &:nth-child(1) {
                            width: 40px;
                        }
                        &:nth-child(2) {
                            width: 30px;
                        }
                        &:nth-child(3) {
                            width: 20px;
                        }
                    }
                    &:hover {
                        span {
                            width: 40px;
                        }
                    }
                }
            }
            .jumbo-text-wrap {
                display: flex;
                align-items: center;
                justify-content: left;
                height: 100vh;
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                padding: 0 160px;
                .jumbo-text {
                    display: flex;
                    flex-direction: row-reverse;
                    h1 {
                        color: #fff;
                        text-transform: uppercase;
                        line-height: 1;
                        margin: 0;
                        span {
                            display: block;
                            &:nth-child(1) {
                                font-size: 2rem;
                                padding-left: 6px;
                                font-weight: 100;
                                font-style: italic;
                            }
                            &:nth-child(2) {
                                font-size: 6rem;
                            }
                            &:nth-child(3) {
                                font-size: 4rem;
                            }
                        }
                    
                    }
                    .line-left {
                        background-color: #fff;
                        width: 20px;
                        position: relative;
                        left: -160px;
                    }
                }
            }
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