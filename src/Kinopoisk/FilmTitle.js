import React from 'react';




class FilmTitle extends React.Component{
    render(){
        return (
        <div className="filmtitle">

                <a href="#">{this.props.text}</a>
    
        </div>
        );
    }
}

export default FilmTitle;