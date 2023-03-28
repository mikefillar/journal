import React from 'react'

const ContactCardDetails = (props) => {
  return (
    <div className='contact-card'>
        <img src={props.contact.imgUrl} alt={props.contact.name}/>
        <h3>Name: {props.contact.name} </h3>
        <p>Mobile: {props.contact.phoneNum}</p>
        <p>Email: {props.contact.email} </p>
    </div>
  )
}

export default ContactCardDetails