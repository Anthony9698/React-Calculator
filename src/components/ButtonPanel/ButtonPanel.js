import React from 'react';
import Button from './Button/Button';
import styles from './buttonPanel.module.css';

const buttonPanel = props => {
    return (
        <div className={styles.ButtonPanel}>
            <div className={styles.Row}>
                <Button 
                    btnType="Clear"
                    clicked={props.clear}>AC</Button>
                <Button btnType="Number">+/-</Button>
                <Button btnType="Number">%</Button>
                <Button btnType="Symbol">÷</Button>
            </div>
            <div className={styles.Row}>
                <Button 
                    btnType="Number" 
                    clicked={props.numClicked}>7</Button>
                <Button 
                    btnType="Number" 
                    clicked={props.numClicked}>8</Button>
                <Button 
                    btnType="Number" 
                    clicked={props.numClicked}>9</Button>
                <Button btnType="Symbol">x</Button>
            </div>
            <div className={styles.Row}>
                <Button 
                    btnType="Number" 
                    clicked={props.numClicked}>4</Button>
                <Button 
                    btnType="Number" 
                    clicked={props.numClicked}>5</Button>
                <Button 
                    btnType="Number" 
                    clicked={props.numClicked}>6</Button>
                <Button btnType="Symbol">-</Button>
            </div>
            <div className={styles.Row}>
                <Button 
                    btnType="Number" 
                    clicked={props.numClicked}>1</Button>
                <Button 
                    btnType="Number" 
                    clicked={props.numClicked}>2</Button>
                <Button 
                    btnType="Number" 
                    clicked={props.numClicked}>3</Button>
                <Button btnType="Symbol">+</Button>
            </div>
            <div className={styles.Row}>
                <Button 
                    btnType="Number"
                    clicked={props.numClicked} 
                    style={{'flexGrow': '2'}}>0</Button>
                <Button btnType="Number">.</Button>
                <Button btnType="Symbol">=</Button>
            </div>
        </div>
    );
}

export default buttonPanel;