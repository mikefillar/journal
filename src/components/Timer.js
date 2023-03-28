import React,{useState,useEffect} from 'react'
import UseRandomColor from './UseRandomColor';
const Timer = () => {
let {color,generateColor} = UseRandomColor();
let [seconds, setSeconds]= useState(0);
let [isActive, setIsActive] = useState(false);
function toggle()
    {
        setIsActive(!isActive);
    }
function reset()
    {
        setSeconds(0);
        setIsActive(false);
        document.getElementById("btnStart").innerHTML = "Start";
    }
// function generateColors()
//     {
//         document.getElementById("backDiv").style.backgroundColor = {generateColor};
//     }
useEffect(()=> {
    let interval = null;
    if (isActive)
        {
            interval = setInterval(()=> {
                setSeconds(second => second+1);
                generateColor()
            },1000);
        }
    else if(!isActive && seconds!==0)
        {
            clearInterval(interval);
        }
    return ()=> clearInterval(interval);
},[isActive,seconds]);
  return (
    <div id='backDiv' style={{textAlign:"center"}}>
        <h2 style={{backgroundColor:"#"+color}}>
            {seconds}
        </h2>
        <button id="btnStart" onClick={toggle}>{!isActive ? "Start" : "Pause"}</button>
        <button onClick={reset}>Reset</button>
        {/* <button onClick={generateColors}>Generate Random Color</button> */}
    </div>
  )
}

export default Timer