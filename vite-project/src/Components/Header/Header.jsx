import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Header/Header.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    const [menu, setMenu] = useState('home');
  return (
<Navbar expand="lg" className='navbar fixed-top'>
      <Container>
        <Navbar.Brand onClick={()=>setMenu('home')}><Link style={{textDecoration:'none'}} to='/' className='logo'>JAMES CONSULTING</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link onClick={()=>setMenu('about')}><Link style={{textDecoration:'none'}} to='/about' className='text-white'>About </Link> </Nav.Link>
            <Nav.Link onClick={()=>setMenu('projects')}><Link style={{textDecoration:'none'}} to='/projects' className='text-white'>Projects </Link> </Nav.Link>
            <Nav.Link onClick={()=>setMenu('services')}><Link style={{textDecoration:'none'}} to='/services' className='text-white'>Services </Link> </Nav.Link>
            <Nav.Link onClick={()=>setMenu('plans&pricing')}><Link style={{textDecoration:'none'}} to='/plans&pricing' className='text-white'>Plans & Pricing </Link> </Nav.Link>
            <Nav.Link onClick={()=>setMenu('tools')}><Link style={{textDecoration:'none'}} to='/tools' className='text-white'>Tools & Tips </Link> </Nav.Link>
            <Nav.Link onClick={()=>setMenu('contact')}><Link style={{textDecoration:'none'}} to='/contact' className='text-white'>Contact </Link> </Nav.Link>
            <Nav.Link onClick={()=>setMenu('login')}><Link style={{textDecoration:'none'}} to='/login' className='text-white'>          <img
              alt=""
              src="/src/assets/user-icon1.png"
              width="20"
              height="20"
              className="d-inline-block align-top mx-2"
            />{' '}Login
            </Link> </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Header