import React, { Component } from 'react'
import Logo from '../../assets/logo.png'
import './Header.less'

class Header extends Component {
    render(){
        return (
            <div id="header">
                <div className="header-container">
                    <div className="head-title">
                        <img src={Logo} className="logo" alt="" ></img>
                        <span>一键洗衣</span>
                    </div>
                    <div className="head-subtitle">
                        <span>邱老板牛逼</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;