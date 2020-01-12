import React, { Component } from 'react';
import { HeaderStyles } from './HeaderStyles';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class Header extends Component {
    state = {
        current: 'mail',
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };
    render() {
        return (
            <HeaderStyles>
                <section id="top">
                <div className="container section-padding">
                    Clawsn
                </div>
                </section>
            </HeaderStyles>
        );
    }
}

export default Header;