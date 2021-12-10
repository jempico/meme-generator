import "./darkbtn.css"

export default function Darkbtn (props) {
    
    return(
        <div className="btn_wrapper">
        <button className="dark_btn" onClick={props.handleClick}>Dark Mode
        </button>
        </div>
    )
}