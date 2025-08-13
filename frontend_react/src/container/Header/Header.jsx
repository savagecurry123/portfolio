import React from 'react'
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVaraints = {
  whileInView:{
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition= {{ duration: 0.5 }}
        className= "app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style= {{ marginLef: 20 }}>
              <p className="p-text"> Hello. I am</p>
              <h1 className="head-text">Lokesh</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
          <p className="p-text"> Software Engineer </p>
          <p className="p-text"> M.S. in Computer Science (In Progress) </p>
          <a href="https://drive.google.com/file/d/1PfrwU4Qn2nOTeep4Mfmue6vB0UyzixPy/view?usp=sharing" className="resume-link p-text" target="_blank" rel="noopener noreferrer">View My Resume</a>
          </div>
        </div>
      </motion.div>

      <motion.div
       whileInView={{ opacity: [0, 1] }}
       transition= {{ duration: 0.5, delayChildren: 0.5 }}
       className= "app__header-img"
      >
        <img src={images.profile2} alt="profile_bg" />
        <motion.img
        whileInView={{ scale: [0, 1] }}
        transition= {{ duration: 0.5, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile-circle"
        className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVaraints}
        whileInView={scaleVaraints.whileInView}
        className="app__header-circles"
      >
        {[images.react2, images.node, images.spring].map((circle, index) => (
          <div className="circle-cmp app__flex" key={'circle-${index}'}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');