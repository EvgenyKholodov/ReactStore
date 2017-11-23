import React, {Component} from 'react';

import Panel from './Panel';
import '../main.css'

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goods: [
        {
          img: 'http://www.saleable.ru/198-1109-large/mobilnyj-telefon-a738-.jpg',
          name: 'Очень хороший телефон',
          price: 150,
          rating: '2'
        },
        {
          img: 'http://www.saleable.ru/310-1251-large/mobilnyj-telefon-e73.jpg',
          name: 'Смартфон',
          price: 170,
          rating: '3'
        },
        {
          img: 'http://content.foto.mail.ru/bk/bolotow/_blogs/i-593.jpg',
          name: 'Зверь машина',
          price: 33,
          rating: '5'
        },
        {
          img: 'http://www.saleable.ru/125-659-large/mobilnyj-telefon-.jpg',
          name: 'ЭВМ',
          price: 234,
          rating: '1'
        },
        {
          img: 'http://www.dilaxy.ru/netcat_files/94/67/samsing_gt_i9300.jpg',
          name: 'Почти ноутбук',
          price: 2356,
          rating: '5'
        },
        {
          img: 'https://icon-icons.com/icons2/157/PNG/256/android_mobile_phone_22183.png',
          name: 'Планшет',
          price: 5423,
          rating: '100500'
        },
        {
          img: 'https://img.xdrv.ru/articles/385/small_logo.jpg',
          name: ' Китайский айфон',
          price: 51222,
          rating: '3'
        },

        {
          img: 'https://img.xdrv.ru/articles/376/small_logo.jpg',
          name: 'Моторолла',
          price: 5142,
          rating: '4'
        },

        {
          img: 'https://s00.yaplakal.com/pics/pics_original/0/4/5/2305540.jpg',
          name: 'Слойка с творогом',
          price: 500,
          rating: '5'
        },

        {
          img: 'https://img.xdrv.ru/articles/421/small_logo.jpg',
          name: 'Подводная лодка',
          price: '542342',
          rating: '3'
        }


      ]
    }
  }


  render() {
    const {goods} = this.state;

    return (
      <div className="main__page">

        <div>
          <Panel
            goods={goods}
          />


        </div>


      </div>
    );
  }
}


export default MainPage;