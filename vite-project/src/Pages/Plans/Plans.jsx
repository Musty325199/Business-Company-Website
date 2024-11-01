import React from 'react';
import '../Plans/Plans.css';
import Header from '../../Components/Header/Header';
import ContactAll from '../../Components/ContactAll/ContactAll';
import HeaderAll from '../../Components/HeaderAll/HeaderAll';
import { Container, Button } from 'react-bootstrap';
import check_icon from '../../assets/check-icon.png';

const Plans = () => {
  return (
<>
<HeaderAll name='OUR PLANS' />
<p className='plan-sub-text text-center'>We help businesses improve their performance through 
  innovation in products, services, and strategy.</p>
<Container className='plans  d-grid'>
  <div className="plan-card d-flex mx-4">
    <div className="plan-first">
    <h5 className="plan-name">Management 101</h5>
    <div className="plan-price d-flex">
      <span>$</span>
      <h1>50</h1>
    </div>
    <p className="plan-des">Actualize your business model and boost your KPIs</p>
    <p className="plan-duration">Valid for 3 months</p>
    <Button className='plan-card-btn rounded-0 border-0'>Select</Button>
    </div>
    <div className="plan-second">
      <div className="features">
        <img src={check_icon} alt="" width='18px' />
        <span>1 Goal setting consultation</span>
      </div>
      <div className="features">
        <img src={check_icon} alt="" width='18px'/>
        <span>3 Individual sessions</span>
      </div>
      <div className="features">
        <img src={check_icon} alt="" width='18px'/>
        <span>Online resources</span>
      </div>
    </div>
  </div>

  <div className="plan-card plan-card-second d-flex mx-4">
    <div className="plan-first">
      <span className="best-val">Best Value</span>
    <h5 className="plan-name">Financial Strategy</h5>
    <div className="plan-price d-flex">
      <span>$</span>
      <h1>100</h1>
    </div>
    <p className="plan-des">Add value and maximize your competitive advantage</p>
    <p className="plan-duration">Valid for 6 months</p>
    <Button className='plan-card-btn rounded-0 border-0'>Select</Button>
    </div>
    <div className="plan-second">
      <div className="features">
        <img src={check_icon} alt="" width='18px' />
        <span>1 Monthly goal setting meeting</span>
      </div>
      <div className="features">
        <img src={check_icon} alt="" width='18px'/>
        <span>Unlimited individual sessions</span>
      </div>
      <div className="features">
        <img src={check_icon} alt="" width='18px'/>
        <span>Online resources</span>
      </div>

      <div className="features">
        <img src={check_icon} alt="" width='18px'/>
        <span>Phone support</span>
      </div>

      <div className="features">
        <img src={check_icon} alt="" width='18px'/>
        <span>Weekly newsletter</span>
      </div>
    </div>
  </div>

  <div className="plan-card d-flex mx-4">
    <div className="plan-first">
    <h5 className="plan-name">Data and Digital Sol</h5>
    <div className="plan-price d-flex">
      <span>$</span>
      <h1>70</h1>
    </div>
    <p className="plan-des">Harness the power of technology to upgrade your business</p>
    <p className="plan-duration">Valid for 12 months</p>
    <Button className='plan-card-btn rounded-0 border-0'>Select</Button>
    </div>
    <div className="plan-second">
      <div className="features">
        <img src={check_icon} alt="" width='18px' />
        <span>1 Monthly goal setting meeting</span>
      </div>
      <div className="features">
        <img src={check_icon} alt="" width='18px'/>
        <span>4 Individual sessions</span>
      </div>
      <div className="features">
        <img src={check_icon} alt="" width='18px'/>
        <span>Online resources</span>
      </div>
      <div className="features">
        <img src={check_icon} alt="" width='18px' />
        <span>1 Guest pass</span>
      </div>
      <div className="features">
        <img src={check_icon} alt="" width='18px'/>
        <span>Phone support</span>
      </div>
      <div className="features">
        <img src={check_icon} alt="" width='18px'/>
        <span>Weekly newsletter</span>
      </div>
      <div className="features">
        <img src={check_icon} alt="" width='18px'/>
        <span>Priority support</span>
      </div>
    </div>
  </div>
</Container>
<Header/>
<ContactAll/>

</>
  )
}

export default Plans