// import { Link } from 'react-router-dom';

import config from '~/config';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Search from '../Search/Search';
import Image from '~/components/Image/Image';
import { CartIcon } from '~/components/Icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('header')}>
            <div className={cx('header__content')}>
                <div className={cx('logo')}>
                    <a href={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="logo shoes shop" />
                    </a>
                </div>
                <Search />
                <nav className={cx('nav')}>
                    <a href="/#" className={cx('nav__item')}>
                        WOMENS
                    </a>
                    <a href="/#" className={cx('nav__item')}>
                        MENS
                    </a>
                    <a href="/#" className={cx('nav__item')}>
                        KIDS
                    </a>
                    <a href="/#" className={cx('nav__item')}>
                        BRANDS
                    </a>
                </nav>

                {/** action*/}
                <div className={cx('cart-btn')}>
                    <CartIcon />
                </div>
                <div className={cx('user-avatar')}>
                    <Image
                        className={cx('user-avatar')}
                        src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-1024.png"
                        alt="Do Nguyen Anh"
                        fallback={images.noImage}
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;
