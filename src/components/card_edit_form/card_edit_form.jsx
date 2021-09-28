import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_edit_form.module.css';

const CardEditForm = ({card}) => {
    
    const DEFAULT_IMAGE = "/images/default_logo.png";

    const {name, company, title, email, message, theme, fileName, fileURL} = card;
    const url = fileURL || DEFAULT_IMAGE;

    const onSubmit = () => {

    }

    return(
        <form className={styles.form}>
            <input type="text" className={styles.input} name="name" value={name} />
            <input type="text" className={styles.input} name="company" value={company} />
            <select className={styles.select} name="theme" value={theme}>
                <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="gray">gray</option>
            </select>
            <input type="text" className={styles.input} name="title" value={title} />
            <input type="text" className={styles.input} name="email" value={email} />
            <textarea name="message" className={styles.textarea} value={message}/>
            <div className={styles.fileInput}>
                <ImageFileInput />
            </div>
            <Button name="Delete" onClick={onSubmit} />
        </form>
     ); 
} 

export default CardEditForm;