import React from 'react';
import styles from './display.module.css';

const display = props => {
    return (
        <div className={styles.Display}>
            <div>{props.value}</div>
        </div>
    );
};

export default display;