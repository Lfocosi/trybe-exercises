import React from 'react'

class PokeInfo extends React.Component {
    render () {
        return <div>
                <text>{this.props.nome}</text>
                <text>{this.props.tipo}</text>
            </div>
    }
}

export default PokeInfo