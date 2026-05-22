import { IconSearch } from '../icons';
import styles from './searchinput.module.css';

export const SearchInput = ({ placeholder, ...rest }) => {
    return (
        <div className={styles.container}>
            <IconSearch />
            <input 
                className={styles.input}
                placeholder={placeholder}
                {...rest} />
        </div>
    );
};
