import propTypes from 'prop-types'
import Button from './Components/Buttons'


const Header = ({title}) => {
    const button1 = "increment"
    return (
    <header class = "header">
         <h1 style = {headingStyle}>
               {title}
          </h1>
          <Button text = "Button1" color = "red" />
          <Button text = "Button2" color = "blue" />
          <Button text = "Button3" color = "green" />
          <Button text = {button1} color = "Black" />


     </header>)
}

Header.defaultProps = {
    title: 'Default Title'
}
Header.propTypes = {
    title: propTypes.string.isRequired
}

const headingStyle = {
    color: 'blue',
    backgroundColor: 'gray'
}