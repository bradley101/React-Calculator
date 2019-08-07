import React from 'react'

export default class Button extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {} 
    }
    render() {
        return(
            <div id={'btn-' + this.props.value}>{this.props.symbol}</div>
        )
    }
}

