import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({authService}) => {

    const [cards, setCards] = useState([
        {
            id : '0',
            name : 'Luice',
            company: 'Dalrise',
            theme: 'light',
            title: 'Full Stack Developer',
            email: 'heesung@daum.net',
            message: 'go for it',
            fileName: 'Luice',
            fileURL: null
        },
        {
            id : '1',
            name : 'Lisa',
            company: 'kakao',
            theme: 'dark',
            title: 'Full Stack Developer',
            email: 'heesung@daum.net',
            message: 'go for it',
            fileName: 'Lisa',
            fileURL: 'Luice.png'
        },
        {
            id : '2',
            name : 'Bread',
            company: 'Easycare Tac',
            theme: 'gray',
            title: 'Software Engineer',
            email: 'heesung@daum.net',
            message: 'go for it',
            fileName: 'Bread',
            fileURL: null
        },
    ]);

    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    }

    useEffect(() => {
        authService.onAuthChange(user => {
            if(!user){
                history.push('/');
            }
        });
    });
    
    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor cards={cards}/>
                <Preview cards={cards}/>
            </div>
            <Footer/>
        </section>
    );
}

export default Maker;