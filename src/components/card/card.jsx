import React from 'react';
import styles from './card.module.css';


const Card = ({card}) => { 

    const DEFAULT_IMAGE = "/images/default_logo.png";

    const {name, company, title, email, message, theme, fileName, fileURL} = card;
    const url = fileURL || DEFAULT_IMAGE;

    return(
            <li className={`${styles.card} ${getStyles(theme)}`}>
                <img className={styles.avatar} src={url} alt="profile photo"/>
                <div clasename={styles.info}>
                    <h1 className={styles.name}>{name}</h1>
                    <p className={styles.company}>{company}</p>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.email}>{email}</p>
                    <p className={styles.message}>{message}</p>
                </div>
            </li>
    );

    function getStyles(theme){
        switch (theme) {
            case 'dark':
                return styles.dark;
            case 'light':
                return styles.light;
            case 'gray':
                return styles.gray;
            default:
                throw new Error(`unknown theme: ${theme}`);
        }
    }

}
export default Card;