import React, {Component} from 'react';

const typeSort = [
    {
        key: 0,
        value: 'random'
    },
    {
        key: 1,
        value: 'max'
    },
    {
        key: 2,
        value: 'min'
    },

];


class Sort extends Component {
    constructor(props) {
        super(props)

        this.onChange = this.onChange.bind(this);
        this.state = {
            typeSort: ''
        }
    }




    onChange(e) {
        const {value} = e.target
        this.setState({
            typeSort: value
        })
    }

    render() {
        return (
        <p>sorting by
                <select name="" id="" onChange={this.onChange}>
                    {typeSort.map((item, index) => (
                        <option key = {index} value={item.key}>{item.value}</option>
                    ))}
                </select>
            </p>
        )


    }
}


export default Sort;