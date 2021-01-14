import React from 'react';
import styles from 'button.module.css';

const button = props => {
    return (
        <div className={styles.Button}>{props.children}</div>
    )
}

export default button;