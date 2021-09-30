import React, { memo, useState, useEffect} from 'react';
import ContentItem from '../content_item/contentItem';
import styles from './contentList.module.css';

const ContentList = memo(
    ({ videos, onVideoClick, display }) => {
        return (
            <ul className={styles.videos}>
                {videos.map(video => (
                    <ContentItem         
                    key={video.id}
                    video={video}
                    onVideoClick={onVideoClick}
                    display={display}/>
                ))}
            </ul>
        );
    }
);

export default ContentList;