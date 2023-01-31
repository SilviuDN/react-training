import './IdCard.css'

const IdCard = (props) => {
    const {picture, firstName, lastName, gender = 'none', height = 'NA', birth, country='NA', isSelected = true} = props
    const formattedDate = birth?.toISOString().split('T')[0 ]
    // const formattedDate = Date.format( birth, "MMMM do, yyyy H:mma")
    return(
        <article style={{ backgroundColor: props.isSelected && 'lightblue'}}>
            <img src={picture} alt = 'profile picture'></img>
            <main>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Country: {country}</p>
                <p>Gender: {gender}</p>
                <p>Height: {height}</p>
                <p>Birth date: {formattedDate ? formattedDate : 'NA'}</p>
            </main>
        </article>
    )
}

export default IdCard