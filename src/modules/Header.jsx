import reactLogo from "../assets/images/reactLogo.png";


const reactDescriptions = ["Fundamental", "Core", "Essential", "Crucial", "Primary", "Vital", "Indispensable"];

function getRandomDescription(max) {
    return Math.floor(Math.random() * (max + 1));
}

function Header() {
    const reactDescription = reactDescriptions[getRandomDescription(reactDescriptions.length - 1)];
    return (
        <header>
            <img src={reactLogo} alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                {reactDescription} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>);
}

export default Header;