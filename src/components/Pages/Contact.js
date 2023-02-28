import React, { useState } from "react"; // name,email,phone
import { Button, Form} from 'react-bootstrap';
import './Contact.css'

const ContactUs=()=>{
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [phoneNo, setPhone]=useState('');

    const nameHandler=(e)=>{
        setName(e.target.value);
    };
    const emailHandler=(e)=>{
        setEmail(e.target.value);
    };
    const phoneHandler=(e)=>{
        setPhone(e.target.value);
    };
    const submitCon=async (event)=>{
        event.preventDefault();

        let contact={
            'name': name,
            'email': email,
            'phoneNo': phoneNo 
        }
        const response= await fetch('https://react-api-ef804-default-rtdb.firebaseio.com/contact.json', {
            method: 'POST',
            body: JSON.stringify(contact),
        });
        const data= await response.json();
        console.log(data);
        setName('');
        setEmail('');
        setPhone('');
    }

    return (
        <Form className="form" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" id="name" 
        value={name} 
        onChange={nameHandler}/>
        <Form.Label>Email ID</Form.Label>
        <Form.Control type="email" id="email"
        value={email}
        onChange={emailHandler} />
        <Form.Label>Phone No.</Form.Label>
        <Form.Control type="tel" id="phoneNo"
        value={phoneNo}
        onChange={phoneHandler}/>
        <Button onClick={submitCon} type="submit" >Submit</Button>
        </Form>
    );
}
export default ContactUs;