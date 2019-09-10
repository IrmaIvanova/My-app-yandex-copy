
import React from 'react';
import './Top.css';
import Titles from '../Titles/Titles.js';

function Top() {

  return (
    <div class="top">
        <Titles text="Посещаемое"/>
        <div class="top_items">
            <a href=""> <b>Маркет</b> </a> - <a href="">люстры и светильники</a>
            <a href=""> <b>Недвижимость</b> </a> - <a href="">динамика цен</a>
            <a href=""> <b>Авто.ру</b> </a> - <a href="">внедорожники до 6млн</a>
        </div>
    </div>
  );
}

export default Top;