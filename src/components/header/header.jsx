import React, {memo} from 'react';
import styles from './header.module.css';

const Header = memo(({onLogout, onLink}) => 
{
    return(
        <header className={styles.header}>
            <button onClick={onLink} className={styles.recycle}><img className={styles.thumbnail} src="/images/recycle.png" alt="recycle"/></button>
            {onLogout && (<button className={styles.logout} onClick={onLogout}>Logout</button>)}
            <img className={styles.logo} src="/images/logo.png" alt="logo"/>
            <h1 className={styles.title}>Project Toy</h1>
        </header>
    )
});

export default Header;