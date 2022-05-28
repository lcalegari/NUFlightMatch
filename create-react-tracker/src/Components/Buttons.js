import PropTypes from 'prop-types'
const Button = ({text, color}) => {
    const onClick = () => {
        console.log("You clicked a button!")
    }
    
    return (
    <div>
        <button style = {{color : color}}>{text}</button>
    </div>)
}

Button.defaultProps = {
    text : "DefaultText",
    color : "Purple"
}

Button.PropTypes = {
    text : PropTypes.string,
    color : PropTypes.string
}

export default Button 