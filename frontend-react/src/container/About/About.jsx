import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import './About.scss'

const abouts = [
  { title: 'Fullstack Development', description: "I am a good web developer.", imgUrl: images.about01 },
  { title: 'Database Management', description: "I am a good web developer.", imgUrl: images.about03 },
  { title: 'DevOps', description: "I am a good web developer.", imgUrl: images.about03 },
  { title: 'UI/UX Design', description: "I am a good web developer.", imgUrl: images.about03 },
  { title: 'AI and ML', description: "I am a good web developer.", imgUrl: images.about03 },
  { title: 'Game Development', description: "I am a good web developer.", imgUrl: images.about03 },
  { title: 'Networking Systems', description: "I am a good web developer.", imgUrl: images.about03 },
  { title: 'Embedded Systems', description: "I am a good web developer.", imgUrl: images.about03 },
  { title: 'IOT', description: "I am a good web developer.", imgUrl: images.about03 }

]
const About = () => {
  return (
    <>
    <h2 className='head-text'> I Know that <span>Good Apps</span> <br /> means <span>Good Business</span> </h2>

    <div className='app__profiles'>
      { abouts.map((about, index) => (
        <motion.div
          whileInView={{ opacity: 1 }}  
          whileHover={{ scale: 1.1 }}  
          transition={{ duration: 0.5, type: 'tween '}} 
          className="app__profile-item"
          key={about.title + index}
        >
          <img src={about.imgUrl} alt={about.title} />
          <h2 className='field-title bold-text' style={{ marginTop: 20}}>{ about.title }</h2>
          <h2 className='p-text' style={{ marginTop: 10}}>{ about.description }</h2>
        </motion.div>
      ))}
    </div>
    </>
  )
}

export default About

// 1:31:59