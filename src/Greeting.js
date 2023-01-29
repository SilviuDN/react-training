const Greeting = (props) => {
    const {lang} = props
    let text = props.children

    let greet

    switch (lang) {
        case 'de':
            greet = `Hallo ${text}!`
            break;
        case 'es':
            greet = `¡Hola ${text}!`
            break;
        case 'fr':
            greet = `Bonjour ${text}!`
            break;    
        default:
            greet = `Hello ${text}!`
            break;
    }

    return(
        <article>
            <h2>{greet}</h2>
        </article>
    )
}

export default Greeting