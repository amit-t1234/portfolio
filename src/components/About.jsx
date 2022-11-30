import React, { useState } from "react";
import AboutCard from "./AboutCard";
import Project from "./Project";
import projects from "../projects.json";

const About = () => {
    const [selected, setSelected] = useState(1);
    
    return (
        <section id="about" className="dark-bg">
            <div className="flex">
                <div className="flex-full">
                    <AboutCard
                        selected={ selected === 1 ? true : false }
                        clickEvent={() => setSelected(1)}
                        title="Outshade (2020-2022)"
                        icon="/icons/design.svg"
                        descriptions={[
                            "Designed and developed various types of application in different environments viz AWS, Azure and firebase.",
                            "Successfully managed and deployed 5+ long term projects.",
                            "Worked in languages and frameworks viz NodeJS, MySQL, Mongo DB, PHP, HTML, CSS, JS."
                        ]}
                        projects={10} />
                    <AboutCard
                        selected={ selected === 2 ? true : false }
                        clickEvent={() => setSelected(2)}
                        title="Logicwind (2021-2022)"
                        icon="/icons/code.svg"
                        descriptions={[
                            "Refactored and optimized 95% of REST APIs with Apollo GraphQL in 2 projects.",
                            "Worked on the first serverless application with AWS and SQS queue.",
                            "Worked on Serverless Application, Apollo GraphQL, NodeJS, MongoDB and PostgreSQL."
                        ]}
                        projects={4} />
                    {/* <AboutCard
                        selected={ selected === 3 ? true : false }
                        clickEvent={() => setSelected(3)}
                        title="3rdFlix (Practically)"
                        icon="/icons/phone.svg"
                        description="Development and Maintenance of Web Applications including Frontend and Backend from 
                        scratch with HTML, CSS, Boostrap, Javascript, PHP, MySQL"
                        projects={3} /> */}
                </div>
                
                <div className="flex-full about-text">
                    { selected === 1 && <Project data={projects["1"]} /> }
                    { selected === 2 && <Project data={projects["2"]} /> }
                    { selected === 3 && <Project data={projects["3"]} /> }
                </div>
            </div>
        </section>
    )
}

export default About;