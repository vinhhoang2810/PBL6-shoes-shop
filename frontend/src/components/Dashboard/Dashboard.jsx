import React, { Fragment } from 'react';
import classNames from 'classnames/bind';
import styles from './Dashboard.module.scss';
import Icon from '../Icons/Icon';

const cx = classNames.bind(styles);
const Dashboard = () => {
    return (
        <Fragment>
            <header className={`align-items-center d-flex p-2`}>
                <Icon icon="dashboard" classes={`ml-2`} />
                <h5 className={`mb-0 ml-4`}>Dashboard</h5>
            </header>
            <div className={cx('grid')}>
                <div className={cx('section1')}>section1</div>
                <div className={cx('section2')}>section2</div>
                <div className={cx('section3')}>section3</div>
                <div className={cx('section4')}>section4</div>
                <div className={cx('section5')}>section5</div>
                <div className={cx('section6')}>section6</div>
                <div className={cx('section7')}>section7</div>
            </div>
        </Fragment>
    );
};

export default Dashboard;
