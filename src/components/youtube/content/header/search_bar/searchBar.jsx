import React, { memo, useRef } from 'react';
import styles from './searchBar.module.css';

const SearchBar = memo(
  ({ onSearch }) => {
    const inputRef = useRef();
    const handleSearch = () => {
      const value = inputRef.current.value;
      onSearch(value);
    };
    const onClick = () => {
      handleSearch();
    };
  
    const onKeyPress = event => {
      if (event.key === 'Enter') {
        handleSearch();
      }
    };
    return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <img className={styles.img} src="/images/u_logo.png" alt="logo" />
        </div>
        <input
          ref={inputRef}
          className={styles.input}
          type="search"
          placeholder="Search..."
          onKeyPress={onKeyPress}
        />
        <button className={styles.button} type="submit" onClick={onClick}>
          <img
            className={styles.buttonImg}
            src="/images/search.png"
            alt="search"
          />
        </button>
      </header>
    );
  }
)

export default SearchBar;