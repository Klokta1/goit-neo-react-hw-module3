import PropTypes from "prop-types"
import styles from "./SearchBox.module.css"

const SearchBox = ({searchTerm, onSearchChange}) => {
    return (
        <div className={styles.searchBox}>
            <p>Find contacts by name</p>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className={styles.input}
            />
        </div>
    );
};

SearchBox.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    onSearchChange: PropTypes.func.isRequired,
};

export default SearchBox;