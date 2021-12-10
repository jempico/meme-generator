import "./memeGenerator.css"
import Navbar from "../navbar/Navbar";
import Form from "../form/Form";
import Footer from "../footer/Footer";
import memesData from "../../memesData.js";

export default function MemeGenerator() {
    return (
        <div className="meme_container">
            <Navbar title="Meme Generator"/>
            <Form data={memesData.data.memes}/>
            <Footer />
        </div>
    )
}