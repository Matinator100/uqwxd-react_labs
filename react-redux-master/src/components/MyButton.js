import React from 'react'
import { useDispatch} from 'react-redux';
import {increment, decrement} from '../action'

const MyButton = ({shouldDecrease})=>{
    let dispatch = useDispatch();
    return (
        <button onClick={()=> shouldDecrease  ?dispatch(decrement(1)) : dispatch(increment(1))   }>{shouldDecrease ?  "Decrease counter" : "Increase Counter"} </button>
    );
}

export default MyButton;
