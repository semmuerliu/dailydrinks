import React, { Component } from 'react';
import styles from './styles/footer.module.scss';
import { FaHeart } from 'react-icons/fa';

class Footer extends Component {
    render() {
        return (
            <div className={styles.footer}>
                <p>This app is made with <FaHeart className={styles.heartIcon}/> by Summer Liu</p>
                <p>All rights reserverd.</p>
            </div>
        );
    }
}

export default Footer;