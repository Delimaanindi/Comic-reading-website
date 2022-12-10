import React, {useState} from "react";
import '../styles/regis.css'
import { useState } from 'react';

export default function Regisdone() {
    

    return(
        <>
        <div className="container">
            <div className="congrats">
                <h1 className="done">Congratulation, Your Account is created!</h1>
                <button id="doneBtn">Start Reading!</button>
            </div>
        </div>
        </>
    )
}