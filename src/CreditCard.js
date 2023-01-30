import './CreditCard.css';

import visaIcon from './img/visa.png';
import masterCardIcon from './img/mastercard.jpg';
 
const CreditCard = (props) => {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props
    const pic = type === 'Visa' ? visaIcon : masterCardIcon
    const hiddenNumber = "**** **** **** " + number.slice(-4)
    return(
        <article style={{backgroundColor: bgColor, color: color}}>
            <div className="creditCard">
                <img src={pic} className='alignRight'></img>
                <p className='cardNumber'>{hiddenNumber}</p>
                <p className='alignLeft'>
                    <span>Expires: {expirationMonth}/{expirationYear}</span>
                    <span>{bank}</span>
                </p>
                <p className='alignLeft'>{owner}</p>
            </div>
        </article>
    )
}

export default CreditCard