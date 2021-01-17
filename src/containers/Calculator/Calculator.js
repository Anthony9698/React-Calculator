import React, {Component} from 'react';
import ButtonPanel from '../../components/ButtonPanel/ButtonPanel';
import Display from '../../components/Display/Display';

class Calculator extends Component {
    state = {
        calcVal: 0 
    }

    numClickedHandler = event => {
        let currVal = this.state.calcVal.toString();
        if (currVal === '0') {
            currVal = event.target.value;
        } else {
            currVal += event.target.value;
        }
        this.setState({calcVal: currVal});
    }

    clearHandler = () => {
        this.setState({calcVal: 0});
    }

    render() {
        return (
            <div>
                <Display value={this.state.calcVal} />
                <ButtonPanel 
                    numClicked={this.numClickedHandler}
                    clear={this.clearHandler} />
            </div>
        );
    }
}

export default Calculator;