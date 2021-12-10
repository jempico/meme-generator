import "./form.css"
import {useState} from "react";

export default function Form (props) {
    function generateNewMeme() {
        let arrayMeme = props.data;
        let randomNum = Math.floor(Math.random() * arrayMeme.length);
        let memeURL = arrayMeme[randomNum].url
        return memeURL;
    }

    const [currentMeme, setMeme] = useState(generateNewMeme())
    
    function setNewMeme () {
        setMeme(generateNewMeme());
    }
    return(
        <main className="formContainer">
            <div className="form">
                <div className="formInputContainer">                    
                    <input className="formInput" type="text" placeholder="Shut up:"/>
                    <input className="formInput"type="text" placeholder="and take my money:"/>
                </div>
                <button onClick={setNewMeme}className="formSubmit">Get a new meme image  🖼</button>
            </div>
            <div >
                <img className="meme" src={currentMeme} alt=""></img>
            </div>
        </main>
    )
}