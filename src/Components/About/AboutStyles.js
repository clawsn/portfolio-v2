import styled from 'styled-components';
import ProfilePic from '../../assets/images/me.jpg';
const AboutStyles = styled.div`
   section#about-intro {
    background-color: #fff;
    position: relative;
        height: 100vh;
        main {
            position: relative;
            height: 100%;
            
            .box {
                background-color: #0E0E2D;
                height: 100%;
                width: 100%;
                padding: 1rem 1.5rem;
                .text, h1 {
                    color: #fff;
                }
            }
        }
        .container {
            .profile-wrap {
                transition: .6s all ease-in-out;
                .profile-image {
                    position: relative;
                    margin-left: auto;
                    margin-right: auto;
                    z-index: 99;
                    width: 100%;
                    padding: 0px;
                    background: #fff;
                    border-radius: 50%;
                    box-shadow: 20px -20px 0px #f95d9b;
                    transition: .6s all ease-in-out;
                    .image {
                        width: 100%;
                        height: 100%;
                        background-image: url(${ProfilePic});
                        background-size: cover;
                        background-position: 50% 50%;
                        background-color: #222;
                        border-radius: 50%;
                        margin: 0 auto;
                    }
                }
                .profile-body {
                    position: relative;
                    background-color: #161748;
                    overflow: hidden;
                    height: 100vh
                    padding-top: 200px;
                }
            }
            .profile-wrap.animated {
                .profile-image {
                    padding: 20px;
                    box-shadow: none;
                }
            }
        }
        .numbers.two {
            position: relative;
            right: 120px;
            top: -200px;
            transition: 1s all ease-in-out;
            height: 100vh;
            h1 {
                font-size: 260px;
                margin: 0;
                color: #fff;
            }
            @media (min-width: 940px) {
                position: absolute;
            }
        }
        .numbers.two.animated {
            margin-top: 0px;
        }
        @media (max-width: 939px) {
            .profile-wrap {
                margin: -160px 20px 0 20px;
                .profile-image {
                    margin-bottom: -150px;
                    max-width: 300px;
                    height: 300px;
                }
            }
            .profile-wrap.animated {
                margin: -130px 20px 0 20px;
            }

        }
        @media (min-width: 940px) {
            .profile-wrap {
                margin: -200px 20px 0 20px;
                .profile-image {
                    margin-bottom: -200px;
                    max-width: 400px;
                    height: 400px;
                }
            }
            .profile-wrap.animated {
                margin: -180px 20px 0 20px;
            }
        }
   }
`;
export { AboutStyles };