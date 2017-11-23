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
    if (typeIndex === '1') {
      newsTemplate = data.sort(MaxPriceSort).map((item, index) => {

        return (
          <div key={index}>
            <CurrentItem data={item} onClick={this.selectItem}/>
          </div>
        );
      })

    }
    else if (typeIndex === '2') {

      newsTemplate = data.sort(MinPriceSort).map((item, index) => {
        return (
          <div key={index}>
            <CurrentItem data={item} onClick={this.selectItem}/>
          </div>
        );
      })
    }
    else if (typeIndex === '3') {

      newsTemplate = data.sort(AlphaSort).map((item, index) => {
        return (
          <div key={index}>
            <CurrentItem data={item} onClick={this.selectItem}/>
          </div>
        );
      })
    }
    else if (typeIndex === '4') {

      newsTemplate = data.sort(RatingSort).map((item, index) => {
        return (
          <div key={index}>
            <CurrentItem data={item} onClick={this.selectItem}/>
          </div>
        );
      })
    }
    else {

      newsTemplate = data.map((item, index) => {

        return (
          <div key={index}>
            <CurrentItem data={item} onClick={this.selectItem}/>
          </div>
        );
      })

    }
    ;
    return (
      <div className="ReadyItem">
        {newsTemplate}
        <Modal
          isOpen={isActive}
          contentLabel="Modal">
          <div>
            <CurrentItem data={currentItem} />
            <button onClick={this.toggle}>close</button>
          </div>
        </Modal>

      </div>
    );
  }
};


export default Goods;

