import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router';
import styles from './youtube.module.css';
import Body from './config/body';
import Head from './config/head';
import Footer from '../footer/footer';
import Header from '../header/header';

const Youtube = ({authService, youtube}) => {

    const history = useHistory();
    const historyState = history?.location.state;
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [userId, setUserId] = useState(historyState && historyState.id);
    
    const selectVideo = video => {
      setSelectedVideo(video);
    };
  
    const searchHandle = useCallback(query => {
      youtube
      .search(query)
      .then(videos => setVideos(videos));
  
      //검색시 초기화
      setSelectedVideo(null);
    }, [youtube]);
  
    //로그아웃 처리
    const onLogout = useCallback(() => {
        authService.logout();
    }, [authService, userId]);

    //로그인 처리
    useEffect(() => {
        authService.onAuthChange(user => {
            if(user){
                setUserId(user.uid);
            }else{
                history.push('/');
            }
        });
    }, [authService, userId, history]);

    const onLink = () => {
        history.push('/maker');
    }

    useEffect(() => {
      youtube
      .mostPopular()
      .then(videos => setVideos(videos))
    }, [youtube]);

    return (
        <>
            <div>
                <Header onLogout={onLogout} onLink={onLink} />
                <div>
                    <Head onSearch={searchHandle}/>
                    <Body videos={videos}
                        selectedVideo={selectedVideo}
                        onVideoClick={selectVideo}/>
                </div>
                <Footer/>
            </div>
        </>
     );
}

export default Youtube;