import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {motion} from "framer-motion";
import {
    faChalkboardTeacher,
    faCode,
    faHandsHelping,
    faProjectDiagram,
    faSitemap
} from "@fortawesome/fontawesome-free-solid";

const skill = {
    start: {opacity:0, y:-20},
    end: (i) => ({opacity:1, y:0, transition:{delay:i*0.3}}),
    leave: {opacity:0}
}

function Skills({variants}) {
    return (
        <motion.div variants={variants} className="box has-shadow">
            <div className="columns is-multiline is-centered">
                {skills.map(
                    (e, i) => <motion.div custom={i} variants={skill} initial="start" animate="end" exit="leave" className="column has-text-centered">
                        <motion.span className="icon is-large">
                            <FontAwesomeIcon size={"3x"} icon={e.icon}/>
                        </motion.span>
                        <motion.p className={"is-size-4"}>{e.text}</motion.p>
                        {e.tags.map((tag) => <span className="tag is-rounded">{tag}</span>)}
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}

const skills = [
    {
        text: "Entwickler",
        icon: faCode,
        tags: ["Go", "Javascript", "Docker", "Kafka", "Funktionale Programmierung", "Flutter", "Dart", "Java", "Kubernetes", "React"]
    },
    {
        text: "Architekt",
        icon: faProjectDiagram,
        tags: ["Microservices", "Cloud", "Event-driven Architecture", "CI", "CD"]
    },
    {
        text: "Consultant",
        icon: faHandsHelping,
        tags: ["Digitalisierung", "IT-Audits", "Cloud-Migration"]
    },
    {
        text: "Trainer",
        icon: faChalkboardTeacher,
        tags: ["Go", "Microservices", "Maßgeschneiderte Workshops"]
    },
    {
        text: "Product Owner",
        icon: faSitemap,
        tags: ["PSPO 1", "Scrum", "Kanban"]
    },
]
export default Skills;