import React, { Component } from 'react';


class CurrentItem extends Component {
    render () {
        const {img, name, price, rating} = this.props.data;


        return (
            <div className="item">
                <img src={img} alt=""/>
                <p>{name}</p>
                <p>{price}</p>
                <p>{rating}</p>
            </div>

        )

    }

}
export default CurrentItem;