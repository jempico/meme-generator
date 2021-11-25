import MemeGenerator from "./components/memeGenerator/MemeGenerator";
import data from "./data"


function App() {
    return <MemeGenerator memes={data} title="Meme Generator" />
}

export default App;
