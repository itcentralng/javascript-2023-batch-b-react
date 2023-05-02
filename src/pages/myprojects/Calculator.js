import React from "react";
import { useState } from 'react';

const Calculator = ()=>{
    const [screenValue, setScreenValue] = useState("0.0")

    const handleButtonClick = (e)=>{
      let icon = e.target.value;
      if (icon === 'AC'){
        setScreenValue('0.0')
      }else if (icon === "="){
        setScreenValue(eval(screenValue))
      }else{
        if (screenValue==='0.0'){
          setScreenValue(icon);
        }else{
          setScreenValue(screenValue+icon);
  
        }
      }
    }
  
    const iconlist = [
      ["AC", "%", "/", "+/-"],
      ["1", "2", "3", "+"],
      ["4", "5", "6", "-"],
      ["7", "8", "9", "*"],
      [".", "0", "=", ""],
    ]
  
    const Screen = ()=>{
      return <div className='screen'>{screenValue}</div>
    }
  
    const Buttons = ()=>{
      return <div className='buttons'>
        {
          iconlist.map(icons=>
            <div className='buttonContainer'>
              {
                icons.map(icon=>
                  <button className='button' onClick={handleButtonClick} value={icon}>{icon}</button>
                  )
              }
            </div>
            )
        }
      </div>
    }
  
    return (
      <div className="container">
        <Screen/>
        <Buttons/>
      </div>
    );  
}

export default Calculator;