import React from 'react';

import './traffic.css';


function Traffic() {
  return (
    <div className="traffiс">
        <div className="titles"><h1><a href="#">Пробки</a></h1> </div>
        <div className="items_traffic">
             <a href="#" className="traffic_scale"><span class="traffic_img"></span> 3</a> 

            <a href="#" className="traffic_description">  К 19 часам пробки вырастут до 7 баллов</a>
        </div>
    </div>
  );
}

export default Traffic;