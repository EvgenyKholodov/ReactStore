import React, { Component } from 'react';
import Sort from './sort';
import PageSize from './PageSize';
import PageNumber from './PageNumber';
import Showing from './Showing';
import PageSwitcher from './Pageswitcher';
import Goods from './goods';





class Panel extends Component {



    render() {
         TypeSortChanger(e) {

        };


        return (
            <div className='main__menu'>
                <div
                className="menu">
                    <Showing
                        goods={this.props.goods}
                    />
                    <Sort />
                    <PageSize />
                    <PageNumber/>
                    <PageSwitcher/></div>
                <div><Goods goods={this.props.goods}/>
                </div>

            </div>


        )
    }
}

export default Panel;