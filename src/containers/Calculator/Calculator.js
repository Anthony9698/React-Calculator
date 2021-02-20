import React, { Component } from 'react';
import ButtonPanel from '../../components/ButtonPanel/ButtonPanel';
import Display from '../../components/Display/Display';

class Calculator extends Component {
    state = {
        currVal: null,
        displayVal: null,
        equation: []
    }

    operations = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '÷': (x, y) => (x/y),
        'x': (x, y) => x * y
    }

    isOperator = symbol => {
        return symbol === '+' || symbol === '-' || symbol === '÷' || symbol === 'x';
    }

    calculateNumber = (operand1, operand2, operator) => {
        let calculation = this.operations[operator](Number(operand1), Number(operand2));

        if (calculation === Infinity) {
            return 0;
        }
        else if (calculation % 1 !== 0) {
            return calculation.toPrecision(9);
        }
        return calculation;
        
    }

    operationHelper = operator => {
        let newEquation = [...this.state.equation];
        let currVal = this.state.currVal;

        if (currVal) {
            if (newEquation.length === 2) {
                let calculation = this.calculateNumber(newEquation[0], currVal, operator);
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
    equalsHandler = () => {
        let newEquation = [...this.state.equation];
        let currVal = this.state.currVal;
        if (currVal && newEquation.length === 2) {
            let calculation = this.calculateNumber(newEquation[0], currVal, newEquation[1]);
            this.setState({currVal: calculation, displayVal: calculation, equation: []});
        }
    }

    clearHandler = () => { this.setState({ displayVal: null, currVal: null, equation: []}); }

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
                    equals={this.equalsHandler}
                    clear={this.clearHandler} />
            </div>
        );
    }
}

export default Calculator;