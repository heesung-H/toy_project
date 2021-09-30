import React, {useState} from 'react';
import ContentDetail from '../content/body/content_detail/contentDetail';
import ContentList from '../content/body/content_list/contentList';
import styles from './body.module.css';

const Body = ({videos,onVideoClick,selectedVideo}) => {

    return(
        <section className={styles.content}>
            {selectedVideo && (
                <div className={styles.detail}>
                    <ContentDetail video={selectedVideo}/>
                </div>
            )}
            <div className={styles.list}>
                <ContentList 
                videos={videos}
                onVideoClick={onVideoClick}
                display={selectedVideo ? 'list' : 'grid'}/>
            </div>
        </section>
    );

}
export default Body;