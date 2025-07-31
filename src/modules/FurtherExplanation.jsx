import componentsData from "../assets/componentsData.jsx";
import TabButtons from "./TabButtons.jsx";
import {useState} from "react";
import {componentDetails} from "../functions/componentsDetails.jsx";
import EXAMPLES from "../assets/examplesData.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";


function FurtherExplanation() {
    const [clickedTopic, setClickedTopic] = useState();

    function handleClick(identifier) {
        setClickedTopic(identifier);
    }

    let furtherExplanation = <p id="initial">Select a topic to continue!</p>;

    if (clickedTopic) {
        furtherExplanation = <div id="tab-content">
            <h3>{EXAMPLES[clickedTopic].title}</h3>
            <p>{componentDetails[clickedTopic]}</p>
            <pre>{EXAMPLES[clickedTopic].code}</pre>
        </div>
    }

    let buttons = componentsData.map(function (component) {
        if (component.description === null) return;
        return <TabButtons
            key={component.title}
            isSelected={clickedTopic === component.title.toLowerCase()}
            onClick={() => handleClick(component.title.toLowerCase())}>
            {component.title}
        </TabButtons>;
    });
    return (
        <Section id="tab-buttons" headingClass="subheading" title="Further Explanation">
            <Tabs buttons={buttons} buttonsContainer="menu">
                {furtherExplanation}
            </Tabs>
        </Section>
    );
}

export default FurtherExplanation;