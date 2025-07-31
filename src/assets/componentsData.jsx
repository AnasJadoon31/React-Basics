import componentsImg from "../assets/images/components.png";
import jsxImg from "../assets/images/jsx-ui.png";
import propsImg from "../assets/images/props.png";
import stateImg from "../assets/images/state.png";
import {componentDetails} from "../functions/componentsDetails.jsx";


const componentsData = [
    {
        id: "components",
        title: "Components",
        description: null,
        src: componentsImg,
        alt: "React Components"
    },
    {
        id: "jsx",
        title: "JSX",
        description: componentDetails.jsx,
        src: jsxImg,
        alt: "JSX in React"
    },
    {
        id: "props",
        title: "Props",
        description: componentDetails.props,
        src: propsImg,
        alt: "Props in React"
    },
    {
        id: "state",
        title: "State",
        description: componentDetails.state,
        src: stateImg,
        alt: "State in React"
    },
];

export default componentsData;