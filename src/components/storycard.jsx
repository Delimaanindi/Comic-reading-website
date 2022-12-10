import React from "react";

export default function Storycard(props) {

    const {image, sinopsys} = props;

    return(
        <>
        <div className="story-cont">
            <img src={image} alt="" id="stories"/>
            <p id='shortsum'>{sinopsys}</p>
        </div>
        <button id="backBtn">Home</button>
        </>
    )
}