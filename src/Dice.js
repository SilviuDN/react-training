import './Dice.css'

import { Component } from 'react'

import diceEmpty from './img/dice-empty.png';
import dice1 from './img/dice1.png';
import dice2 from './img/dice2.png';
import dice3 from './img/dice3.png';
import dice4 from './img/dice4.png';
import dice5 from './img/dice5.png';
import dice6 from './img/dice6.png';

class Dice extends Component {
    
    diceValues = [diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6];
    initValue = Math.floor(Math.random() * 6 + 1);

    state = {
        imageIndex: this.initValue,
        image: this.diceValues[this.initValue]
    }

    rollDice = () => {
        this.setState({
            image: this.diceValues[0]
        })

        setTimeout( () => {
            this.setState({
                imageIndex: Math.floor(Math.random() * 6 + 1),
                image: this.diceValues[this.state.imageIndex]
            })
        }, 1000)
    }

    render(){
        return (
            <article>
                <img onClick={this.rollDice} src={this.state.image} alt="Dice" />
            </article>
        )
    }

}

export default Dice