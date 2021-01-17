import React from 'react';
import styles from './display.module.css';

const display = props => {
    return (
        <div className={styles.Display}>{props.value}</div>
    );
};

export default display;