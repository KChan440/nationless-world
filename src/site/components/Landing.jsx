import React, {Component} from 'react';
import Image from 'react-bootstrap/Image';
import {Navbar, Nav,} from 'react-bootstrap/';

import styled from 'styled-components';
import '../style/landing.css';

export default class Landing extends Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Nationless World</Navbar.Brand>
            <Navbar.Collapse>
            <Nav className="ml-auto">
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Survey">Questionnaire</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}
