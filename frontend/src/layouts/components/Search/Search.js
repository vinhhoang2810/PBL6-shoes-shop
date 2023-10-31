import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
function Search() {
    return (
        <div className={cx('search')}>
            <input type="text" placeholder="Search by name product or brand" spellCheck={false} />
            <button className={cx('clear')}>
                <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />

            <button className={cx('search-btn')}>
                <SearchIcon />
            </button>
        </div>
    );
}

export default Search;
