import React from 'react';
import './SearchBox.css';
import logo from './logo.svg';
import Tabs from '../Tabs/Tabs.js';
import SearchExample from '../Tabs/SearchExample.js';
import InputButtons from './InputButtons.js'

class SearchBox extends React.Component{
    render(){
        return(
            <div className="Search_container">
                    <Tabs/>
                   <form className="input_search" action="https://yandex.ru/search/touch/?">
                      <input type="text" name="text" />
                        <InputButtons/>
                      <button type="submit" class="btn_search btn_search_head" tabindex="-1"> <span class="btn_search_text">Найти</span> </button>
                    </form>
                    <img className="logoYandex" src={logo} alt="logoYandex"/>
                    <SearchExample/>
            </div> 
                  );
                }
              }
            
           
export default SearchBox;