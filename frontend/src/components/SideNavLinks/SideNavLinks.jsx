import React from 'react';
import classNames from 'classnames/bind';
import styles from './SideNavLinks.module.scss';
import Icon from '../Icons/Icon';

const cx = classNames.bind(styles);
const SideNavLinks = () => {
    const menu = ['dashboard', 'list', 'user', 'stats'];

    return (
        <div className={cx('panel')}>
            {menu.map((icon, index) => (
                <div className={`${cx('icon')} mb-4`} key={`${index}-${icon}`}>
                    <Icon icon={icon} />
                </div>
            ))}
        </div>
    );
};

export default SideNavLinks;
