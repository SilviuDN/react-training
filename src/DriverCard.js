import './DriverCard.css';
import Rating from "./Rating"
 
const DriverCard = (props) => {
    const {name, rating, img, car} = props
    return(
        <article>
            <img src={img}></img>
            <div className="driverCard">
                <p>{name}</p>
                <Rating>{rating}</Rating>
                <p>
                    <span>{car.model}</span> - <span>{car.licensePlate}</span>
                </p>
            </div>
        </article>
    )
}

export default DriverCard