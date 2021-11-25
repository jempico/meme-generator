import "./memeGenerator.css"
import Navbar from "../navbar/Navbar";
import Form from "../form/Form";
import Footer from "../footer/Footer";
import "./memeGenerator.css"

export default function MemeGenerator(props) {
    return (
        <div className="meme_container">
            <Navbar title={props.title}/>
            <Form />
            <Footer />
        </div>
    )
}