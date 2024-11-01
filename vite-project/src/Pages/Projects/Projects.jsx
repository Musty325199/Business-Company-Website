import React from 'react';
import '../Projects/Projects.css';
import Header from '../../Components/Header/Header';
import ContactAll from '../../Components/ContactAll/ContactAll';
import HeaderAll from '../../Components/HeaderAll/HeaderAll';
import about_img1 from '../../assets/about-image1.jpeg';
import { Container, Card} from 'react-bootstrap';

const Projects = () => {
  return (
    <>
<Header/>
    <HeaderAll name='PROJECTS'/>
<Container className='projects d-grid'>
<Card style={{ width: '30rem', border:'none' }}>
      <Card.Img variant="top" src={about_img1} />
      <Card.Body>
        <Card.Title>PROJECT 1</Card.Title>
        <Card.Text>
        I'm a paragraph. Click here to add your own text and edit me. 
        It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. 
        I’m a great place for you to tell a story and let your users know a little more about you.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '30rem', border:'none' }}>
      <Card.Img variant="top" src={about_img1} />
      <Card.Body>
        <Card.Title>PROJECT 2</Card.Title>
        <Card.Text>
        I'm a paragraph. Click here to add your own text and edit me. 
        It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. 
        I’m a great place for you to tell a story and let your users know a little more about you.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '30rem', border:'none' }}>
      <Card.Img variant="top" src={about_img1} />
      <Card.Body>
        <Card.Title>PROJECT 3</Card.Title>
        <Card.Text>
        I'm a paragraph. Click here to add your own text and edit me. 
        It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. 
        I’m a great place for you to tell a story and let your users know a little more about you.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '30rem', border:'none' }}>
      <Card.Img variant="top" src={about_img1} />
      <Card.Body>
        <Card.Title>PROJECT 4</Card.Title>
        <Card.Text>
        I'm a paragraph. Click here to add your own text and edit me. 
        It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. 
        I’m a great place for you to tell a story and let your users know a little more about you.
        </Card.Text>
      </Card.Body>
    </Card>
</Container>
<ContactAll/>
    </>
  )
}

export default Projects