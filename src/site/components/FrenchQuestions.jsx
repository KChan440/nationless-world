import React, {Component} from 'react';
import '../style/survey.css';
import firebase from '../../firebase';
import FileUploader from 'react-firebase-file-uploader';

import styled from 'styled-components';

const Description = styled.div`
text-align: justify;
font-size: .66em;
font-style: italic;
margin-top: 3%;
`;

export default class FrenchQuestions extends Component{
    constructor(props){
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0,
            username: '',
            modelType: 'English',

        }
        this.database = firebase.database().ref().child('responses');
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({image}));
        }
    }
    handleChangeUsername = (event) => this.setState({username: event.target.value});

    handleUploadStart = () => {
        this.setState({isUploading: true, progress: 0});
    }

    handleProgress = (progress) => this.setState({progress});

    handleUploadError = (error) => {
        this.setState({isUploading: false});
        console.error(error);
    }

    handleUploadSuccess = (filename) => {
        if(this.state.username === ''){
            alert("Please type in your username before uploading images!");
            this.setState({image: null, url: ''});
        }else{
            this.setState({avatar: filename, progress: 100, isUploading: false});
            firebase.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({avatarURL: url}));
        }
    };

    handleSubmit(event){
        event.preventDefault();
        const params = {
            name: this.inputName.value,
            location: this.inputLocation.value,
            "Avez vous une citation, une histoire courte ou un proverbe que vous trouvez représentatif de votre pays et son peuple?" : this.inputQuotes.value,
            "Quels faits et vérités sur votre pays, vous pensez que le reste du monde devrait connaître afin de mieux comprendre votre pays et son peuple? " : this.inputFacts.value,
            "De quel façon pensez vous que les autres gens ne comprennent pas votre pays?" : this.inputMisunderstand.value,
            "are there any particularly meaningful ways you could describe your country in a word? (you can list more than one)" : this.inputMeaningful.value,
            "are there any particularly meaningful ways you could describe your country in a short phrase?" : this.inputPhrase.value,
            "are there any particularly meaningful ways you could describe your country in a short statement?" : this.inputStatement.value,
            "what are the most important things happening in your city and country right now?" : this.inputImportant.value,
            "Comment décrieriez-vous l’humeur du peuple dans votre pays en ce moment? (L’humeur des jeunes ? L’humeur des gens plus âgés ? L’humeur des gens concernés par les affaires ? L’humeur de gens concernés par la culture?)" : this.inputMood.value,
            "Quels sont vos espoirs pour l’avenir de votre pays " : this.inputHopes.value,
            "Quelles sont vos préoccupations pour l’avenir de votre pays?" : this.inputConcerns.value,
            "Pouvez vous décrire la meilleur image pour le futur votre pays?" : this.inputBestVision.value,
            "Pouvez vous décrire la plus mauvaise image pour le futur de votre pays?" : this.inputWorstVision.value,
            "Quel message, de la part de votre peuple, voulez vous partager avec le reste du monde?" : this.inputMessage.value

        }

        if (params.name && params.location){
            this.database.push().set({
                name: params.name,
                data: params
            })
        }else{
            alert("you haven't inputted a name and location!");
        }
        window.location.href = '/';
    }

    render(){
        return(
            <div>
            <div id="header">
            <div className="header-body">
            <h2>Nationless World Short Questionnaire</h2>
            <Description>
            Vous n’avez pas besoin de répondre à toutes les questions ci-dessous. Seules les questions marquées d’un astérisque (*) sont requises. 
En dehors de cela, notre recommendation est que vous choisissiez de répondre à quatre d’entre elles au minimum. Trouvez les questions qui vous emplissent de mots, d’émotions et de choses qui ont besoin d’être dites. 

            </Description>
            <Description>
            A la fin du questionnaire, nous vous demandons d’attacher au moins trois photos. Ces photos sont des images qui sont sensées vous représenter, vous, votre identité, et également votre communauté. Nous vous recommandons de soumettre au moins une ou deux photos de vous seul(e). </Description>
            </div>
            </div>

            <div id="questions">
            <form className="questions-form" onSubmit={this.handleSubmit}>

            <div className="form-group">
            <label htmlFor="name">Veuillez inscrire votre nom*:</label>
            <input className="text-box" type="text" name="name" ref={name => this.inputName = name} onChange={this.handleChangeUsername} required/>
            </div>

            <div className="form-group">
            <label htmlFor="location" >Veuillez inscrire: Ville, Pays*</label>
            <input className="text-box" type="text" name="location" ref={location => this.inputLocation = location} required/>
            </div>

            <div className="form-group">
            <label htmlFor="quotes">Avez vous une citation, une histoire courte ou un proverbe que vous trouvez représentatif de votre pays et son peuple?</label>
            <textarea className="text-area" rows="5" type="text" name="quotes" ref={quotes => this.inputQuotes = quotes} />
            </div>

            <div className="form-group">
            <label htmlFor="facts">Quels faits et vérités sur votre pays, vous pensez que le reste du monde devrait connaître afin de mieux comprendre votre pays et son peuple?</label>
            <textarea className="text-area" rows="5" type="text" name="facts" ref={facts => this.inputFacts = facts}/>
            </div>

            <div className="form-group">
            <label htmlFor="misunderstand">De quel façon pensez vous que les autres gens ne comprennent pas votre pays?</label>
            <textarea className="text-area" rows="5" type="text" name="misunderstand" ref={misunderstand => this.inputMisunderstand = misunderstand}/>
            </div>

            <div className="form-group">
            <label htmlFor="meaningful">are there any particularly meaningful ways you could describe your country in a word? (you can list more than one)</label>
            <textarea className="text-area" rows="5" type="text" name="meaningful" ref={meaningful => this.inputMeaningful = meaningful}/>
            </div>

            <div className="form-group">
            <label htmlFor="phrase">are there any particularly meaningful ways you could describe your country in a short phrase?</label>
            <textarea className="text-area" rows="5" type="text" name="phrase" ref={phrase => this.inputPhrase = phrase}/>
            </div>

            <div className="form-group">
            <label htmlFor="statement" >are there any particularly meaningful ways you could describe your country in a short statement?</label>
            <textarea className="text-area" rows="5" type="text" name="statement" ref={statement => this.inputStatement = statement}/>
            </div>

            <div className="form-group">
            <label htmlFor="important" >En ce moment, quelles sont les choses les plus importantes qui se passent dans votre ville et votre pays?</label>
            <textarea className="text-area" rows="5" type="text" name="important" ref={important => this.inputImportant = important}/>
            </div>

            <div className="form-group">
            <label htmlFor="mood">Comment décrieriez-vous l’humeur du peuple dans votre pays en ce moment? (L’humeur des jeunes ? L’humeur des gens plus âgés ? L’humeur des gens concernés par les affaires ? L’humeur de gens concernés par la culture?)</label>
            <textarea className="text-area" rows="5" type="text" name="mood" ref={mood => this.inputMood = mood}/>
            </div>


            <div className="form-group">
            <label htmlFor="hopes">Quels sont vos espoirs pour l’avenir de votre pays?</label>
            <textarea className="text-area" rows="5" type="text" name="hopes" ref={hopes => this.inputHopes = hopes}/>
            </div>

            <div className="form-group">
            <label htmlFor="concerns" >Quelles sont vos préoccupations pour l’avenir de votre pays? </label>
            <textarea className="text-area" rows="5" type="text" name="concerns" ref={concerns => this.inputConcerns = concerns}/>
            </div>
            <div className="form-group">
            <label htmlFor="bestVision">Pouvez vous décrire la meilleur image pour le futur votre pays?</label>
            <textarea className="text-area" rows="5" type="text" name="bestVision" ref={bestVision => this.inputBestVision = bestVision}/>
            </div>

            <div className="form-group">
            <label htmlFor="worstVision">Pouvez vous décrire la plus mauvaise image pour le futur de votre pays? </label>
            <textarea className="text-area" rows="5" type="text" name="worstVision" ref={worstVision => this.inputWorstVision = worstVision}/>
            </div>

            <div className="form-group">
            <label htmlFor="message">Quel message, de la part de votre peuple, voulez vous partager avec le reste du monde?</label>
            <textarea className="text-area" rows="5" type="text" name="message" ref={message => this.inputMessage = message}/>
            </div>

            <div className="form-group">
            <label>Pour compléter le questionnaire, veuillez ajouter 3 images de vous. Vous devez être présent sur chaque image. 1 ou 2 images devrait être de vous seul. Et une autre image que vous trouvez représentative sincèrement de votre vie, votre culture personnelle ou votre communauté.</label>
            <FileUploader
            style={{marginLeft:"20%"}}
            multiple
            accept="image/*"
            name="avatar"
            storageRef={firebase.storage().ref('images/' + this.state.username)}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
            />
            </div>

            <input className="submit" type="submit" value="Submit"/>
            </form>
            </div>
            </div>
        )
    }
}
