import React, {Component} from 'react';

import Panel from './Panel';
import '../main.css'

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goods: [
                {
                    img: 'https://img.xdrv.ru/articles/421/small_logo.jpg',
                    name: 'Китайский айфон',
                    price: '342423',
                    rating: '2'
                },
                {
                    img: 'https://img.xdrv.ru/articles/421/small_logo.jpg',
                    name: 'Китайский айфон. 4',
                    price: '542342',
                    rating: '3'
                },
                {
                    img: 'https://img.xdrv.ru/articles/421/small_logo.jpg',
                    name: 'Китайский айфон 171',
                    price: '4423432',
                    rating: '2'
                },
                {
                    img: 'https://img.xdrv.ru/articles/421/small_logo.jpg',
                    name: 'В четчерг, четвертого числа...',
                    price: '242342',
                    rating: '1'
                },
                {
                    img: 'https://img.xdrv.ru/articles/421/small_logo.jpg',
                    name: 'Китайский айфон',
                    price: '342423',
                    rating: '2'
                },
                {
                    img: 'https://img.xdrv.ru/articles/421/small_logo.jpg',
                    name: 'Китайский айфон. 4',
                    price: '542342',
                    rating: '3'
                },
                {
                    img: 'https://img.xdrv.ru/articles/421/small_logo.jpg',
                    name: 'Китайский айфон 171',
                    price: '4423432',
                    rating: '2'
                },
                {
                    img: 'https://img.xdrv.ru/articles/421/small_logo.jpg',
                    name: 'В четчерг, четвертого числа...',
                    price: '242342',
                    rating: '1'
                }, {
                    img: 'https://img.xdrv.ru/articles/421/small_logo.jpg',
                    name: 'Китайский айфон',
                    price: '342423',
                    rating: '2'
                },
                {
                    img: 'https://img.xdrv.ru/articles/421/small_logo.jpg',
                    name: 'Китайский айфон. 4',
                    price: '542342',
                    rating: '3'
                },
                {
                    img: 'https://img.xdrv.ru/articles/421/small_logo.jpg',
                    name: 'Китайский айфон 171',
                    price: '4423432',
                    rating: '2'
                },
                {
                    img: 'https://img.xdrv.ru/articles/421/small_logo.jpg',
                    name: 'В четчерг, четвертого числа...',
                    price: '242342',
                    rating: '1'
                },

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