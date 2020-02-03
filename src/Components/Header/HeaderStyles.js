import styled from 'styled-components';
import ProfilePic from '../../assets/images/me.jpg';
// we create the style for the element we are trying to reach
const HeaderStyles = styled.div`
    section#top {
        position: relative;
        background-color: #161748;
        margin: 20px 20px 0 20px;
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
                    margin: 0;
                    a {
                        color: #fff;
                        text-transform: uppercase;
                    }
                }
            }
            #resume-btn {
                button {
                    border-radius: 0;
                    color: white;
                    &:hover {
                        border: 1px solid rgba(255,255,255,.4);
                        background-color: rgba(255,255,255,.1) !important;
                    }
                }
            }
            }
            .jumbo-wrap {
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
                .bubble {
                    height: 30px;
                    width: 30px;
                    background-color: #478559;
                    border-radius: 50%;
                }
            }
            
        }
        .numbers.one {
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
        @media (max-width: 939px) {
            .jumbo-text {
                display: none;
            }
        }
        @media (min-width: 940px) {
            .jumbo-text {
                display: flex;
                flex-direction: row-reverse;
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