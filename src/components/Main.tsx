import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avatar from '../assets/images/avatar.png';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
        <img src={avatar} alt="Portrait of Mahesh Vardhan" className="avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/mahesh-vardhan-kanakala" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/mahesh-vardhan-kanakala/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Mahesh Vardhan</h1>
          <p>Full Stack Engineer</p>
          <p>DevOps</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/mahesh-vardhan-kanakala" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/mahesh-vardhan-kanakala/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
