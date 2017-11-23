import React, {Component} from 'react';


class CurrentItem extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const {onClick, data} = this.props;
    onClick(data);
  }

  render() {
    const {img, name, price, rating} = this.props.data;


    return (
      <div onClick={this.onClick} className="item">
        <img src={img} alt=""/>
        <p>Name: {name}</p>
        <p>Price: {price}$</p>
        <p>Rating: {rating}★</p>
      </div>

    )

  }

}

export default CurrentItem;