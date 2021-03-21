import React from 'react'
import {Navbar,Nav,Form,FormControl,Button, Container, Row} from 'react-bootstrap'
import { Home } from '../Home'
import { Skills } from '../Skills'
import './navbar.css'
export const Navbars = () => {
    return (
        <div className="background">
          <Container >
            <Row>
            <Navbar>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto ">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Skills</Nav.Link>
      <Nav.Link href="#pricing">AboutUs</Nav.Link>
      <Nav.Link href="#pricing">Project</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    
  </Navbar>
            </Row>
   
              <Home/>
          
  </Container>
        </div>
    )
}
