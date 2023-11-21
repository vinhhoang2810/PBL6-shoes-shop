import React from 'react';
import classNames from 'classnames/bind';
import styles from './SearchBar.module.scss';

const cx = classNames.bind(styles);
const SearchBar = () => {
    return (
        <div>
            <input className={cx('search')} type="search" placeholder="Search" />
        </div>
    );
};

export default SearchBar;
