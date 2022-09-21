import React, {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0); 
    return (
        <div className='counter'>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)} id='Btn'>Increase</button>
            <button onClick={() => setCount(remNegative())} id='Btn'>Decrease</button>
        </div>
    );

    function remNegative() {
        if({count} = 0) {
            return 0;
        }
        if({count} > 0) {
            return count - 1
        }
    };
}


export default Counter;