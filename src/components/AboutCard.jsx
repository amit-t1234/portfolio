const AboutCard = (props) => {
    return ( 
        <div onClick={props.clickEvent} className={ props.selected ? "light-bg about-card selected": "light-bg about-card" } >
            <div className="flex justify-space">
                <h3 className="green">{props.title}</h3>
            </div>
            <ul>
                {
                    props.descriptions.map(description => (
                        <li className="swap bg-transparent code">{ description }</li>
                    ))
                }
            </ul>
            <span className="swap bg-transparent code small">{props.projects.toString()} projects</span>
        </div>
    );
}
 
export default AboutCard;