import React from "react";
import "@brainhubeu/react-carousel/lib/style.css";


class FilmName extends React.Component{
    render(){
        return(
            <div className="FilmName">
                  {this.props.text}
            </div>
        )
    }
}

export default FilmName;