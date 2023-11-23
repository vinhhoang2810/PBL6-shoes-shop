import React from 'react';
import classNames from 'classnames/bind';
import styles from './Card.module.scss';
import Icon from '~/components/Icons/Icon';

const cx = classNames.bind(styles);
const Card = ({ headline, children }) => {
    return (
        <div className={cx('card')}>
            <div className={`align-items-baseline d-flex justify-content-between`}>
                <h6 className={`${cx('headline')} mb-0`}>{headline}</h6>
                <Icon icon="options" width="16px" height="16px" classes={`ml-4`} />
            </div>
            {children}
        </div>
    );
};

export default Card;
