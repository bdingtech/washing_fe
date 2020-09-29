import React from 'react'
import Logo from '../../assets/logo.png'
import './Header.less'

function Header(){
    return(
        <div id="header">
            <div className="header-container">
                <div className="head-title">
                    <img src={Logo} className="logo" alt="" ></img>
                    <div className="title">一键洗衣</div>
                </div>
                <div className="head-subtitle">
                    <span>邱老板牛逼!</span>
                </div>
            </div>
        </div>
    )
}

export default Header;