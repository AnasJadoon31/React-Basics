import componentsData from "../assets/componentsData.jsx";
import Section from "./Section.jsx";


function CoreConcepts(props) {
    return (<li>
        <img src={props.src} alt={props.alt}/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </li>);
}

function CoreComponents() {
    return (
        <Section id="core-components" headingClass="subheading" title="Core Concepts">
            <ul>
                {componentsData.map(function (component) {
                    if (component.description === null) return;
                    return <CoreConcepts key={component.title} {...component}/>;
                })}
            </ul>
        </Section>
    );

}

export default CoreComponents;