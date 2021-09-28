import React from 'react';
import { useRef } from 'react/cjs/react.development';
import styles from './image_file_input.module.css'

const ImageFileInput = ({imageUploader, name, onFileChange }) => 
{

    const inputRef = useRef();
    const onButtonClick = (event) => {
        event.preventDefault();
        inputRef.current.click();
    }

    //파일 업로드
    const onChange = async (event) => {
        const uploaded = await imageUploader.upload(event.target.files[0]);
        console.log(uploaded);
        onFileChange({
            name: uploaded.original_filename,
            url: uploaded.url
        });
    }

    return (
        <div className={styles.container}>
            <input ref={inputRef} className={styles.input} type="file" accept="image/*" name="file" onChange={onChange} />
            <button className={styles.button} onClick={onButtonClick}>{name || 'No file'}</button>
        </div>
    );
}

export default ImageFileInput;