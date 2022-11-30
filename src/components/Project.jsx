import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Project = ({ data }) => {
    return (
        <AwesomeSlider infinite={false} >
            {
                data.map((project, index) => (
                    <div key={index}>
                        <h3 className="white code">Project Name: { project.name }</h3>
                        <ol>
                            {
                                project.points.map(point => (
                                    <li className="swap code" key={point}>{ point }</li>
                                ))
                            }
                        </ol>
                    </div>
                ))
            }
        </AwesomeSlider>
    );
}

export default Project;
