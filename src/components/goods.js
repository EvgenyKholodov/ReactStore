import React, {Component} from 'react';
import CurrentItem from './CurrentItem';
import Modal from 'react-modal';

class Goods extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.selectItem = this.selectItem.bind(this)

    this.state = {
      currentItem: {},
      isActive: false
    }
  }

  selectItem(currentItem) {
    this.setState({currentItem}, () => {
      this.toggle();
    })
  }

  toggle() {
    this.setState({
      isActive: !this.state.isActive
    })
  };


  render() {

    const {isActive, currentItem} = this.state;

    function MaxPriceSort(a, b) {
      if (a.price > b.price) {
        return -1
      }

      else return +1;
    };

    function MinPriceSort(a, b) {
      if (a.price < b.price) {
        return -1
      }

      else return +1;
    };

    function AlphaSort(a, b) {
      if (a.name > b.name) {
        return 1
      }
      else return -1
    };

    function RatingSort(a, b) {
      if (a.rating < b.rating) {
        return 1
      }
      else return -1
    };


    let {typeIndex} = this.props;
    var data = this.props.goods;
    let newsTemplate;
    console.log(typeIndex);
    let Method = 0;
    switch (typeIndex) {
      case '1':
        Method = MaxPriceSort;

        break;

      case '2':
        Method = MinPriceSort;
        break;
      case '3':
        Method = AlphaSort;
        break;

      case '4':
        Method = RatingSort;
        break;

      default:
        console.log('case deafault')
        break;
    }


    newsTemplate = data.sort(Method).map((item, index) => {

      return (
        <div key={index}>
          <CurrentItem data={item} onClick={this.selectItem}/>
        </div>
      )
    })
    return (
      <div className="ReadyItem">
        {newsTemplate}
        <Modal
          isOpen={isActive}
          contentLabel="Modal">
          <div>
            <CurrentItem data={currentItem} onClick={this.toggle}/>
            <button onClick={this.toggle}>close</button>
          </div>
        </Modal>

      </div>
    );
  }
};


export default Goods;
