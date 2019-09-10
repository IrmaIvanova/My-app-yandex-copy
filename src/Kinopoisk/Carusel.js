import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import './Carusel.css';

import one from './img/1.jpeg';
import two from './img/2.jpeg';
import tree from './img/3.jpeg';
import four from './img/4.jpeg';
import five from './img/5.jpeg';
import six from './img/6.jpeg';
import seven from './img/7.jpeg';
import Raiting from './Raiting.js';
import FilmTitle from './FilmTitle.js';
import MediaPlay from './MediaPlay.js';

class Carusel extends React.Component {
  render(){
    return(
          <div className="Carusel">
                <Carousel 
                slidesPerPage={6.5}
                slidesPerScroll={7}
                animationSpeed={1500}
                offset= {10}
                itemWidth={130}
                clickToChange
                infinite
                arrows >


                    <div className="poster">
                        <img className='poster' src={one} alt="academy"/>
                        <MediaPlay className="media-play"/>
                        <Raiting text='8,7'/>
                        <FilmTitle text="Великая война" /> 
                    </div>
                    <div className="poster">
                        <img className='poster' src={two} alt="academy"/>
                        <MediaPlay className="media-play"/>
                        <Raiting text='8,7'/>
                        <FilmTitle text="СМЕРШ" /> 
                    </div>
                    <div className="poster">
                        <img className='poster' src={tree} alt="academy"/>
                        <MediaPlay className="media-play"/>
                        <Raiting text='8,7'/>
                        <FilmTitle text="Сигнал" /> 
                    </div>
                    <div className="poster">
                        <img className='poster' src={four} alt="academy"/>
                        <MediaPlay className="media-play"/>
                        <Raiting className="raiting" text='8,7'/>
                        <FilmTitle text="Императрица Ки" /> 
                    </div>
                    <div className="poster">
                        <img className='poster' src={five} alt="academy"/>
                        <MediaPlay className="media-play"/>
                        <Raiting text='8,7'/>
                        <FilmTitle text="Хилер" /> 
                    </div>
                    <div className="poster">
                        <img className='poster' src={six} alt="academy"/>
                        <MediaPlay className="media-play"/>
                        <Raiting text='8,7'/>
                        <FilmTitle text="Первая Мировая" /> 
                    </div>
                    <div className="poster">
                        <img className='poster' src={seven} alt="academy"/>
                        <MediaPlay className="media-play"/>
                        <Raiting text='8,7'/>
                        <FilmTitle text="Бригада" /> 
                    </div>
                    <div className="poster">
                        <img className='poster' src={one} alt="academy"/>
                        <MediaPlay className="media-play"/>
                        <Raiting text='8,7'/>
                        <FilmTitle text="Великая война" /> 
                    </div>
                    <div className="poster">
                        <img className='poster' src={two} alt="academy"/>
                        <MediaPlay className="media-play"/>
                        <Raiting text='8,7'/>
                        <FilmTitle text="СМЕРШ" /> 
                    </div>
                    <div className="poster">
                        <img className='poster' src={tree} alt="academy"/>
                        <MediaPlay className="media-play"/>
                        <Raiting text='8,7'/>
                        <FilmTitle text="Сигнал" /> 
                    </div>
                    <div className="poster">
                        <img className='poster' src={four} alt="academy"/>
                        <MediaPlay className="media-play"/>
                        <Raiting text='8,7'/>
                        <FilmTitle text="Императрица Ки" /> 
                    </div>
                    <div className="poster">
                        <img className='poster' src={five} alt="academy"/>
                        <MediaPlay className="media-play"/>
                        <Raiting text='8,7'/>
                        <FilmTitle text="Хилер" /> 
                    </div>
                    <div className="poster">
                        <img className='poster' src={six} alt="academy"/>
                        <MediaPlay className="media-play"/>
                        <Raiting text='8,7'/>
                        <FilmTitle text="Первая Мировая" /> 
                    </div>
                    <div className="poster">
                        <img className='poster' src={seven} alt="academy"/>
                        <MediaPlay className="media-play"/>
                        <Raiting text='8,7'/>
                        <FilmTitle text="Бригада" /> 
                    </div>
                </Carousel>
                
        </div>
    )
    }
}

export default Carusel;


