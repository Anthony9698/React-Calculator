import React from 'react';
import Button from './Button/Button';
import styles from './buttonPanel.module.css';

const buttonPanel = props => {
    let buttonRow = [];
    let buttonRowId = 0;
    const buttonRows = [];
    const buttons = [
        {
            name: "AC",
            type: "Clear",
            clicked: props.clear
        },
        {
            name: "+/-",
            type: "Number",
            clicked: props.negative
        },
        {
            name: "%",
            type: "Number",
            clicked: props.percent
        },
        {
            name: "÷",
            type: "Symbol",
            clicked: props.divide
        },
        {
            name: "7",
            type: "Number",
            clicked: props.numClicked
        },
        {
            name: "8",
            type: "Number",
            clicked: props.numClicked
        },
        {
            name: "9",
            type: "Number",
            clicked: props.numClicked
        },
        {
            name: "x",
            type: "Symbol",
            clicked: props.multiplied
        },
        {
            name: "4",
            type: "Number",
            clicked: props.numClicked
        },
        {
            name: "5",
            type: "Number",
            clicked: props.numClicked
        },
        {
            name: "6",
            type: "Number",
            clicked: props.numClicked
        },
        {
            name: "-",
            type: "Symbol",
            clicked: props.multiplied
        },
        {
            name: "1",
            type: "Number",
            clicked: props.numClicked
        },
        {
            name: "2",
            type: "Number",
            clicked: props.numClicked
        },
        {
            name: "3",
            type: "Number",
            clicked: props.numClicked
        },
        {
            name: "+",
            type: "Symbol",
            clicked: props.multiplied
        },
        {
            name: "0",
            type: "Number",
            clicked: props.numClicked
        },
        {
            name: ".",
            type: "Number",
            clicked: props.decimalClicked
        },
        {
            name: "=",
            type: "Symbol",
            clicked: props.equals
        }
    ];

    const isSymbol = (btn) => {
        return btn === '÷' ||
            btn === 'x' ||
            btn === '-' ||
            btn === '+' ||
            btn === '=';
    }

    buttons.forEach(btn => {
        let newButton = (
            <Button
                key={btn.name}
                btnType={btn.type}
                clicked={btn.clicked}>
                {btn.name}
            </Button>
        );
        if (btn.name === "0") {
            newButton = (
                <Button
                    key={btn.name}
                    btnType={btn.type}
                    clicked={btn.clicked}
                    style={{ 'flexGrow': 2 }}>
                    {btn.name}
                </Button>
            );
        }
        buttonRow.push(newButton);
        if (isSymbol(btn.name)) {
            buttonRows.push(
                <div
                    key={"button-row" + (buttonRowId + 1).toString()}
                    className={styles.Row}>
                    {buttonRow}
                </div>);
            buttonRow = [];
            buttonRowId += 1;
        }
    });

    return (
        <div className={styles.ButtonPanel}>
            {buttonRows}
        </div>
    );
}

export default buttonPanel;