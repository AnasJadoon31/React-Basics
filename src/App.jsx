// import './styles/App.css'
import Header from "./modules/Header.jsx";
import CoreComponents from "./modules/CoreConcepts.jsx";
// import "./styles/Header.css"
// import "./styles/CoreComponents.css"
// import "./styles/TabButtons.css"
import FurtherExplanation from "./modules/FurtherExplanation.jsx";


function App() {
    return (
        <>
            <Header/>
            <main>
                <h1>HELLO WORLD</h1>
                <CoreComponents/>
                <FurtherExplanation/>
            </main>
        </>
    );
}

export default App;
