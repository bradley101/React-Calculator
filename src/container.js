import React from 'react'
import Result from './result'
import Button from './button'

export default class Container extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {}
    }

    render() {
        return (
            <div id="main-div">
                <Result />
                <div id="buttons">
                    <Button value='1' symbol='1' />
                    <Button value='2' symbol='2' />
                    <Button value='3' symbol='3' />
                    <Button value='4' symbol='4' />
                    <Button value='5' symbol='5' />
                    <Button value='6' symbol='6' />
                    <Button value='7' symbol='7' />
                    <Button value='8' symbol='8' />
                    <Button value='9' symbol='9' />
                    <Button value='0' symbol='0' />
                    <Button value='dec' symbol='.' />
                    <Button value='eq' symbol='=' />
                    <Button value='plus' symbol='+' />
                    <Button value='minus' symbol='-' />
                    <Button value='mul' symbol='*' />
                    <Button value='div' symbol='/' />
                </div>
            </div>
        )
    }
}