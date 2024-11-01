import React, { useState } from 'react'
import '../ContactAll/ContactAll.css';
import { Form, Button } from 'react-bootstrap';


const ContactAll = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

  return (
<>
<div className='contactAll d-flex'>
    <h1 className='text-uppercase head'>Contact</h1>
    <Form noValidate validated={validated} onSubmit={handleSubmit} className='form1'>
        <Form.Group controlId="validationCustom01" className='name-group'>
         <div className="fName">
         <Form.Label>First name*</Form.Label>
         <Form.Control className='input rounded-0' required type="text"/>
        <Form.Control.Feedback type="invalid">Please enter your firstname.</Form.Control.Feedback>
         </div>

        <div className="fName">
        <Form.Label >Last name*</Form.Label>
        <Form.Control  className='input rounded-0' required type="text" />
        <Form.Control.Feedback type="invalid">Please enter your lastname.</Form.Control.Feedback>
        </div>
        </Form.Group>

        <Form.Group controlId="validationCustom02" className='name-group'>
          <div className='email'>
          <Form.Label>Email*</Form.Label>
          <Form.Control className='input rounded-0' required type="email" />
          <Form.Control.Feedback type="invalid">Enter an email address like example@mysite.com.</Form.Control.Feedback>
          </div>

         <div className="email">
         <Form.Label>Subject</Form.Label>
          <Form.Control className='input rounded-0' type="text" />
         </div>
        </Form.Group>
        <div className="message">
        <Form.Label className='message-label'>Message</Form.Label>
        <Form.Control className='message-input rounded-0' required type="textarea" />
        <Form.Control.Feedback type="invalid">Enter an answer</Form.Control.Feedback>
        </div>

      <Button type="submit" className='contact-btn border-0 rounded-0'>Submit form</Button>
    </Form>
    </div>
        <div className="map-section">
        <iframe width="70%" height="200" frameBorder="1" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=500%20Terry%20Francine%20Street,%20%20San%20Francisco,%20CA%2094158+(JAMES%20CONSULTING)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>
            </div>
</>
  )
}

export default ContactAll