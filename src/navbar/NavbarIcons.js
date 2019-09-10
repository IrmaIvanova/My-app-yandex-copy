import React from 'react';
import './NavbarIcons.css';



class NavbarIcons extends React.Component{
    render(){
        return(
            <div className="NavbarIcons">
                <a 
                    href="https://plus.yandex.ru/?from=main&utm_campaign=main_badge&utm_medium=header_main&utm_source=yandex&source=header_main&origin=serp_desktop_plus"> 
                        Будь в Плюсе 
                        <span className="back_img_settings"></span>
                </a>
                <a 
                    href="https://yandex.ru/collections/" >
                        <span className="colections"></span>
                </a>
                <a 
                    className="notice" 
                    href="https://yandex.ru/tune/search/?retpath=https%3A%2F%2Fyandex.ru%2F%3Fdomredir%3D1&nosync=1" 
                    data-title="Уведомление"  > 
                        <span className='notice_bell'></span> 
                </a>

            </div>
        )
    }
}

export default NavbarIcons;