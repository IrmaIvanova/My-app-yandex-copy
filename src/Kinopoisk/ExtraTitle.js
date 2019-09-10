import React from 'react';
import './Extratitle.css';




class Extratitle extends React.Component{
    render(){
        return (
        <div className="extratitle">

                <a href="#">{this.props.text}</a>
    
        </div>
        );
    }
}

export default Extratitle;