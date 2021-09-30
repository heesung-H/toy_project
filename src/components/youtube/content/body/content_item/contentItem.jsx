import React from 'react';
import styles from './contentItem.module.css';

const ContentItem = ({video, video: {snippet}, onVideoClick, display}) => {
    const displayType = display === 'grid' ? styles.grid : styles.list;
    
    return (
        <li className={`${styles.container} ${displayType}`} onClick={()=> onVideoClick(video)}>
            <div className={styles.video}>
                <img
                    className={styles.thumbnail}
                    src={snippet.thumbnails.medium.url}
                    alt="video thumbnail"
                />
                <div className={styles.metadata}>
                    <p className={styles.title}>{snippet.title}</p>
                    <p className={styles.channel}>{snippet.channelTitle}</p>
                </div>
            </div>
        </li>
    );
}

export default ContentItem;