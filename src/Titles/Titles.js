
import React from 'react';
import './Titles.css';


class Titles extends React.Component{
    render(){
        return (
        <div className="titles">

                <a href="#"> {this.props.text}</a>

        </div>
        );
    }
}

export default Titles;