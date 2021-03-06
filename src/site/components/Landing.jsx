import React, {Component} from 'react';
import {Navbar, Nav,} from 'react-bootstrap/';

import styled from 'styled-components';
import '../style/landing.css';


const BottomBar = styled.div`
background-color: black;
height: 80px;
position: fixed;
bottom: 0;
width: 100%;
`;
export default class Landing extends Component{
    render(){
        return(
            <div>
            <Navbar className="black" bg="dark" variant="dark">
            <Navbar.Brand className="nav-brand" href="#home">Nationless World</Navbar.Brand>
            <Navbar.Collapse>
            <Nav className="ml-auto">
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Survey">Questionnaire</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
            <BottomBar/>
            </div>
        )
    }
}
