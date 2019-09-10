import React from 'react';

import './Weather.css';


function Weather() {
  return (
    <div className="Weather">
            <div class="titles"><h1><a href="#">Погода</a></h1> </div>
        <div class="items">
            <div class="tempriture"> <a href="#"> <span class="t_img"></span> +21</a> </div>
            <div class="t_night_morning">
                <a href="#">Ночью +19,</a>
                <a href="#">утром + 22</a>
            </div>
        </div>
    </div>
  );
}

export default Weather;