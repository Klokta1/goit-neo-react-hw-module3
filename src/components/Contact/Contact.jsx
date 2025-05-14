import PropTypes from "prop-types"
import { FaUser, FaPhone } from "react-icons/fa";
import styles from "./Contact.module.css"

const Contact = ({ name, number, onDelete }) => {
    return (
        <div className={styles.card}>
            <div className={styles.info}>
                <p className={styles.name}><FaUser className={styles.icon} />{name}</p>
                <p className={styles.number}><FaPhone className={styles.icon} />{number}</p>
            </div>
            <button type="button" className={styles.deleteBtn} onClick={onDelete}>Delete</button>
        </div>
    );
};

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default Contact;