import styled from 'styled-components';
// we create the style for the element we are trying to reach
const SideNavStyles = styled.div`

    #side-nav-scroll {
        position: fixed;
        top: 0; bottom: 0; left: 0;
        margin-left: 20px;
        z-index: 999;
        display: flex;
        align-items: center;
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            border-left: 20px solid #fff;
            li {
                button {
                    display: block;
                    width: 100%;
                    color: #fff;
                    font-size: 22px;
                    padding: .5rem 1rem;
                    background-color: transparent;
                    border: none;
                    span{
                        &:nth-of-type(1) {

                        }
                        &:nth-of-type(2) {
                            
                        }
                    }
                }
            }
        }
    }
`;
// you may notice all we are doing is appending the HTML tag to the styled object, from there on it's regular CSS
export { SideNavStyles };