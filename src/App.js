import React from 'react';
import './App.css';
import Navbar from './navbar/Navbar.js';
import NewsBar from './News_bar/NewsBar.js';
import SearchBox from './SearchBox/SearchBox';
import AdvBlock from './adv_box/AdvBlock.js';
import InfoWall from './InfoWall/InfoWall.js';
import Carusel from './Kinopoisk/Carusel';
import Extratitle from './Kinopoisk/ExtraTitle.js';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      
      <Navbar/>
      <NewsBar/>
      <SearchBox/>
      <AdvBlock/>
      <InfoWall/>
      <Extratitle text="Кинопоиск"/>
      <Carusel/>


      
    </div>
  );
}

export default App;
