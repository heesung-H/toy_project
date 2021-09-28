import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_edit_form.module.css';

const CardEditForm = ({card, updateCard, deleteCard}) => {
    
    const DEFAULT_IMAGE = "/images/default_logo.png";

    const {name, company, title, email, message, theme, fileName, fileURL} = card;
    const url = fileURL || DEFAULT_IMAGE;

    const onChange = (event) => {
        if(event.currentTarget == null){
            return;
        }

        event.preventDefault();
        updateCard({
            ...card,
            [event.currentTarget.name]: event.currentTarget.value,
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        deleteCard(card);
    };

    return(
        <form className={styles.form}>
            <input type="text" className={styles.input} name="name" onChange={onChange} value={name} />
            <input type="text" className={styles.input} name="company" onChange={onChange} value={company} />
            <select className={styles.select} name="theme" onChange={onChange} value={theme}>
                <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="gray">gray</option>
            </select>
            <input type="text" className={styles.input} name="title" onChange={onChange} value={title} />
            <input type="text" className={styles.input} name="email" onChange={onChange} value={email} />
            <textarea name="message" className={styles.textarea} onChange={onChange} value={message}/>
            <div className={styles.fileInput}>
                <ImageFileInput />
            </div>
            <Button name="delete" onClick={onSubmit} />
        </form>
     ); 
} 

export default CardEditForm;