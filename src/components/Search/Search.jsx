import React from 'react';
import styles from './Search.module.scss';

const Search = ( { searchQuery, setSearchQuery } ) => {

  const onSearchChange = (text) => {
    setSearchQuery(text);
  }

  return (
    <div>
        <input className={styles.root} type="text" placeholder='Поиск...' value={searchQuery} onChange={ (e) => onSearchChange(e.target.value) } />
    </div>
  )
}

export default Search;