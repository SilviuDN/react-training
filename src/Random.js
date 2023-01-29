const Random = (props) => {
    const {min, max} = props
    const randomValue = min + Math.floor(Math.random(max-min) * (max-min))
    const gt = '>'
    return(
        <article>
            <h2>Random value between {min} and {max} ={gt} {randomValue}</h2>
        </article>
    )
}

export default Random