import styled from 'styled-components';
import ProfilePic from '../../assets/images/me.jpg';
const AboutStyles = styled.div`
   section {
        position: relative;
        .container {
            .profile-wrap {
                margin: -200px 20px 0 20px;
                transition: .6s all ease-in-out;
                .profile-image {
                    position: relative;
                    margin-bottom: -200px;
                    margin-left: auto;
                    margin-right: auto;
                    z-index: 99;
                    width: 400px;
                    height: 400px;
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
                    background-color: #f1f1f1;
                    padding: 150px 20px 20px 20px;
                    overflow: hidden;
                    height: 100vh
                }
            }
            .profile-wrap.animated {
                margin: -180px 20px 0 20px;
                .profile-image {
                    padding: 20px;
                    box-shadow: none;
                }
            }
        }
        .numbers.two {
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
export { AboutStyles };