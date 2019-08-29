import React, { Component } from 'react';
import styles from './styles/navigator.module.scss';
import { FaCocktail } from 'react-icons/fa';

class Navigator extends Component {
    render() {
        return (
            <div className={styles.navigator}>
                <a href='/' target="_blank" rel="noopener noreferrer">
                    <div className={styles.cocktailIcon}>
                        <FaCocktail/>
                    </div>
                </a>
            </div>
        );
    }
}

export default Navigator;