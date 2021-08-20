import PropTypes from 'prop-types'

const Button = ({ text, color, onClick}) => {

    return (
        <button
            onClick={onClick}
            className="btn" 
            style={{ backgroundColor: color }}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    text: "Add",
    color: "black"
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClock: PropTypes.func,
}

export default Button
