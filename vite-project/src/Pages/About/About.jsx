import React from 'react';
import '../../Pages/About/About.css';
import Header from '../../Components/Header/Header';
import ContactAll from '../../Components/ContactAll/ContactAll';
import HeaderAll from '../../Components/HeaderAll/HeaderAll';
import about_img1 from '../../assets/about-image1.jpeg';
import {Card, Container, Button} from 'react-bootstrap';


const About = () => {
  return (
<>
<Header/>
<HeaderAll name='ABOUT'/>
<div className='about'>
<div className="section">
<div className="about-text">
    <p className='about-title' fluid='true'>
    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” 
    or double click me to add your own content and make changes to the font. Feel free to drag and 
    drop me anywhere you like on your page. 
    I’m a great place for you to tell a story and let your users know a little more about you.
This is a great space to write a long text about your company and your services. 
You can use this space to go into a little more detail about your company. 
Talk about your team and what services you provide. Tell your visitors the 
story of how you came up with the idea for your business and what makes you different from your competitors. 
Make your company stand out and show your visitors who you are.

    </p>
</div>
<div className="about-image">
    <img src={about_img1} alt="" />
</div>

</div>
<h1 className='text-uppercase head about-head text-center'>our team</h1>
<Container className='team-container d-grid'>
<Card style={{ width: '30rem',border:'none' }}>
      <Card.Img variant="top" src={about_img1} />
      <Card.Body>
        <Card.Title>DOMINICK JAMES</Card.Title>
        <p>Founder and Principal</p>
        <Card.Text>
        I'm a paragraph. Click here to add your own text and edit me. 
        It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. 
        I’m a great place for you to tell a story and let your users know a little more about you.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '30rem',border:'none' }}>
      <Card.Img variant="top" src={about_img1} />
      <Card.Body>
        <Card.Title>GRACE RIOS</Card.Title>
        <p>Project Manager</p>
        <Card.Text>
        I'm a paragraph. Click here to add your own text and edit me. 
        It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. 
        I’m a great place for you to tell a story and let your users know a little more about you.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '30rem',border:'none' }}>
      <Card.Img variant="top" src={about_img1} />
      <Card.Body>
        <Card.Title>KIM BAILEY</Card.Title>
        <p>VP Marketing</p>
        <Card.Text>
        I'm a paragraph. Click here to add your own text and edit me. 
        It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. 
        I’m a great place for you to tell a story and let your users know a little more about you.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '30rem',border:'none' }}>
      <Card.Img variant="top" src={about_img1} />
      <Card.Body>
        <Card.Title>TREVOR SINCLAIR</Card.Title>
        <p>VP Accounts</p>
        <Card.Text>
        I'm a paragraph. Click here to add your own text and edit me. 
        It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. 
        I’m a great place for you to tell a story and let your users know a little more about you.
        </Card.Text>
      </Card.Body>
    </Card>
    <Button className='free-con rounded-0 border-color-dark'>Free Consultation</Button>
</Container>
</div>
<ContactAll/>


</>
  )
}

export default About