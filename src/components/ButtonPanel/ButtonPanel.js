import React from 'react';
import Button from './Button/Button';
import styles from './buttonPanel.module.css';

const buttonPanel = props => {
    return (
        <div className={styles.ButtonPanel}>
            <div className={styles.Row}>
                <Button btnType="Clear">AC</Button>
                <Button btnType="Number">+/-</Button>
                <Button btnType="Number">%</Button>
                <Button btnType="Symbol">÷</Button>
            </div>
            <div className={styles.Row}>
                <Button btnType="Number">7</Button>
                <Button btnType="Number">8</Button>
                <Button btnType="Number">9</Button>
                <Button btnType="Symbol">x</Button>
            </div>
            <div className={styles.Row}>
                <Button btnType="Number">4</Button>
                <Button btnType="Number">5</Button>
                <Button btnType="Number">6</Button>
                <Button btnType="Symbol">-</Button>
            </div>
            <div className={styles.Row}>
                <Button btnType="Number">1</Button>
                <Button btnType="Number">2</Button>
                <Button btnType="Number">3</Button>
                <Button btnType="Symbol">+</Button>
            </div>
            <div className={styles.Row}>
                <Button btnType="Number" style={{'flex-grow': '2'}}>0</Button>
                <Button btnType="Number">.</Button>
                <Button btnType="Symbol">=</Button>
            </div>
        </div>
    );
}

export default buttonPanel;