import React from 'react';
import './InfoWall.css';
import Weather from './Weather.js';
import Traffic from './Traffic.js';
import Map from './Map.js';
import Top from './Top.js';
import TVprograms from './TVprograms.js';
import Online from './Online.js';


class InfoWall extends React.Component{
    render(){
        return(
            <div className='info_wall'>
                <Weather/>
                <Traffic/>
                <Map/>
                <Top/>
                <TVprograms/>
                <Online/>
            </div>
        )
    }
}

 export default InfoWall;