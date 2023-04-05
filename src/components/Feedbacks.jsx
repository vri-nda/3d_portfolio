
import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";

import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  itslink,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1 cursor-pointer' onClick={() => window.open(itslink, "_blank")}>
      <img
          src={image}
          alt={`feedback_by-${name}`}
          className='object-cover w-full h-full rounded'
        />


      <div className='flex items-center justify-between gap-1 mt-7'>
        <div className='flex flex-col flex-1'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} {company}
          </p>
        </div>

        
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          {/* <p className={styles.sectionSubText}>What others say</p> */}
          <h2 className={styles.sectionHeadText}>Certifications.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");



