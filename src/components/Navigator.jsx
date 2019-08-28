import React, { Component } from 'react';
import styles from './styles/navigator.module.scss';

class Navigator extends Component {
    render() {
        return (
            <div className={styles.navigator}>
                <a href='/' target="_blank" rel="noopener noreferrer">logo<img alt='logo'/></a>
            </div>
        );
    }
}

export default Navigator;