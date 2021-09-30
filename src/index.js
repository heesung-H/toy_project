import React, {memo} from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';
import CardRepository from './service/card_repository';
import '@fortawesome/fontawesome-free/js/all.js';
import Youtube from './service/youtube';
import axios from 'axios';


const authService = new AuthService();
const imageUploader = new ImageUploader();
const cardRepository = new CardRepository();


const FileInput = memo(props => (
  <ImageFileInput {...props} imageUploader={imageUploader}/>  
));

const httpClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: { key : process.env.REACT_APP_YOUTUBE_API_KEY }
});

const youtube = new Youtube(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} cardRepository={cardRepository} youtube={youtube} />
  </React.StrictMode>,
  document.getElementById('root')
);
