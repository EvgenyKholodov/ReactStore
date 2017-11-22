import React, { Component } from 'react';


class Showing extends Component {

    render() {
    var goods = this.props.goods
        return (
            <div>
                <p>Showing: {goods.length}</p>

            </div>
        )
    }
}


export default Showing;