import React from 'react'

class DiceBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            results: this.props.rolledDice
        }
    }
    render() {
        return(
            <div>
                <div>
                    {this.state.results}
                </div>
            </div>
        )
    }
}

export default DiceBox