import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/lokesh-vasanthakumar/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/savagecurry123" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
