import React, {useEffect, useState} from 'react'
import useCustomEffect from '../custom-hooks/useCustomEffect';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [counter1, setCounter1] = useState(0)

    useEffect(()=>{
        console.log("Effect triggered")

        return ()=>{
            console.log("cleanup triggered")
        }
    },[counter])

    console.log("Component rerendered")
    return (
        <div>
            <div>
                <button onClick={() => setCounter(counter + 1)}>Increment</button>
            </div>
            <div>
                <button onClick={() => setCounter1(counter1 + 1)}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter