import React from 'react'

class PokeImage extends React.Component {
    render () {
        return <div>
                <img src={this.props.imagem} />
            </div>
    }
}

export default PokeImage