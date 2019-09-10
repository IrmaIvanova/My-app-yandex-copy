
import React from 'react';
import './TVprograms.css';
import Titles from '../Titles/Titles.js';


class TVprograms extends React.Component {
    render(){
        return (
            <div className="tv_programm">
                <Titles text="Посещаемое"/>

                <div className="tv_program_items">
                <p> 21:30 След  <a href="">Пятый канал</a></p>
                <p> 21:30 Вести  <a href="">Россия 24</a></p>
                <p> 21:35 Святыни Кремля  <a href="">ОТР</a></p>
                </div>
            </div>
        );
    }
}
export default TVprograms;