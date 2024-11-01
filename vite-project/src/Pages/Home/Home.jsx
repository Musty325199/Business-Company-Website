import { React, useState }from 'react'
import Header from '../../Components/Header/Header'
import {Container, Image, Carousel} from 'react-bootstrap';
import ExampleCarouselImage from '../../Components/ExampleCarouselImage/ExampleCarouselImage';
import '../Home/Home.css';
import home_bg from '../../assets/home-background.jpeg';
import about_bg from '../../assets/about-bg.jpg';
import ourClient_logos from '../../assets/our-client-logos.png';
import { Link } from 'react-router-dom';
import ContactAll from '../../Components/ContactAll/ContactAll';


const Home = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };


  return (
 <>
    <Header/>
    <Container style={{ 
      backgroundImage: `url(${home_bg})` 
    }} fluid className='home-first-container'>
    <div className="home-first-box">
        <h3 className='text-dark'>Developing Innovative </h3>
        <h2 className='text-dark text-uppercase' >achieving growth </h2>
        <button className='border border-dark p-2 ' style={{color:'#0C3C60', backgroundColor:'white'}} >Free Consultation</button>
    </div>
    </Container>
    <div className="d-flex mt-5">
     <div className="card p-2 border-0" fluid='true'>
        <h3 className='text-uppercase'>Services</h3>
        <p>I'm a paragraph. Click here to add your own text and edit me. 
            It’s easy. Just click “Edit Text” or double click me to add 
            your own content and make changes to the font. 
            I’m a great place for you to tell a story and let your users know a little more about you.</p>
            <button className='btn mx-5 p-3 border border-dark rounded-0'>More Info</button>
     </div>
     <div className="card p-2 border-0">
        <h3 className='text-uppercase'>Projects</h3>
        <p>I'm a paragraph. Click here to add your own text and edit me. 
            It’s easy. Just click “Edit Text” or double click me to add 
            your own content and make changes to the font. 
            I’m a great place for you to tell a story and let your users know a little more about you.</p>
            <button className='btn mx-5 p-3 border border-dark rounded-0'>More Info</button>
     </div>
     <div className="card p-2 border-0 ">
        <h3 className='text-uppercase'>Clients</h3>
        <p>I'm a paragraph. Click here to add your own text and edit me. 
            It’s easy. Just click “Edit Text” or double click me to add 
            your own content and make changes to the font. 
            I’m a great place for you to tell a story and let your users know a little more about you.</p>
            <button className='btn mx-5 p-3 border border-dark rounded-0'>More Info</button>
     </div>
    </div>

    <div className='about-con mt-5  d-flex' style={{ backgroundImage:` url(${about_bg})`, backgroundRepeat:"no-repeat", backgroundSize:'cover',
backgroundPosition:'center', opacity:'5'}}>
        <div className="about-con-overlay">
        <h1 className='text-uppercase head'>About us</h1>
        <p className='par'>I'm a paragraph. Click here to add your own text and edit me. 
            It’s easy. Just click “Edit Text” or double click me to add your own content and make changes 
            to the font. Feel free to drag and drop me anywhere you like on your page. 
            I’m a great place for you to tell a story and let your users know a little more about you.</p>
            <p className='par'>This is a great space to write a long text about your company and your services. 
                You can use this space to go into a little more detail about your company. T
                alk about your team and what services you provide. 
                Tell your visitors the story of how you came up with the idea for your business 
                and what makes you different from your competitors. 
                Make your company stand out and show your visitors who you are.</p>
        <Link to='/about'><button className='btn btn2 border border-dark rounded-0'>Learn More</button></Link>
        </div>
    </div>
    <div className='ourClient mt-5 d-flex'>
    <h1 className='text-uppercase head'>Our clients</h1>
    <Image src={ourClient_logos} fluid='true' />
    </div>
    <div className='testimonials mt-2 d-flex'>
    <h1 className='text-uppercase head'>Testimonials</h1>
    <Carousel activeIndex={index} onSelect={handleSelect} variant='dark' className='carousel'>
      <Carousel.Item>
        <ExampleCarouselImage text="“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”" />
        <Carousel.Caption>
        <p style={{color:'#0C3C60', fontWeight:'bold'}}>Project Manager</p>
        <p>Dora Bridges</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”" />
        <Carousel.Caption>
        <p style={{color:'#0C3C60', fontWeight:'bold'}}>Operations Manager</p>
        <p>Sima Patel</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”" />
        <Carousel.Caption>
          <p style={{color:'#0C3C60', fontWeight:'bold'}}>Managing Director</p>
          <p>Brad Stevens</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <ContactAll/>
 </>
  )
}

export default Home