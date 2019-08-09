import React from 'react'

export default class Button extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {} 
        console.log(this.props.click);
        this.click = this.click.bind(this);
    }
    click() {
        this.props.click(this.props.value)
    }
    render() {
        return(
            <div id={'btn-' + this.props.value} onClick={this.click} >{this.props.symbol}</div>
        )
    }
}

