import React, {Component} from 'react';
import Sort from './sort';
import PageSize from './PageSize';
import PageNumber from './PageNumber';
import Showing from './Showing';
import PageSwitcher from './Pageswitcher';
import Goods from './goods';

class Panel extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.state = {
      typeIndex: 0
    }

  }

  onChange(newTypeIndex) {
    this.setState({
      typeIndex: newTypeIndex

    })

  };

  render() {
    return (
      <div className='main__menu'>
        <div
          className="menu">
          <Showing
            goods={this.props.goods}
          />
          <Sort changeType={this.onChange}/>
          <PageSize/>
          <PageNumber/>
          <PageSwitcher/></div>
        <div>
          <Goods
            goods={this.props.goods}
            typeIndex={this.state.typeIndex}
          />
        </div>

      </div>


    )
  }
}

export default Panel;