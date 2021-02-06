import React, {Component} from 'react';
import ButtonPanel from '../../components/ButtonPanel/ButtonPanel';
import Display from '../../components/Display/Display';

class Calculator extends Component {
    state = {
        displayVal: null,
        equationIndex: 0,
        equation: [] 
    }

    numClickedHandler = event => {
        let currVal = this.state.displayVal;
        let equation = this.state.equation;
        let equationIndex = this.state.equationIndex;
        if (currVal === null) {
            currVal = event.target.value;
        }
        else if (equation[equationIndex] === '+') {
            currVal = event.target.value;
            equationIndex += 1;
            this.setState({equationIndex: equationIndex});
        }
        else {
            currVal += event.target.value;
        }
        equation[equationIndex] = currVal;
        this.setState({displayVal: currVal});
        console.log(this.state.equation);
    }

    addHandler = () => {
        let equation = this.state.equation;
        let equationIndex = this.state.equationIndex;
        let displayVal = this.state.displayVal;
        if (equation.includes('+') && equation.length > 2) {
            let calculation = parseInt(equation[0]) + parseInt(equation[equationIndex]);
            equation[0] = calculation;
            equationIndex -= 1;
            equation.pop();
            this.setState({displayVal: calculation, equationIndex: equationIndex});
        } 
        else if (displayVal && equation[equationIndex] !== '+') {
            equation.push('+');
            equationIndex += 1;
            this.setState({equation: equation, equationIndex: equationIndex});
        }

        console.log(equation);
        console.log(equationIndex);
    }

    clearHandler = () => {
        this.setState({displayVal: null, equation: [], equationIndex: 0});
    }

    render() {
        return (
            <div>
                <Display value={this.state.displayVal === null ? '0' : this.state.displayVal} />
                <ButtonPanel 
                    numClicked={this.numClickedHandler}
                    addition={this.addHandler}
                    clear={this.clearHandler} />
            </div>
        );
    }
}

export default Calculator;