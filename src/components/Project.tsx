import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                {/* Project 1 */}
                <div className="project">
                    <a href="https://github.com/mahesh-vardhan-kanakala/DevSecOps-netflix" target="_blank" rel="noreferrer">
                        <img src={mock10} className="zoom" alt="DevSecOps-netflix" width="100%" />
                    </a>
                    <a href="https://github.com/mahesh-vardhan-kanakala/DevSecOps-netflix" target="_blank" rel="noreferrer">
                        <h2>DevSecOps-netflix</h2>
                    </a>
                    <p>Developed a Netflix-inspired movie finder app with features like semantic search and sentiment analysis. Built on AWS using Kubernetes for scalability, integrated CI/CD with Jenkins and GitHub Actions, and implemented security best practices with DevSecOps tools to ensure compliance and vulnerability management.</p>
                </div>

                {/* Project 2 */}
                <div className="project">
                    <a href="https://github.com/mahesh-vardhan-kanakala/k8-mario" target="_blank" rel="noreferrer">
                        <img src={mock09} className="zoom" alt="Super Mario Game" width="100%" />
                    </a>
                    <a href="https://github.com/mahesh-vardhan-kanakala/k8-mario" target="_blank" rel="noreferrer">
                        <h2>Super Mario Game</h2>
                    </a>
                    <p>Developed Super Mario using AWS EKS Cluster and Kubernetes for scalability. A fun project combining gaming with cloud infrastructure.</p>
                </div>

                {/* Project 3 */}
                <div className="project">
                    <a href="https://github.com/mahesh-vardhan-kanakala/Ai-Image-Generator" target="_blank" rel="noreferrer">
                        <img src={mock08} className="zoom" alt="AI Image Generator" width="100%" />
                    </a>
                    <a href="https://github.com/mahesh-vardhan-kanakala/Ai-Image-Generator" target="_blank" rel="noreferrer">
                        <h2>AI-Image Generator</h2>
                    </a>
                    <p>An AI tool that generates unique images based on text prompts, powered by advanced image processing algorithms. Perfect for creative applications!</p>
                </div>

                {/* Project 4 */}
                <div className="project">
                    <a href="https://gitlab.com/devops7783952/cicdtf" target="_blank" rel="noreferrer">
                        <img src={mock07} className="zoom" alt="CICD Game" width="100%" />
                    </a>
                    <a href="https://gitlab.com/devops7783952/cicdtf" target="_blank" rel="noreferrer">
                        <h2>CICDTF: 2D Shooting Game</h2>
                    </a>
                    <p>Developed a 2D shooting game with Unity and C#, hosted on Itch.io. Includes CI/CD pipeline for automatic deployment and testing.</p>
                </div>

                {/* Project 5 */}
                <div className="project">
                    <a href="https://github.com/mahesh-vardhan-kanakala/2048-gh-pages" target="_blank" rel="noreferrer">
                        <img src={mock06} className="zoom" alt="2048 Game" width="100%" />
                    </a>
                    <a href="https://github.com/mahesh-vardhan-kanakala/2048-gh-pages" target="_blank" rel="noreferrer">
                        <h2>2048 Game Clone</h2>
                    </a>
                    <p>A classic 2048 game clone built using JavaScript and HTML5, featuring touch controls for mobile devices.</p>
                </div>

                {/* Project 6 */}
                <div className="project">
                    <a href="https://github.com/mahesh-vardhan-kanakala/Tetris-main" target="_blank" rel="noreferrer">
                        <img src={mock05} className="zoom" alt="Tetris Game with CI/CD" width="100%" />
                    </a>
                    <a href="https://github.com/mahesh-vardhan-kanakala/Tetris-main" target="_blank" rel="noreferrer">
                        <h2>Tetris Game Deployments with ArgoCD, Terraform, and Jenkins</h2>
                    </a>
                    <p>Deployed Tetris game using modern DevOps tools like ArgoCD for Kubernetes, Terraform for infrastructure, and Jenkins for CI/CD pipeline automation.</p>
                </div>

                {/* Project 7 */}
                <div className="project">
                    <a href="https://expense-tracker-gules-gamma.vercel.app/" target="_blank" rel="noreferrer">
                        <img src={mock04} className="zoom" alt="Expense Tracker" width="100%" />
                    </a>
                    <a href="https://github.com/mahesh-vardhan-kanakala/Expense-Tracker" target="_blank" rel="noreferrer">
                        <h2>Expense Tracker</h2>
                    </a>
                    <p>A simple and intuitive expense tracking application that helps you manage your personal finances. Built with React and Node.js.</p>
                </div>

                {/* Project 8 */}
                <div className="project">
                    <a href="https://count-down-timer-o7xn.vercel.app/" target="_blank" rel="noreferrer">
                        <img src={mock03} className="zoom" alt="CountDown Timer" width="100%" />
                    </a>
                    <a href="https://github.com/mahesh-vardhan-kanakala/CountDown-Timer" target="_blank" rel="noreferrer">
                        <h2>CountDown Timer</h2>
                    </a>
                    <p>Interactive countdown timer built with React. Customize your time settings, and reset the timer with ease.</p>
                </div>

                {/* Project 9 */}
                <div className="project">
                    <a href="https://todo-reactjs-alpha.vercel.app/" target="_blank" rel="noreferrer">
                        <img src={mock02} className="zoom" alt="TODO React App" width="100%" />
                    </a>
                    <a href="https://github.com/mahesh-vardhan-kanakala/TODO-REACTJS" target="_blank" rel="noreferrer">
                        <h2>TODO React</h2>
                    </a>
                    <p>A simple React-based Todo app that allows users to add, edit, and delete tasks. Helps organize tasks efficiently!</p>
                </div>

                {/* Project 10 */}
                <div className="project">
                    <a href="https://tetri-game-react.vercel.app/" target="_blank" rel="noreferrer">
                        <img src={mock01} className="zoom" alt="Tetris Game" width="100%" />
                    </a>
                    <a href="https://github.com/mahesh-vardhan-kanakala/Tetri-Game-React" target="_blank" rel="noreferrer">
                        <h2>Tetris Game Using React</h2>
                    </a>
                    <p>A fully functional Tetris game built using React and CSS. Features include a scoring system and mobile-responsive design.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;
