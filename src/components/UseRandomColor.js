import React,{useState} from 'react';

const UseRandomColor = () => {
let [color,setColor] = useState("");
let generateColor = ()=>{
    setColor(Math.random().toString(16).substr(-6));
}
return {color,generateColor};
}
export default UseRandomColor