import React, {useRef} from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_add_form.module.css';

const CardAddForm = ({updateCard}) => {

    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    
    const onSubmit = (event) => {
        event.preventDefault();

        const card = {
            id: Date.now(),
            name: nameRef.current.value || '',
            company: companyRef.current.value || '',
            theme: themeRef.current.value,
            title: titleRef.current.value || '',
            email: emailRef.current.value || '',
            message: messageRef.current.value || '',
            fileName: '',
            fileURL: ''
        };
        formRef.current.reset();
        updateCard(card);

    }

    return(
        <form ref={formRef} className={styles.form}>
            <input type="text" ref={nameRef} className={styles.input} name="name" placeholder="name" />
            <input type="text" ref={companyRef} className={styles.input} name="company" placeholder="company" />
            <select ref={themeRef} className={styles.select} name="theme" placeholder="theme">
                <option placeholder="light">light</option>
                <option placeholder="dark">dark</option>
                <option placeholder="gray">gray</option>
            </select>
            <input ref={titleRef} type="text" className={styles.input} name="title" placeholder="title" />
            <input ref={emailRef} type="text" className={styles.input} name="email" placeholder="email" />
            <textarea ref={messageRef} name="message" className={styles.textarea} placeholder="message"/>
            <div className={styles.fileInput}>
                <ImageFileInput />
            </div>
            <Button name="Add" onClick={onSubmit} />
        </form>
     ); 
} 

export default CardAddForm;