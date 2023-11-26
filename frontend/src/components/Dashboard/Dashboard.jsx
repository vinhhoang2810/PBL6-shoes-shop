import React, { Fragment } from 'react';
import classNames from 'classnames/bind';
import styles from './Dashboard.module.scss';
import Icon from '../Icons/Icon';
import Card from '~/components/Card';
import SingleProduct from '../SingleProduct';

const cx = classNames.bind(styles);
const Dashboard = () => {
    return (
        <Fragment>
            <header className={`align-items-center d-flex p-2`}>
                <Icon icon="dashboard" classes={`ml-2`} />
                <h5 className={`mb-0 ml-4`}>Dashboard</h5>
            </header>
            <div className={`${cx('grid')} pb-3`}>
                <div className={cx('section1')}>
                    <Card headline={'Best-selling product'}>
                        <SingleProduct
                            imgSrc={
                                'https://dl.dropboxusercontent.com/scl/fi/hg4g0nckvqzq1dn1k7d4r/shoes1.png?rlkey=0g7eiloof3dbzp5kealds6ngz&dl=0&fbclid=IwAR2my2NJrwlTdRm5L4S1CdEXq-7WXtJ8HRmPvjPny5_i7v294308VLRmLoM'
                            }
                            imgAlt={'shoes'}
                            amount={'11112.45'}
                            percentage={'3.54'}
                            icon={'usd'}
                            isUptrend
                        />
                    </Card>
                </div>
                <div className={cx('section2')}>
                    <Card headline={'Top best-selling products'}>
                        <SingleProduct
                            imgSrc={
                                'https://dl.dropboxusercontent.com/scl/fi/hg4g0nckvqzq1dn1k7d4r/shoes1.png?rlkey=0g7eiloof3dbzp5kealds6ngz&dl=0&fbclid=IwAR2my2NJrwlTdRm5L4S1CdEXq-7WXtJ8HRmPvjPny5_i7v294308VLRmLoM'
                            }
                            imgAlt={'shoes'}
                            amount={'11112.45'}
                            percentage={'3.54'}
                            icon={'usd'}
                            isUptrend
                        />
                    </Card>
                </div>
                <div className={cx('section3')}>
                    <Card headline={'Best-selling brand'}>
                        <SingleProduct
                            imgSrc={
                                'https://dl.dropboxusercontent.com/scl/fi/hg4g0nckvqzq1dn1k7d4r/shoes1.png?rlkey=0g7eiloof3dbzp5kealds6ngz&dl=0&fbclid=IwAR2my2NJrwlTdRm5L4S1CdEXq-7WXtJ8HRmPvjPny5_i7v294308VLRmLoM'
                            }
                            imgAlt={'shoes'}
                            amount={'11112.45'}
                            percentage={'3.54'}
                            icon={'usd'}
                            isUptrend
                        />
                    </Card>
                </div>
                <div className={cx('section4')}>
                    <Card headline={'Top best-selling brand'} />
                </div>
                <div className={cx('section5')}>
                    <Card headline={'Products with the highest star ratings'}>
                        <SingleProduct
                            imgSrc={
                                'https://dl.dropboxusercontent.com/scl/fi/hg4g0nckvqzq1dn1k7d4r/shoes1.png?rlkey=0g7eiloof3dbzp5kealds6ngz&dl=0&fbclid=IwAR2my2NJrwlTdRm5L4S1CdEXq-7WXtJ8HRmPvjPny5_i7v294308VLRmLoM'
                            }
                            imgAlt={'shoes'}
                            amount={'11112.45'}
                            percentage={'3.54'}
                            icon={'usd'}
                            isUptrend
                        />
                    </Card>
                </div>
                <div className={cx('section6')}>
                    <Card headline={'Top products with the highest star ratings'}>
                        <SingleProduct
                            imgSrc={
                                'https://dl.dropboxusercontent.com/scl/fi/hg4g0nckvqzq1dn1k7d4r/shoes1.png?rlkey=0g7eiloof3dbzp5kealds6ngz&dl=0&fbclid=IwAR2my2NJrwlTdRm5L4S1CdEXq-7WXtJ8HRmPvjPny5_i7v294308VLRmLoM'
                            }
                            imgAlt={'shoes'}
                            amount={'11112.45'}
                            percentage={'3.54'}
                            icon={'usd'}
                            isUptrend
                        />
                    </Card>
                </div>
                <div className={cx('section7')}>
                    <Card headline={'Brands with the highest star rating'}>
                        <SingleProduct
                            imgSrc={
                                'https://dl.dropboxusercontent.com/scl/fi/hg4g0nckvqzq1dn1k7d4r/shoes1.png?rlkey=0g7eiloof3dbzp5kealds6ngz&dl=0&fbclid=IwAR2my2NJrwlTdRm5L4S1CdEXq-7WXtJ8HRmPvjPny5_i7v294308VLRmLoM'
                            }
                            imgAlt={'shoes'}
                            amount={'11112.45'}
                            percentage={'3.54'}
                            icon={'usd'}
                            isUptrend
                        />
                    </Card>
                </div>
                <div className={cx('section8')}>
                    <Card headline={'Top brands with the highest star ratings'} />
                </div>
                <div className={cx('section9')}>
                    <Card headline={'Chart of total product sales per month'} />
                </div>
                <div className={cx('section10')}>
                    <Card headline={'Chart of total star ratings by month'} />
                </div>
                <div className={cx('section11')}>
                    <Card headline={'Top users selling the most products'} />
                </div>
            </div>
        </Fragment>
    );
};

export default Dashboard;
