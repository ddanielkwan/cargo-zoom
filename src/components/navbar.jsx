import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'


import { cargoServices } from "../services/general";
const NavBar = () => {

    
    // const [statevariable, varaiblechagnefucntion] = useState(defaultvalue)
    const [x, setX] = useState('x')

    const  getCompanies =  async () => { 
        const res = await cargoServices.getAllCompanies()

        console.log(res)
    }
    getCompanies()
    return (
        
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">{x}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Button onClick={()=>setX('a')}>Button</Button>
        </Container>
      </Navbar>
    )


}

export default NavBar;