import React from 'react';
import Login from '../login/Login.js';
import './Navbar.css';
import NavbarIcons from './NavbarIcons.js';
class Navbar extends React.Component{
    render(){
        return(
            <div className="navbar_bar">
                <div className="navbar_link">
                    <a 
                    href="https://yandex.ru/tune/geo/?retpath=https%3A%2F%2Fyandex.ru%2F%3Fdomredir%3D1&nosync=1">
                    Москва
                    </a>
                    <a 
                    href="https://yandex.ru/legal/confidential/">
                    Конфидециальность
                    </a>
                </div>
                <div className="user_box">
                    <div className="navbar_settings">
                        <NavbarIcons/>
                        <a
                        href="https://yandex.ru/tune/search/?retpath=https%3A%2F%2Fyandex.ru%2F%3Fdomredir%3D1&nosync=1"
                        >Настройки</a>
                    </div>

                   <Login/>
                </div>
            </div>




        )
    }
}

 export default Navbar;