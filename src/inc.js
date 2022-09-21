import React, {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0); 

    function remNegative() {
        if({count} = 0) {
            return 0;
        };
        if({count} >= 1) {
            return count - 1
        };
    };
    return (
        <div className='counter'>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)} id='Btn'>Increase</button>
            <button onClick={() => setCount(remNegative())} id='Btn'>Decrease</button>
        </div>
    );
}

export default Counter;