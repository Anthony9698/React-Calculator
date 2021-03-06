import React from 'react';
import styles from './button.module.css';

const button = props => {
    return (
        <button 
            className={[styles.Button, styles[props.btnType]].join(' ')}
            style={props.style}
            onClick={props.clicked}
            value={props.children}>
            {props.children}
        </button>
    )
}

export default button;