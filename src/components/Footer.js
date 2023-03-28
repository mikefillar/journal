import React from 'react'
// import '../App.css'
import Greetings from './Greetings'
const Footer = () => {
let styles = {
  color: "red",
}
  return (
    <div>
          <Greetings pangalan = "Raffy Tulfo"/>
          <h2 style={styles}>This is a footer</h2>
    </div>

  )
}

export default Footer