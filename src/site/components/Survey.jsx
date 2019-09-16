import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap/';
import {ToggleButton, ToggleButtonGroup} from 'react-bootstrap';
import EnglishQuestions from './EnglishQuestions';
import SpanishQuestions from './SpanishQuestions';
import FrenchQuestions from './FrenchQuestions';



export default class Survey extends Component{
    constructor(props){
        super(props);
        this.state = {
            modelType: 'English',
        }
    }

    render(){
        
        var modelType = this.state.modelType;

        return(
            <div>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand className="nav-brand" href="#home">Nationless World</Navbar.Brand>
            <Navbar.Collapse>
            <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>

            <div className="survey-body">
            <ToggleButtonGroup
                type="radio"
                name="options"
                style={{display:"block"}}
                value={this.state.modelType}
                onChange={(modelType) => {
                    this.setState({modelType});
                }}
            >
            <ToggleButton  className="language_toggle_button" value='English'>English</ToggleButton>
            <ToggleButton  className="language_toggle_button" value='Spanish'>Spanish</ToggleButton>
            <ToggleButton  className="language_toggle_button" value='French'>French</ToggleButton>
 
            </ToggleButtonGroup>

            

            {(modelType === 'English') ? (
                <EnglishQuestions submitQuestion={this.handleSubmit}/>
            ) : (modelType === 'Spanish') ? (
                <SpanishQuestions/>
            ) : (modelType === 'French') ? (
                <FrenchQuestions/>
            ) : (
                null
            )}
            
            </div>
            </div>
        )
    }
}
