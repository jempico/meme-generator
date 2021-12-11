import "./form.css"
import {useState} from "react";
import DarkBtn from "../darkbtn/Darkbtn"

export default function Form (props) {
    function generateNewMeme() {
        let arrayMeme = props.data;
        let randomNum = Math.floor(Math.random() * arrayMeme.length);
        let memeURL = arrayMeme[randomNum].url
        return memeURL;
    }
    let memeObj = { 
        topText: '', 
        bottomText: '', 
        randomImage: generateNewMeme()
    }
    const [currentMeme, setMeme] = useState(memeObj)
    
    function setNewMeme () {
        setMeme(prevState => {
            return {...prevState, randomImage: generateNewMeme()}
        });
    }

    const [isDarkMode, setDarkMode] = useState(false);
    function toggleDarkMode() {
        setDarkMode(prevState => { return !prevState })
    }

    let darkMode = {
        backgroundColor: isDarkMode ? "#222222" : "#ffffff"
    }
    return(
        <main className="formContainer" style={darkMode}>
            <div className="form">
                <DarkBtn handleClick={toggleDarkMode} on={isDarkMode}/>
                <div className="formInputContainer">                    
                    <input className="formInput" type="text" placeholder="Shut up:"/>
                    <input className="formInput"type="text" placeholder="and take my money:"/>
                </div>
                <button onClick={setNewMeme}className="formSubmit">Get a new meme image  🖼</button>
            </div>
            <div >
                <img className="meme" src={currentMeme.randomImage} alt=""></img>
            </div>
        </main>
    )
}