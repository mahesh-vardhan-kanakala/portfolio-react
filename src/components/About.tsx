import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/About.scss';

// Updated labelsFirst without duplicate declaration
const labelsFirst = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Vue.js",
    "Angular",
    "Bootstrap",
    "Tailwind CSS",
    "SASS/SCSS",
    "Webpack",
    "Babel"
];

const labelsSecond = [
    "Node.js",
    "Express.js",
    "Java",
    "Python",
    "PHP",
    "Ruby on Rails",
    "C#/.NET",
    "RESTful APIs",
    "GraphQL",
    "WebSockets"
];

const labelsThird = [
    "SQL",
    "NoSQL",
    "Graph Databases",
    "ORMs (Sequelize, Mongoose, Hibernate, Entity Framework)",
    "Database Design"
];

const labelsFourth = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Windows",
    "Jenkins",
    "GitLab",
    "Ansible",
    "Chef",
    "Puppet",
    "Kubernetes",
    "Bash",
    "PowerShell",
    "Prometheus",
    "Grafana",
    "Terraform",
    "Helm",
    "Vagrant"
];

const labelsFifth = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit"
];

function Expertise() {
    return (
        <div className="container" id="Expertise">
            <div className="skills-container">
                <h1>About</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Full Stack Web Development</h3>
                        <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x" />
                        <h3>DevOps & Automation</h3>
                        <p>Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFourth.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x" />
                        <h3>GenAI & LLM</h3>
                        <p>Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise-grade GenAI-enabled solutions to empower intelligent decision-making.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFifth.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
