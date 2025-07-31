function Tabs({children, buttons, buttonsContainer="menu"}) {
    const Container = buttonsContainer;
    return (<>
        <Container>
            {buttons}
        </Container>
        {children}
    </>);
}

export default Tabs;