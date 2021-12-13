import PropTypes from "prop-types";
import style from "./button.module.css"

function Button({text}){
    return (
        <button className={style.cblueBtn}>{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Button;