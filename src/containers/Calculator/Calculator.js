import React, {Component} from 'react';
import ButtonPanel from '../../components/ButtonPanel/ButtonPanel';
import Display from '../../components/Display/Display';

class Calculator extends Component {
    state = {
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

    hasOperator = equation => {
        for (let x = 0; x < equation.length; x++) {
            if (equation[x] === '+' || equation[x] === '-' || equation[x] === '÷' || equation[x] === 'x') {
                return true;
            }
        }
        return false;
    }

    operationHelper = operator => {
        let equation = this.state.equation;
        let displayVal = this.state.displayVal;

        if (this.hasOperator(equation) && equation.length > 2) {
            let operand1 = parseInt(equation[0]);
            let operand2 = parseInt(equation[2]);
            let op = equation[1];
            let calculation = this.operations[op](operand1, operand2);
            equation = [];
            equation.push(calculation);
            equation.push(operator)
            this.setState({equation: equation, displayVal: equation[0]});
        } 
        else if (equation.length === 0 ) {
            if (!displayVal) { 
                equation.push('0', operator); 
                this.setState({displayVal: '0'}); 
            }
            else { equation.push(displayVal, operator); }
        } 
        else {
            equation[equation.length-1] = operator;
        }

        this.setState({equation: equation});
    }

    numClickedHandler = event => {
        let currVal = this.state.displayVal;
        let equation = this.state.equation;
        if (currVal === null) { currVal = event.target.value; }
        else if (this.hasOperator(equation) && equation.length < 3) {
            currVal = event.target.value;
            equation.push(currVal);
        }
        else {
            currVal += event.target.value;
        }
        this.setState({displayVal: currVal});
        if (equation[2]) {
            equation[2] = currVal;
        }
    }

    addHandler = () => this.operationHelper('+')
    subHandler = () => this.operationHelper('-')

    clearHandler = () => {
        this.setState({displayVal: null, equation: [], equationIndex: 0});
    }

    render() {
        return (
            <div>
                <Display value={this.state.displayVal === null ? '0' : this.state.displayVal} />
                <ButtonPanel 
                    numClicked={this.numClickedHandler}
                    add={this.addHandler}
                    subtract={this.subHandler}
                    clear={this.clearHandler} />
            </div>
        );
    }
}

export default Calculator;