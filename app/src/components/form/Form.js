import "./form.css"

export default function Form () {
    return(
        <div className="formContainer">
            <form className="form">
                <div className="formInputContainer">                    
                    <input className="formInput" type="text" value="Shut up:"/>
                    <input className="formInput"type="text" value="and take my money:"/>
                </div>
                <input className="formSubmit"type="submit" value="Get a new meme image  🖼" />
            </form>
            <div className="meme">
                <img src="memeimg.png" alt=""></img>
            </div>
        </div>
    )
}