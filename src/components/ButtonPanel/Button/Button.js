import React from 'react';
import styles from './button.module.css';

const button = props => {
    return (
        <button 
            className={[styles.Button, styles[props.btnType]].join(' ')}
            style={props.style}>
            {props.children}
        </button>
    )
}

export default button;