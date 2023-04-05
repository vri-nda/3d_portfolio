import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import Earth from "./canvas/Earth";
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";
// service_nxi5k5y
// template_lse0v4b
// GJ48IxmPirjD-dGTn






// const Contact = () => {

//   const formRef = useRef();
// // funcationality of submit form 
//   const [form, setForm] = useState({
//     name:'',
//     email:'',
//     message:'',
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const {name, value} = e.target;

//     setForm({ ...form, [name]: value})
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs.send(
//       'service_nxi5k5y', 
//       'template_lse0v4b', 
//       {
//         form_name: form.name,
//         to_name: 'vrinda',
//         from_email: form.email,
//         to_email: 'vsvrindasharma2@gmail.com',
//         message: form.message,
//       },
//       'GJ48IxmPirjD-dGTn'
//       )
//       .then(() =>{
//         setLoading(false);
//         alert('Thankyou. I will get back to you as soon as possible');

//         setForm({
//           name:'',
//           email:'',
//           message:'',
//         })
//       },(error) =>{
//         setLoading(false)
//         console.log(error);
//         alert('Something went wrong.')
//       })
//   }





const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
              'service_nxi5k5y', 
              'template_lse0v4b', 
        {
          from_name: form.name,
          to_name: "vrinda sharma",
          from_email: form.email,
          to_email: "vsvrindasharma2@gmail.com",
          message: form.message,
        },
        'GJ48IxmPirjD-dGTn'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };


  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      <motion.div
      variants={slideIn('left', "tween", 0.2, 1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >

        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 mt-12"
        >
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Name</span>
            <input 
            type="text" 
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="what's your name?"
            className="px-6 py-4 font-medium text-white border-none rounded-lg outlined-none bg-tertiary placeholder:text-secondary"
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Email</span>
            <input 
            type="email" 
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="what's your email?"
            className="px-6 py-4 font-medium text-white border-none rounded-lg outlined-none bg-tertiary placeholder:text-secondary"
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Message</span>
            <textarea
            rows="7" 
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="what do you want to say?"
            className="px-6 py-4 font-medium text-white border-none rounded-lg outlined-none bg-tertiary placeholder:text-secondary"
            />
          </label>
          
          <button 
          type="submit"
          className="px-8 py-3 font-bold text-white shadow-md outline-none bg-tertiary w-fit shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}

          </button>

        </form>

      </motion.div>

      {/* floating earth */}

      <motion.div
      variants={slideIn('right', "tween", 0.2, 1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");