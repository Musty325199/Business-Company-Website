import React from 'react';
import '../Services/Services.css';
import Header from '../../Components/Header/Header';
import ContactAll from '../../Components/ContactAll/ContactAll';
import HeaderAll from '../../Components/HeaderAll/HeaderAll';
import { Container, Button } from 'react-bootstrap';
import about_img1 from '../../assets/about-image1.jpeg';


const Services = () => {
  return (
    <>
<Header/>
<HeaderAll name='SERVICES'/>
<Container className='services d-flex'>
  <div className="service-card d-grid">
    <div className="service-card-image">
      <img src={about_img1} alt="" />
    </div>
    <div className="service-card-text">
      <h3 className="service-card-title">FREE CONSULTATION</h3>
      <p className='service-card-time'>45 min</p>
      <Button className='service-book-btn rounded-0'>Book Now</Button>
    </div>
  </div>

  <div className="service-card d-grid">
    <div className="service-card-image">
      <img src={about_img1} alt="" />
    </div>
    <div className="service-card-text">
      <h3 className="service-card-title">PROJECT MANAGEMENT</h3>
      <p className='service-card-time'>1 hr</p>
      <p className="service-card-price">$220</p>
      <Button className='service-book-btn rounded-0'>Book Now</Button>
    </div>
  </div>

  <div className="service-card d-grid">
    <div className="service-card-image">
      <img src={about_img1} alt="" />
    </div>
    <div className="service-card-text">
      <h3 className="service-card-title">OPERATIONAL CONSULTING</h3>
      <p className='service-card-time'>1 hr</p>
      <p className="service-card-price">$150</p>
      <Button className='service-book-btn rounded-0'>Book Now</Button>
    </div>
  </div>

  <div className="service-card d-grid">
    <div className="service-card-image">
      <img src={about_img1} alt="" />
    </div>
    <div className="service-card-text">
      <h3 className="service-card-title">CORPORATE STRATEGY</h3>
      <p className='service-card-time'>1 hr</p>
      <p className="service-card-price">$170</p>
      <Button className='service-book-btn rounded-0'>Book Now</Button>
    </div>
  </div>
</Container>
<ContactAll/>
    </>
  )
}

export default Services