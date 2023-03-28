import React from 'react'

const Greetings = (props) => {
  //   const firstname = "Mike";
  // const lastname = "fillar";
  const greetings = <h4>Mabuhay {props.pangalan}</h4>
  return (
    <div>{greetings}</div>
  )
}

export default Greetings