import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({authService}) => {

    const [cards, setCards] = useState({
        '0': {
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
        '1': {
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
        '2': {
            id : '2',
            name : 'Bread',
            company: 'Easycare Tac',
            theme: 'gray',
            title: 'Software Engineer',
            email: 'heesung@daum.net',
            message: 'go for it',
            fileName: 'Bread',
            fileURL: null
        }
    });

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

    const createOrupdateCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated;
        });
    };

    const deleteCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        });
    };

    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor cards={cards} updateCard={createOrupdateCard} deleteCard={deleteCard}/>
                <Preview cards={cards}/>
            </div>
            <Footer/>
        </section>
    );
}

export default Maker;