import "./form.css"
import {useState} from "react";
import DarkBtn from "../darkbtn/Darkbtn"
import memesData from "../../memesData.js";

export default function Form () {

    //Local state for imported meme data json
    const [allMemeImages, setAllMemeImages] = useState(memesData)


    //Utility function that generates new meme URL
    function generateNewMemeUrl() {
        let arrayMeme = allMemeImages.data.memes;
        let randomNum = Math.floor(Math.random() * arrayMeme.length);
        let memeURL = arrayMeme[randomNum].url
        return memeURL;
    }

    //Updating state for current meme whenever submit button is clicked
    function setNewMeme () {
        setMeme(prevState => {
            return {...prevState, randomImage: generateNewMemeUrl()}
        });
    }
    //Local state for current displayed meme
    const [meme, setMeme] = useState({
        topText: "Shut up:",
        bottomText: "and take my money:",
        randomImage: "https://i.imgflip.com/3si4.jpg" 
    })

    //Updating state for current meme whenever input is changed
    function handleChange(event){
        const {value, name} = event.target;
        setMeme(prevState => {
         return {...prevState, [name] : value }   
        })
    }

    //Local state for Dark Mode
    const [isDarkMode, setDarkMode] = useState(false);

    //Function that toggles Dark Mode
    function toggleDarkMode() {
        setDarkMode(prevState => { return !prevState })
    }
    //Styles for Dark Mode
    let darkMode = {
        backgroundColor: isDarkMode ? "#222222" : "#ffffff"
    }

    return(
        <main className="formContainer" style={darkMode}>
            <div className="form">
                <DarkBtn handleClick={toggleDarkMode} on={isDarkMode}/>
                <div className="formInputContainer">                    
                    <input 
                        className="formInput" 
                        type="text" 
                        placeholder="Shut up:"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                    <input 
                        className="formInput"
                        type="text" 
                        placeholder="and take my money:"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}

                    />
                </div>
                <button 
                    onClick={setNewMeme}
                    className="formSubmit">
                        Get a new meme image  🖼
                </button>
            </div>
            <div className="meme" >
                <img 
                    className="memeImg" 
                    src={meme.randomImage} 
                    alt="">
                </img>
                <h2 
                    className="memeText top">{meme.topText}</h2>
                <h2 className="memeText bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}