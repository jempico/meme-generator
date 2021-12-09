import "./form.css"

export default function Form () {
    return(
        <main className="formContainer">
            <form className="form">
                <div className="formInputContainer">                    
                    <input className="formInput" type="text" placeholder="Shut up:"/>
                    <input className="formInput"type="text" placeholder="and take my money:"/>
                </div>
                <button className="formSubmit">Get a new meme image  🖼</button>
            </form>
            <div className="meme">
                <img src="memeimg.png" alt=""></img>
            </div>
        </main>
    )
}