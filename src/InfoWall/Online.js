
import React from 'react';
import './Online.css';
import Titles from '../Titles/Titles.js';


class Online extends React.Component{
    render(){
        return(
            <div class="online">
                <div className="title_box">
                    <Titles text="Эфир"/>
                    <Titles text="Фильмы"/>
                    <Titles text="Сериалы"/>
                </div>
                <div class="online_items">
                    <p> <a href="" class="play"></a>  <a href="">Секретная <span>Звезда</span> </a></p>
                    <p> <a href="" class="play"></a>  <a href="">Кастинг ведущих <span>Дождь</span></a></p>
                    <p> <a href="" class="play"></a>  <a href="">ЧЭЗ <span>РБК</span></a></p> 
                </div>
            </div>
        )
    }
}

 export default Online;