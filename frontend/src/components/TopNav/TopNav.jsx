import React from 'react';
import classNames from 'classnames/bind';
import styles from './TopNav.module.scss';
import SearchBar from '../SearchBar';
import Button from '../Button';
import Image from '../Image';
import images from '~/assets/images';

const cx = classNames.bind(styles);
const TopNav = () => {
    return (
        <nav className={`${cx('top-nav')} d-flex align-items-center justify-content-between px-3`}>
            <h5 className={cx('brand')}>Welcome to your dashboard</h5>
            <div className={`align-items-center d-flex justify-content-between`}>
                <SearchBar />
                <Button primary rounded small className={`ml-4`}>
                    Product
                </Button>
                <Button primary rounded small>
                    User
                </Button>
            </div>
            <Image
                className={cx('user-avatar')}
                src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-1024.png"
                alt="Do Nguyen Anh"
                fallback={images.noImage}
            />
        </nav>
    );
};

export default TopNav;
