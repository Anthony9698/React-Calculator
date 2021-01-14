import React, {Component} from 'react';
import ButtonPanel from '../../components/ButtonPanel/ButtonPanel';
import Display from '../../components/Display/Display';

class Calculator extends Component {
    render() {
        return (
            <div>
                <Display />
                <ButtonPanel />
            </div>
        );
    }
}

export default Calculator;