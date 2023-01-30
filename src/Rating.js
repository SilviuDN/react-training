//  import './Rating.css'
 
const Rating = (props) => {
    const rating = Math.round(props.children) 
    let ratingString = ''
    for(let i=0; i<5; i++){
        ratingString += i<rating ? '★' : '☆'
    }
    return(
        // <p>hey</p>
        <p>{ratingString}</p>
    )

}

export default Rating

// '&#10032;'
// '&#9733;'
// '&#9734;'


