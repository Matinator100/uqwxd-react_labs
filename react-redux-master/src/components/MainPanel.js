import React from 'react'
import MyButton from './MyButton'
import DivPanel from './DivPanel';

const MainPanel = ()=>{
    return (
        <div>
            This is main panel <MyButton ></MyButton>
            <MyButton shouldDecrease={true}></MyButton>
            <DivPanel></DivPanel>
        </div>
    );
}
export default MainPanel;