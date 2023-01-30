 import './BoxColor.css'
 
const BoxColor = (props) => {
    const {r, g, b, textStyle} = props
    const colorCode = 'rgb(' + r + ',' + g + ',' + b + ')'
    const hexR = r<16 ? r.toString(16) : '0' + r.toString(16)
    const hexG = g<16 ? g.toString(16) : '0' + g.toString(16)
    const hexB = b<16 ? b.toString(16) : '0' + b.toString(16)
    const hexColorCode = '#' + hexR + hexG + hexB
    const textColor = textStyle==='light' ? 'white' : 'black'
    return(
        <p className="BoxModel" style={{backgroundColor: colorCode, color: textColor}}>
            {colorCode}
            <br></br>
            {hexColorCode}
        </p>
    )
}

export default BoxColor