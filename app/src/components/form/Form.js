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
    return(
        <main className="formContainer">
            <div className="form">
                <DarkBtn/>
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