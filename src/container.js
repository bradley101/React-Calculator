import React from 'react'
import Result from './result'
import Button from './button'

export default class Container extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {
            answer: 0,
            current_num: '',
            operator: '+'
        }
        this.num_click = this.num_click.bind(this);
        this.operator_click = this.operator_click.bind(this);
        this.operator_click_intermediate = this.operator_click_intermediate.bind(this);
    }

    num_click(num) {
        var t = this.state.current_num
        this.setState({
            current_num: t + num
        })
        console.log(this.state)
    }

    operator_click(operator) {
        this.operator_click_intermediate(this.state.operator);
        this.setState({
            operator: operator
        })
        console.log(this.state)
    }

    operator_click_intermediate(operator) {
        let num = parseFloat(this.state.current_num);
        if (operator === '+') {
            this.state.answer += num;
        } else if (operator === '-') {
            this.state.answer -= num;
        } else if (operator === '*') {
            this.state.answer *= num;
        } else if (operator === '/') {
            this.state.answer /= num;
        }
        this.state.current_num = 0;
    }

    render() {
        return (
            <div id="main-div">
                <Result value={this.state.current_num}/>
                <div id="buttons">
                    <Button value='1' symbol='1' click={this.num_click}/>
                    <Button value='2' symbol='2' click={this.num_click} />
                    <Button value='3' symbol='3' click={this.num_click} />
                    <Button value='4' symbol='4' click={this.num_click} />
                    <Button value='5' symbol='5' click={this.num_click} />
                    <Button value='6' symbol='6' click={this.num_click} />
                    <Button value='7' symbol='7' click={this.num_click} />
                    <Button value='8' symbol='8' click={this.num_click} />
                    <Button value='9' symbol='9' click={this.num_click} />
                    <Button value='0' symbol='0' click={this.num_click} />
                    <Button value='dec' symbol='.' click={this.operator_click}/>
                    <Button value='eq' symbol='='  click={this.operator_click}/>
                    <Button value='plus' symbol='+'  click={this.operator_click}/>
                    <Button value='minus' symbol='-'  click={this.operator_click}/>
                    <Button value='mul' symbol='*'  click={this.operator_click}/>
                    <Button value='div' symbol='/'  click={this.operator_click}/>
                </div>
            </div>
        )
    }
}