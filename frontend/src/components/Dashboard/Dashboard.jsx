import React, { Fragment } from 'react';
import classNames from 'classnames/bind';
import styles from './Dashboard.module.scss';
import Icon from '../Icons/Icon';

const cx = classNames.bind(styles);
const Dashboard = () => {
    return (
        <Fragment>
            <header className={`align-items-center d-flex p-4`}>
                <Icon icon="dashboard" classes={`ml-2`} />
                <h5 className={`mb-0 ml-4`}>Dashboard</h5>
            </header>
            <div className={cx('grid')}>fadfasdfa</div>
        </Fragment>
    );
};

export default Dashboard;
