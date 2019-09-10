import React from 'react';
import './InputButtons.css';



class InputButtons extends React.Component{
    render(){
        return(
            <div className="imputButtons">
                <a href="https://yandex.ru/"> 
                    <span class= "search_voice"></span> 
                </a>
                <a href="https://yandex.ru/">
                    <span class=" search_tast"></span> 
                </a>
            </div>
        )
    }
}

export default InputButtons;