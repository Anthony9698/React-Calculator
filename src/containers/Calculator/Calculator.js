import React, { Component } from 'react';
import ButtonPanel from '../../components/ButtonPanel/ButtonPanel';
import Display from '../../components/Display/Display';

class Calculator extends Component {
    state = {
        currVal: null,
        displayVal: null,
        equationIndex: 0,
        equation: []
    }

    operations = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '÷': (x, y) => x / y,
        'x': (x, y) => x * y
    }

    isOperator = symbol => {
        return symbol === '+' || symbol === '-' || symbol === '÷' || symbol === 'x';
    }

    operationHelper = operator => {
        let newEquation = [...this.state.equation];
        let currVal = this.state.currVal;

        if (currVal) {
            if (newEquation.length === 2) {
                let operand1 = parseInt(newEquation[0]);
                let operand2 = parseInt(currVal);
                let op = newEquation[1];
                let calculation = this.operations[op](operand1, operand2);
                if (calculation === Infinity) { calculation = 0; }
                newEquation[0] = calculation;
                newEquation[1] = operator;
                this.setState({ equation: newEquation, displayVal: calculation, currVal: null });
            }
            else {
                this.setState({ equation: [...newEquation, currVal, operator], currVal: null });
            }
        }
        else if (!currVal && !this.isOperator(newEquation[newEquation.length - 1])) {
            this.setState({ currVal: null, equation: [...newEquation, 0, operator] });
        }
        else {
            newEquation[newEquation.length - 1] = operator;
            this.setState({ equation: newEquation });
        }
    }

    numClickedHandler = event => {
        let currVal = this.state.currVal;
        if (currVal === null) { currVal = event.target.value; }
        else if (currVal !== 0) { currVal += event.target.value; }
        this.setState({ currVal: currVal, displayVal: currVal });
    }

    addHandler = () => this.operationHelper('+');
    subHandler = () => this.operationHelper('-');
    multHandler = () => this.operationHelper('x');
    divHandler = () => this.operationHelper('÷');

    clearHandler = () => {
        this.setState({ displayVal: null, equation: [], equationIndex: 0 });
    }

    render() {
        return (
            <div>
                <Display value={this.state.displayVal === null ? '0' : this.state.displayVal} />
                <ButtonPanel
                    clearText={this.state.displayVal === null ? 'AC' : 'C'}
                    numClicked={this.numClickedHandler}
                    add={this.addHandler}
                    subtract={this.subHandler}
                    multiply={this.multHandler}
                    divide={this.divHandler}
                    clear={this.clearHandler} />
            </div>
        );
    }
}

export default Calculator;