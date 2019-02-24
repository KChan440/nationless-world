import React, {Component} from 'react';
import Image from 'react-bootstrap/Image';
import {Navbar, Nav} from 'react-bootstrap/';

import styled from 'styled-components';
import '../style/about.css';

export default class About extends Component{
    render(){
        return(
            <div>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand className="nav-brand" href="#home">Nationless World</Navbar.Brand>
            <Navbar.Collapse>
            <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Survey">Questionnaire</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
            <div className="about-body">
            <h1>Our Story</h1>
            <p className="paragraph">Throughout human history, there has lived and endured a belief in the unity of all humanity - an understanding that there is, at our foundation, a common and essential soil of being human. But it has not been until today, in this moment of history, that the true coming together of humankind has become realizable.

</p>
<p className="paragraph">
Emerging Face of a Nationless World is a campaign to connect the voices and stories of distinct communities, worldwide, to show the inter-connected nature of our global experiences and struggles; and to create a platform to facilitate increased communication and collaboration between these communities, ultimately towards building a greater sense of "oneness".

            </p>
            <p className="paragraph">
Already with participation from groups across the United States, in China, France, Nigeria, Chile, and the Philippines, the Nationless World campaign has also received the commitment of support from such organizations as National Geographic.
            </p>
            </div>

            </div>

        )
    }
}
