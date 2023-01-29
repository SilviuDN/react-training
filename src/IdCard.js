import './IdCard.css'

const IdCard = (props) => {
    const {picture, firstName, lastName, gender, height, birth} = props
    const formattedDate = birth.toISOString().split('T')[0 ]
    // const formattedDate = Date.format( birth, "MMMM do, yyyy H:mma")
    return(
        <article>
            <img src={picture}></img>
            <main>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Gender: {gender}</p>
                <p>Height: {height}</p>
                <p>Birth date: {formattedDate}</p>
            </main>
        </article>
    )
}

export default IdCard