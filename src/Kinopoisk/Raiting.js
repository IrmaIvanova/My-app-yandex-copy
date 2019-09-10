import React from 'react';
import './Raiting.css';




class Raiting extends React.Component{
    render(){
        return (
        <div className="raiting">
                <span>{this.props.text}</span>
        </div>
        );
    }
}

export default Raiting;