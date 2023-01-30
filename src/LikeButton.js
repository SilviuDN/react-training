import { Component } from 'react'
import './LikeButton.css'

class LikeButton extends Component{
    bgColors = ['purple','blue','green','yellow','orange','red'];

    state = {
        counter: 0,
        color: this.bgColors[0]
    }

    count = () => {
        this.setState({
            counter: this.state.counter + 1,
            color: this.bgColors[ this.state.counter % 6]
        })
    }

    render(){
        return(
           <button
            onClick = {this.count }
            style = {{ backgroundColor: this.state.color}}
            >
                {this.state.counter} likes
           </button> 
        )
    }
}

export default LikeButton