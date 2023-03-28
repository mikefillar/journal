import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React,{useState,useEffect,useRef} from 'react'

let retrieveData = localStorage.getItem("ContactData") ? JSON.parse(localStorage.getItem("ContactData")) : [];
function ContactUsForm() {
let fnameRef = useRef(null);
let lnameRef = useRef(null);
let emailRef = useRef(null);
let messageRef = useRef(null);
let [ID,setID] = useState(Date.now());
let [allContacts,setAllContacts] = useState([retrieveData]);
function handleSubmit(event)
    {
        event.preventDefault();
        let data = {
            ID: ID,
            FirstName: fnameRef.current.value,
            LastName: lnameRef.current.value,
            Email: emailRef.current.value,
            Message: messageRef.current.value,
        }
        setAllContacts([...allContacts,data]);
        alert(JSON.stringify(data));
    }
useEffect(()=>{
    localStorage.setItem("ContactData",JSON.stringify(allContacts));
},[allContacts])
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label for="fname">First Name</label>
            <input type="text" name="fname" id='fname' ref={fnameRef} required/><br/>
            <label for="lname">Last Name</label>
            <input type="text" name="lname" id='lname' ref={lnameRef} required/><br/>
            <label for="email">Email</label>
            <input type="email" name="email" id='email' ref={emailRef} required/><br/>
            <textarea rows="5" cols="30" name='message' ref={messageRef}></textarea><br/>
            <button type="submit">Send Message</button>
        </form>
    </div>
  )
}

export default ContactUsForm