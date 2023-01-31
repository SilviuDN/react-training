import './NumbersTable.css';

import { Component } from 'react';

class NumbersTable extends Component  {

    arr = () => {
        let arr = [];
        for(let i = 0; i < this.props.limit + 1; i++)
            arr.push(i);
        return arr;
    }

    state = {
        arrayList: this.arr()
    };  
    
    func = () => {
        this.setState({});
    }

    render() {
        return (
            <article className="numbers-table">
                <ul>
                    {
                        this.state.arrayList.map((el, i) => 
                            <li 
                                key={i}
                                style={{
                                    backgroundColor:  i % 2 === 0 ? 'white' : 'red'
                                }}
                            >
                                <p>{i}</p>
                            </li>)
                    }
                </ul>
            </article>
        )
    }
}

export default NumbersTable;