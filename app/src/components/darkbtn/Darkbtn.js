import "./darkbtn.css"

export default function Darkbtn ({handleClick, on}) {
    
    let darkMode = {
        backgroundColor: on? "#ffffff" : "#222222",
        color: on? "#222222" : "#ffffff"
    }
    console.log(on);
    return(
        <div className="btn_wrapper">
        <button className="dark_btn" onClick={handleClick} style={darkMode}>Dark Mode
        </button>
        </div>
    )
}