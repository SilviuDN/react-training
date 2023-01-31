import './ClickablePicture.css'

import startImg from './img/persons/maxence.png';
import hiddenImg from './img/persons/maxence-glasses.png';
import { Component } from 'react';

class ClickablePicture extends Component{
    state = {
        image: startImg
    }

    toggleImage = () => {
        this.setState({
            image: this.state.image === startImg ? hiddenImg : startImg
        })
    }

    render(){
        return(
            <article className='clickablePicture'>
                <img src={this.state.image} alt = 'image' onClick={this.toggleImage}></img>
            </article>
        )
    }
}

export default ClickablePicture