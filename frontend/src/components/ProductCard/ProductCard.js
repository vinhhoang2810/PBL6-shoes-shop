import classNames from 'classnames/bind';
import styles from './ProductCard.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function ProductCard() {
    return (
        <div class={cx('container')}>
            <div class={cx('card')}>
                <div class={cx('imgBx')}>
                    <img src={images.shoe_1} alt="shoe img" />
                </div>
                <div class={cx('contentBx')}>
                    <h2>Nike Shoes</h2>
                    <div class={cx('size')}>
                        <h3>Size :</h3>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>10</span>
                    </div>
                    <div class={cx('color')}>
                        <h3>Color :</h3>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <a href="#">Buy Now</a>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
