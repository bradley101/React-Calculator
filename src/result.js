import React from 'react'

export default class Result extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {}
    }

    render() {
        return <div id="result">{this.props.value}</div>
    }
}