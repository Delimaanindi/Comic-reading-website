import React from "react";
import Rating from '../rating.png'
import '../styles/card.css'
import Button from 'react-bootstrap/Button';


export default function Comiccard(props) {
    // props of cards
    const {image, title, synopsis} = props;

    return(
        <>
            <div className="cardcont">
                <img src={image} className="comicthumb" alt="thumbnail"  />
                <div className="cardcontent">
                <p id="title"><b>{title}</b></p>
                <p id="synopsis">{synopsis}</p>
                <img src={Rating} alt="rating" id="rating"/>
                </div> 
                <Button variant='primary' id='readBtn' onClick={(e) => {e.preventDefault(window.location.href= '/stories')}}><b>Read</b></Button>
            </div>
        </>
    )
}