import React from "react";

function FirstAlert() {

    function theAlert(a){
         return alert(a)
    };

    return (
        <div>
            <button className="exitBtn" onClick={()=> (theAlert('Are you sure?'))}>Exit</button>
        </div>
    );
};

export default FirstAlert;