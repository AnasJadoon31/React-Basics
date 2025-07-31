function Section({title, children, headingClass, ...props}){
    return (
        <section {...props}>
            <h2 className={headingClass}>{title}</h2>
            {children}
        </section>
    )
}

export default Section;