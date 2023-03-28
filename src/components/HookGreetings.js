import React,{useState, useEffect} from 'react'

const HookGreetings = () => {
let date = new Date();
let hour = date.getHours();
let mins = date.getMinutes();
let sec = date.getSeconds();
let [time, setTime] = useState(hour);

// useEffect(()=>{
//     setInterval(()=>{
//         setTime(sec);
//     },1000)
// },[])
let greet
if (time>5 &&time<12)
    {
        greet = "Good Morning"
    }
else if(time >12 && time<18)
    {
        greet = "Good Afternoon"
    }
else
    {
        greet = "Good Evening"
    }
if (sec<10)
    {
        sec = "0" + sec;
    }
if (mins<10)
    {
        sec = "0" + sec;
    }
if (hour<10)
    {
        sec = "0" + sec;
    }
  return (
    <div><h3>Time : {hour + ":" + mins + ":" + sec}</h3>
        <h1>{greet}</h1></div>
  )
}

export default HookGreetings