import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './About.scss'
import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client'

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

// const abouts = [
//   {title: "UI/UX", description: "I'm an excellent designer", imgUrl: ""}
// ]

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
          <img src={urlFor(about.imgUrl)} alt={about.title} />
          <h2 className='field-title bold-text' style={{ marginTop: 20}}>{ about.title }</h2>
          <h2 className='p-text' style={{ marginTop: 10}}>{ about.description }</h2>
        </motion.div>
      ))}
    </div>
    </>
  )
}

// export default About
export default AppWrap(About, 'about')
// 1:44:30