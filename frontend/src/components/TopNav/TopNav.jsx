import React from 'react';
import classNames from 'classnames/bind';
import styles from './TopNav.module.scss';
import SearchBar from '../SearchBar';

const cx = classNames.bind(styles);
const TopNav = () => {
    return (
        <nav className={`${cx('top-nav')} d-flex align-items-center justify-content-between px-3`}>
            <h5 className={cx('brand')}>Shoes Shop</h5>
            <SearchBar />
        </nav>
    );
};

export default TopNav;
