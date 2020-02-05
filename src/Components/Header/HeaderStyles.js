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
                    font-family: 'DM Sans', sans-serif;
                    a {
                        color: #fff;
                        text-transform: uppercase;
                    }
                }
            }
            #resume-btn {
                button {
                        border: 3px solid #478559;
                        padding: 0;
                        background-color: transparent;
                        box-shadow: -6px 6px 0 0px #f95d9b, -12px 12px 0px #0e0e2d;
                        transition: .16s all ease-in-out;
                        a {
                            display: block;
                            text-decoration: none;
                            padding: .5rem 1rem;
                            font-size: 1.2em;
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
                .jumbo-text {
                    h1 {
                        color: #fff;
                        text-transform: uppercase;
                        line-height: 1;
                        margin: 0;
                        position: relative;
                        font-family: 'DM Sans', sans-serif;
                        span {
                            display: block;
                            position: relative;
                            z-index: 999;
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
                                font-size: 5rem;
                            }
                        }
                        
                        &:after {
                            content: '';
                            background-color: #39a0ca;
                            position: absolute;
                            height: 40px;
                            width: 200px;
                            top: -5px;
                            right: 110px;
                            transform: rotate(6deg);
                            box-shadow: 7px -7px 0px #f95d9b, 14px -14px 0px #0e0e2d;
                            
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
                .jumbo-wrap {
                    display: none !important;
                    padding: 0 100px;
                }
        }
        @media (min-width: 940px) {
                .jumbo-wrap {
                    padding: 0 160px;
                    .jumbo-text {
                        display: flex;
                        flex-direction: row-reverse;
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