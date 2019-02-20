import React, {Component} from 'react';
import {Redirect, Switch} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap/';
import firebase from '../../firebase';
import '../style/survey.css';

export default class Survey extends Component{
    constructor(props){
        super(props);
        this.database = firebase.database().ref().child('responses');
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const params = {
            name: this.inputName.value,
            location: this.inputLocation.value,
            "Can you think of any quotes, short stories, or proverbs that you feel do a good job of representing your country and its people?" : this.inputQuotes.value,
            "What are some facts about your country that you feel the rest of the world should know to better understand your country and its people?" : this.inputFacts.value,
            "What are ways that you feel other people misunderstand your country?" : this.inputMisunderstand.value,
            "Are there any particularly meaningful ways you could describe your country in a word? (You can list more than one)" : this.inputMeaningful.value,
            "Are there any particularly meaningful ways you could describe your country in a short phrase?" : this.inputPhrase.value,
            "Are there any particularly meaningful ways you could describe your country in a short statement?" : this.inputStatement.value,
            "What are the most important things happening in your city and country right now?" : this.inputImportant.value,
            "How would you describe the mood of people in your country right now? The mood of young people? The mood of older people? The mood of people concerned with business? The mood of people concerned with culture?" : this.inputMood.value,
            "What are your hopes for the future of your country?" : this.inputHopes.value,
            "What are your concerns for the future of your country?" : this.inputConcerns.value,
            "Can you describe a best case vision for the future of your country?" : this.inputBestVision.value,
            "Can you describe a worst case vision for the future of your country?" : this.inputWorstVision.value,
            "What message would you like to share with the rest of the world, on behalf of your land and its people?" : this.inputMessage.value

        }

        if (params.name && params.location){
            this.database.push().set({
                name: params.name,
                data: params
            })
                    }else{
            alert("You haven't inputted a name and location!");
        }
                window.location.href = '/';


    }

    render(){

        return(
            <div>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Nationless World</Navbar.Brand>
            <Navbar.Collapse>
            <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>

            <div className="survey-body">

            <div id="header">
            <div className="header-body">
            <h2>Nationless World Short Questionnaire</h2>
            </div>
            </div>

            <div id="questions">
            <form className="questions-form" onSubmit={this.handleSubmit}>

            <div className="form-group">
            <label htmlFor="name">Please list your full name*</label>
            <input className="text-box" type="text" name="name" ref={name => this.inputName = name} required/>
            </div>

            <div className="form-group">
            <label htmlFor="location" >Please list your: city, country*</label>
            <input className="text-box" type="text" name="location" ref={location => this.inputLocation = location} required/>
            </div>

            <div className="form-group">
            <label htmlFor="quotes">Can you think of any quotes, short stories, or proverbs that you feel do a good job of representing your country and its people?</label>
            <textarea className="text-area" rows="5" type="text" name="quotes" ref={quotes => this.inputQuotes = quotes} />
            </div>

            <div className="form-group">
            <label htmlFor="facts">What are some facts about your country that you feel the rest of the world should know to better understand your country and its people?</label>
            <textarea className="text-area" rows="5" type="text" name="facts" ref={facts => this.inputFacts = facts}/>
            </div>

            <div className="form-group">
            <label htmlFor="misunderstand">What are ways that you feel other people misunderstand your country? </label>
            <textarea className="text-area" rows="5" type="text" name="misunderstand" ref={misunderstand => this.inputMisunderstand = misunderstand}/>
            </div>

            <div className="form-group">
            <label htmlFor="meaningful">Are there any particularly meaningful ways you could describe your country in a word? (You can list more than one)</label>
            <textarea className="text-area" rows="5" type="text" name="meaningful" ref={meaningful => this.inputMeaningful = meaningful}/>
            </div>

            <div className="form-group">
            <label htmlFor="phrase">Are there any particularly meaningful ways you could describe your country in a short phrase?</label>
            <textarea className="text-area" rows="5" type="text" name="phrase" ref={phrase => this.inputPhrase = phrase}/>
            </div>

            <div className="form-group">
            <label htmlFor="statement" >Are there any particularly meaningful ways you could describe your country in a short statement?</label>
            <textarea className="text-area" rows="5" type="text" name="statement" ref={statement => this.inputStatement = statement}/>
            </div>

            <div className="form-group">
            <label htmlFor="important" >What are the most important things happening in your city and country right now?</label>
            <textarea className="text-area" rows="5" type="text" name="important" ref={important => this.inputImportant = important}/>
            </div>

            <div className="form-group">
            <label htmlFor="mood">How would you describe the mood of people in your country right now? The mood of young people? The mood of older people? The mood of people concerned with business? The mood of people concerned with culture?</label>
            <textarea className="text-area" rows="5" type="text" name="mood" ref={mood => this.inputMood = mood}/>
            </div>


            <div className="form-group">
            <label htmlFor="hopes">What are your hopes for the future of your country? </label>
            <textarea className="text-area" rows="5" type="text" name="hopes" ref={hopes => this.inputHopes = hopes}/>
            </div>

            <div className="form-group">
            <label htmlFor="concerns" >What are your concerns for the future of your country? </label>
            <textarea className="text-area" rows="5" type="text" name="concerns" ref={concerns => this.inputConcerns = concerns}/>
            </div>
            <div className="form-group">
            <label htmlFor="bestVision">Can you describe a best case vision for the future of your country?</label>
            <textarea className="text-area" rows="5" type="text" name="bestVision" ref={bestVision => this.inputBestVision = bestVision}/>
            </div>

            <div className="form-group">
            <label htmlFor="worstVision">Can you describe a worst case vision for the future of your country?</label>
            <textarea className="text-area" rows="5" type="text" name="worstVision" ref={worstVision => this.inputWorstVision = worstVision}/>
            </div>

            <div className="form-group">
            <label htmlFor="message">What message would you like to share with the rest of the world, on behalf of your land and its people?</label>
            <textarea className="text-area" rows="5" type="text" name="message" ref={message => this.inputMessage = message}/>
            </div>           

            <input className="submit" type="submit" value="Submit"/>
            </form>
            </div>
            </div>
            </div>
        )
    }
}
