import React from 'react'

const TimeGreetings = () => {
let date = new Date();
let hour = date.getHours();
let mins = date.getMinutes();
let sec = date.getSeconds();
let greetings;

if(hour<12)
    {
        greetings = "Good Morning"
    }
else if (hour<18)
    {
        greetings = "Good Afternoon"
    }
else
    {
        greetings = "Good Evening"
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
    <div>
        <h3>Time : {hour}:{mins}:{sec}</h3>
        <h1>{greetings}</h1>
    </div>
  )
}

export default TimeGreetings