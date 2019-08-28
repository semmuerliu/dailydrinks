import React, { Component } from 'react';
import styles from './styles/footer.module.scss';
import { FaHeart } from 'react-icons/fa';

class Footer extends Component {
    render() {
        return (
            <div className={styles.footer}>This app is made with <FaHeart/>by Summer Liu</div>
        );
    }
}

export default Footer;