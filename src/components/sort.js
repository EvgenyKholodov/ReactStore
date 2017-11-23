import React, {Component} from 'react';

const typeSort = [
  {
    key: 0,
    value: '-----'
  },
  {
    key: 1,
    value: 'MaxPrice'
  },
  {
    key: 2,
    value: 'MinPrice'
  },
  {
    key: 3,
    value: 'Alpha'
  },
  {
    key: 4,
    value: 'Rating'
  }

];

class Sort extends Component {
  constructor(props) {
    super(props)
    this.onChangeType = this.onChangeType.bind(this);


  }


  onChangeType(e) {
    this.props.changeType(e.target.value);
  }

  render() {

    return (
      <p>sorting by
        <select name="" id="" onChange={this.onChangeType}>
          {typeSort.map((item, index) => (
            <option key={index} value={item.key}>{item.value}</option>
          ))}
        </select>
      </p>
    )
  }
}


export default Sort;