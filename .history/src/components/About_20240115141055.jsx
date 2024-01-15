import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import {services} from '../constants';
import {fadeIn,textVariant} from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';


const ServiceCard = ({index, title, icon}) =>{
  return(
    <Tilt className="xs:w-[500px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
        options={{
          max: 45,
          scale: 1,
          speed:450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col" 
        >
          <img src={icon} alt={title} 
          className="object-contain w-16 h-16"/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          
        </div>

      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>

      <p className={styles.sectionSubText}>Introduction</p>

      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className="mt-4 text-secondary text-[20px] max-w-6xl leading-[30px]"
    >
         {/* Welcome to my portfolio website, where I am excited to share my skills, knowledge, and personal and professional growth with you.
          As a <b>passionate computer science engineer</b>, I have been dedicatedly pursuing my dreams of becoming a <b>software engineer </b> 
           since a young age. Throughout my academic journey, I have consistently maintained a strong academic record.

Beyond my academic achievements, I have also spent a significant amount of time exploring new technologies 
and learning new skills. This has helped me gain a deeper understanding of the industry and the latest trends,
 which I believe will be valuable in my future endeavors. 
 Thank you for taking the time to visit my website. */}
 I am a highly motivated software development enthusiast with a strong passion for front-end web development. I am excited to embark on my career journey in the dynamic and ever-evolving world of software development. What drives me in the world of software development is the ability to blend creativity with problem-solving. I am passionate about creating elegant, user-centric web applications and I believe in the power of technology to make a positive impact on people's lives. I look forward to seeking an opportunity to apply theoretical knowledge, develop analytical skills and gain practical experience. Eager to learn from experienced professionals and tackle real-world challenges, fostering professional growth.
         {/* for contact page
         Thank you for taking the time to visit my page, and I look forward to connecting with you soon. */}
    </motion.p>

    {/* to display the cards */}
    <div className='flex flex-wrap gap-10 mt-20'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(About, "about");