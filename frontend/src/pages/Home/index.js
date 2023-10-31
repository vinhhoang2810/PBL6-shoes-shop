import styles from '../../styles/grid.scss';
// import classNames from 'classnames/bind';
import ProductCard from '~/components/ProductCard';
function Home() {
    return (
        <div className={styles.grid}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <ProductCard />
                </div>
            </div>
        </div>
    );
}

export default Home;
