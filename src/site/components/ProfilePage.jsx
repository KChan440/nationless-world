import React, { Component } from 'react';
import FileUploader from 'react-firebase-file-uploader';
import firebase from '../../firebase';

class ProfilePage extends Component {
    state = {
        username: '',
        avatar: '',
        isUploading: false,
        progress: 0,
        avatarURL: ''
    };

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
        }else{
            this.setState({avatar: filename, progress: 100, isUploading: false});
            firebase.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({avatarURL: url}));
        }
    };


    render() {
        return (
            <div>
            <form>
            <label>Username:</label>
            <input type="text" value={this.state.username} name="username" onChange={this.handleChangeUsername} />
            <label>Avatar:</label>
            {this.state.isUploading &&
                <p>Progress: {this.state.progress}</p>
            }
            {this.state.avatarURL &&
                    <img alt="filler" src={this.state.avatarURL} />
            }
            <FileUploader
            multiple
            accept="image/*"
            name="avatar"
            randomizeFilename
            storageRef={firebase.storage().ref('images/' + this.state.username)}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
            />
            </form>
            </div>
        );
    }
}
export default ProfilePage;
