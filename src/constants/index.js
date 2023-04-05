import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    logo,
    shopify,
    carrent,
    crypto,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Timeline",
    },
    {
      id: "project",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    // {
    //   title: "React Native Developer",
    //   icon: mobile,
    // },
    // {
    //   title: "Backend Developer",
    //   icon: backend,
    // },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    // {
    //   name: "git",
    //   icon: git,
    // },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Schooling",
      company_name: "Cambridge Court High School",
      icon: starbucks,
      iconBg: "#383E56",
      date: "INTERMEDIATE Grad. April 2021",
      points: [
        "Class 10th, (CBSE Board) Scored 92% and ranked among the top percentile in India.",
        "Class 12th, (CBSE Board) (PCM stream) with an aggregate of 92%.",
       
      ],
    },
    {
      title: "Bachelors",
      company_name: "Vellore Institute Of Technology, Bhopal",
      icon: logo,
      iconBg: "#E6DEDD",
      date: "August 2021 - present",
      points: [
        "(B.Tech) in Computer Science and Engineering (CSE) from VIT Bhopal.",
        "First Year: CGPA of 9.2, placing in the top 2% of the 2021 Batch.",
        "Second Year (Expected graduation date: [August, 2025]).",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "https://i.ibb.co/HnyrbBp/Screenshot-2023-03-14-at-12-39-57-PM.png",
      name: "Web Development",
      // designation: "CFO",
      company: "udemy",
      image: "https://i.ibb.co/HnyrbBp/Screenshot-2023-03-14-at-12-39-57-PM.png",
      itslink:"https://drive.google.com/file/d/1xkiEbVHmafOaZBYSY519pGGhx2IXIMlE/view?usp=sharing",
    },
    {
      testimonial:
        "https://i.ibb.co/HCd14bf/Screenshot-2023-03-14-at-12-56-13-PM.png",
      name: "Computer Networking",
      // designation: "CFO",
      company: "Coursera",
      image: "https://i.ibb.co/HCd14bf/Screenshot-2023-03-14-at-12-56-13-PM.png",
      itslink:"https://drive.google.com/file/d/1NzAgOTC2FK10Mor1L_3H_dY0MF5_w1q3/view?usp=sharing",
    },
    {
      testimonial:
        "https://i.ibb.co/Hp5kfqb/Screenshot-2023-03-14-at-1-17-38-PM.png",
      name: "Virtusa Hackathon",
      // designation: "CFO",
      company: "Virtusa",
      image: "https://i.ibb.co/Hp5kfqb/Screenshot-2023-03-14-at-1-17-38-PM.png",
      itslink:"https://drive.google.com/file/d/1aEQHt4TVlw4IsWxbVPs8UtMe_Bpv7nbj/view?usp=sharing",
    },
    {
      testimonial:
        "https://i.ibb.co/wJV8p0x/Screenshot-2023-03-14-at-1-21-26-PM.png",
      name: "Intro To SQL",
      // designation: "CFO",
      company: "kaggle",
      image: "https://i.ibb.co/wJV8p0x/Screenshot-2023-03-14-at-1-21-26-PM.png",
      itslink:"https://drive.google.com/file/d/1T5zdHueUJJXgAFQenyz9lJ2-xzKRHtCv/view?usp=sharing",
    },
  ];
  



  const projects = [
    {
      name: "Crypto Analyzer",
      description:
        "Crypto Analyzer is a platform that enables users to verify the legitimacy of public key of a cryptocurrency by using both text and image inputs. This platform can determine whether a public key of given cryptocurrency is real or fake, and if it is legitimate it can identify the cryptocurrency to which the key belongs.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: crypto,
      source_code_link: "https://github.com/",
      liveweb_link:"https://crypto-analysis-y1dc.vercel.app/",
    },
    {
      name: "Archeology",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform (frontend) that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };