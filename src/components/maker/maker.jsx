import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({FileInput, authService, cardRepository}) => {
    const history = useHistory();
    const historyState = history?.location.state;
    const [cards, setCards] = useState({});
    const [userId, setUserId] = useState(historyState && historyState.id);

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

    //데이터 조회
    useEffect(() => {
        if (!userId){
            return;
        }
        const stopSync = cardRepository.syncCards(userId, cards => {
            setCards(cards);
        });

        return () => stopSync();
    }, [userId, cardRepository]);

    //데이터 삽입
    const createOrupdateCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated;
        });
        cardRepository.saveCard(userId, card);
    };

    //데이터 삭제
    const deleteCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        });
        cardRepository.removeCard(userId, card);
    };

    const onLink = () => {
        history.push('/youtube');
    }

    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout} onLink={onLink} />
            <div className={styles.container}>
                <Editor FileInput={FileInput} cards={cards} updateCard={createOrupdateCard} deleteCard={deleteCard}/>
                <Preview cards={cards}/>
            </div>
            <Footer/>
        </section>
    );
}

export default Maker;