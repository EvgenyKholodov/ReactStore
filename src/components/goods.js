import React, { Component } from 'react';
import CurrentItem from './CurrentItem';



class Goods extends Component {
    render () {
        var data = this.props.goods;

        var newsTemplate = data.map(function(item, index) {
            return (
                <div className="zal" key={index}>

                <CurrentItem data={item} />
                </div>
            )


        })

        return (
            <div className="ReadyItem">

                {newsTemplate}
            </div>



        )
    }

}


export default Goods;