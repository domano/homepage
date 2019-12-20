import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Fade, Slide} from "react-reveal";

function Skills({skills}) {
    return (
        <div className="box has-shadow">
            <div className="columns is-centered">
                {skills.map(
                    e => <div className="column has-text-centered">
                        <span className="icon is-large">
                            <FontAwesomeIcon size={"3x"} icon={e.icon}/>
                        </span>
                        <p className={"is-size-4"}>{e.text}</p>
                        {e.tags.map(tag => <span className="tag is-rounded">{tag}</span>)}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Skills;