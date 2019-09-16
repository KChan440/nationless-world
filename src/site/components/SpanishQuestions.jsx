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

export default class SpanishQuestions extends Component{
    constructor(props){
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0,
            username: '',

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
            "¿Puedes pensar en cualquier frase, historia corta o proverbios que creas que puedan representar a tu país y su gente?" : this.inputQuotes.value,
            "¿Cuáles serían los datos o los verdades sobre tu país que creas que deban saberse para entender mejor tu país y su gente?" : this.inputFacts.value,
            "¿De qué manera crees que otra gente malinterpreta a tu país?" : this.inputMisunderstand.value,
            "Are there any particularly meaningful ways you could describe your country in a word? (You can list more than one)" : this.inputMeaningful.value,
            "Are there any particularly meaningful ways you could describe your country in a short phrase?" : this.inputPhrase.value,
            "Are there any particularly meaningful ways you could describe your country in a short statement?" : this.inputStatement.value,
            "¿Qué es lo más importante que está sucediendo actualmente en tu ciudad y en tu país?" : this.inputImportant.value,
            "How would you describe the mood of people in your country right now? The mood of young people? The mood of older people? The mood of people concerned with business? The mood of people concerned with culture?" : this.inputMood.value,
            "¿Cuáles son tus esperanzas para el futuro de tu país?" : this.inputHopes.value,
            "¿Cuáles son tus preocupaciones sobre el futuro de tu país?" : this.inputConcerns.value,
            "¿Puedes describir el mejor escenario del futuro de tu país?" : this.inputBestVision.value,
            "¿Puedes describir el peor escenario del futuro de tu país?" : this.inputWorstVision.value,
            "¿Qué mensaje te gustaría compartir con el resto del mundo, de parte de tu territorio y su gente?" : this.inputMessage.value
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

            <div id="header">
            <div className="header-body">
            <h2>Nationless World Short Questionnaire</h2>
            <Description>
            No tiene que responder todas las preguntas de abajo. Solo las preguntas marcadas con un asterisco (*) son requeridas. Fuera de esto, recomendamos que escoja responder al menos 4. Encuentre las preguntas que lo llenan en sentimiento y palabras, las preguntas que lo llenen con cosas que tienen que ser dichas. 

            </Description>
            <Description>
            Al final del cuestionario, le pedimos que adjunte al menos 3 fotos. Estas fotos e imágenes tienen el objetivo de representarlo, su identidad y también su comunidad. Recomendamos incluir al menos 1 o 2 fotos de usted mismo, solo. </Description>
            </div>
            </div>


            <div id="questions">
            <form className="questions-form" onSubmit={this.handleSubmit}>

            <div className="form-group">
            <label htmlFor="name">Por favor indica tu nombre completo*</label>
            <input className="text-box" type="text" name="name" ref={name => this.inputName = name} onChange={this.handleChangeUsername} required/>
            </div>

            <div className="form-group">
            <label htmlFor="location" >Por favor indica tu ciudad, país*</label>
            <input className="text-box" type="text" name="location" ref={location => this.inputLocation = location} required/>
            </div>

            <div className="form-group">
            <label htmlFor="quotes">¿Puedes pensar en cualquier frase, historia corta o proverbios que creas que puedan representar a tu país y su gente?</label>
            <textarea className="text-area" rows="5" type="text" name="quotes" ref={quotes => this.inputQuotes = quotes} />
            </div>

            <div className="form-group">
            <label htmlFor="facts">¿Cuáles serían los datos o los verdades sobre tu país que creas que deban saberse para entender mejor tu país y su gente?</label>
            <textarea className="text-area" rows="5" type="text" name="facts" ref={facts => this.inputFacts = facts}/>
            </div>

            <div className="form-group">
            <label htmlFor="misunderstand">¿De qué manera crees que otra gente malinterpreta a tu país? </label>
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
            <label htmlFor="important" >¿Qué es lo más importante que está sucediendo actualmente en tu ciudad y en tu país?</label>
            <textarea className="text-area" rows="5" type="text" name="important" ref={important => this.inputImportant = important}/>
            </div>

            <div className="form-group">
            <label htmlFor="mood">How would you describe the mood of people in your country right now? The mood of young people? The mood of older people? The mood of people concerned with business? The mood of people concerned with culture?</label>
            <textarea className="text-area" rows="5" type="text" name="mood" ref={mood => this.inputMood = mood}/>
            </div>


            <div className="form-group">
            <label htmlFor="hopes">¿Cuáles son tus esperanzas para el futuro de tu país?</label>
            <textarea className="text-area" rows="5" type="text" name="hopes" ref={hopes => this.inputHopes = hopes}/>
            </div>

            <div className="form-group">
            <label htmlFor="concerns">¿Cuáles son tus preocupaciones sobre el futuro de tu país?</label>
            <textarea className="text-area" rows="5" type="text" name="concerns" ref={concerns => this.inputConcerns = concerns}/>
            </div>
            <div className="form-group">
            <label htmlFor="bestVision">¿Puedes describir el mejor escenario del futuro de tu país?</label>
            <textarea className="text-area" rows="5" type="text" name="bestVision" ref={bestVision => this.inputBestVision = bestVision}/>
            </div>

            <div className="form-group">
            <label htmlFor="worstVision">¿Puedes describir el peor escenario del futuro de tu país?</label>
            <textarea className="text-area" rows="5" type="text" name="worstVision" ref={worstVision => this.inputWorstVision = worstVision}/>
            </div>

            <div className="form-group">
            <label htmlFor="message">¿Qué mensaje te gustaría compartir con el resto del mundo, de parte de tu territorio y su gente?  </label>
            <textarea className="text-area" rows="5" type="text" name="message" ref={message => this.inputMessage = message}/>
            </div>

            <div className="form-group">
            <label>Para completar el cuestionario, adjunta al menos 3 imágenes. Todas las imágenes deben incluirte. Debes aparecer tú solo(a) en al menos 1 o 2 de las imágenes. Para la imagen o imágenes restantes escoge fotos que sientas que representan de manera sincera tu vida, tu cultura o tu comunidad. </label>
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
