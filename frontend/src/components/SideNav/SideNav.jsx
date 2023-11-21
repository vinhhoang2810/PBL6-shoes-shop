import React from 'react';
import classNames from 'classnames/bind';
import styles from './SideNav.module.scss';
import Icon from '../Icons/Icon';
import SideNavLinks from '../SideNavLinks';

const cx = classNames.bind(styles);
const SideNav = () => {
    return (
        <aside className={cx('side-nav')}>
            <div className={cx('image')}></div>
            <SideNavLinks />
            <div className={cx('icon')}>
                <Icon icon="arrow" />
            </div>
        </aside>
    );
};

export default SideNav;
