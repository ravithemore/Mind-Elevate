import React from 'react'
import { BsFillChatQuoteFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/animationVariant'
const testimonial = [
  {
    name: "Emily Johnson",
    location: "New York, USA",
    review: "The therapy sessions have been life-changing for me. The therapist was incredibly understanding and helped me through some tough times. Highly recommended!",
    image: "https://avatar.iran.liara.run/public/48"
  },
  {
    name: "Rajesh Patel",
    location: "Mumbai, India",
    review: "The personalized treatment plan and the mindfulness exercises have significantly improved my mental health. The support from the team was outstanding!",
    image: "https://avatar.iran.liara.run/public/49"
  },
  {
    name: "Maria Garcia",
    location: "Madrid, Spain",
    review: "Our family therapy sessions were a great help in improving our communication and resolving conflicts. We feel closer and more understanding of each other now.",
    image: "https://avatar.iran.liara.run/public/52"
  },
  {
    name: "Ahmed Ali",
    location: "Cairo, Egypt",
    review: "I found the group therapy sessions very supportive. It was comforting to share my experiences and hear from others. The therapist created a very safe space for us.",
    image: "https://avatar.iran.liara.run/public/50"
  },
  {
    name: "Sophie Martin",
    location: "London, UK",
    review: "The advanced therapy package provided me with a holistic approach to my mental well-being. The sessions were insightful, and I felt genuinely cared for.",
    image: "https://avatar.iran.liara.run/public/53"
  },
  {
    name: "Sophie Martin",
    location: "London, UK",
    review: "The advanced therapy package provided me with a holistic approach to my mental well-being. The sessions were insightful, and I felt genuinely cared for.",
    image: "https://avatar.iran.liara.run/public/53"
  }
]

const Testimonial = () => {
  return (
    <div id='testimonial' className='bg-[#f7f8fc] py-12'>
      <div className='container mx-auto pb-12 '>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold font-secondary mb-3 '>What our Client Say</h2>
          <p className='text-lg mb-12 md:w-1/2  mx-auto '>
            Hear from some of our satisfied clients about how our services have positively impacted their lives and well being
          </p>

        </div>

        <motion.div className='flex flex-col md:w-4/5 mx-auto md:flex-row md:flex-wrap md:gap-12'>
  {testimonial.map((testimonial, idx) => (
    <motion.div key={idx}
    variants={fadeIn(idx % 2 === 0 ? 'left' : 'right', 0.4)} // Alternate direction
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.7 }} className='relative bg-white rounded-lg p-6 flex-1 md:basis-1/3'>
      <div className='absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2'>
        <BsFillChatQuoteFill className='size-12 text-primary '/>
      </div>
      <div>
        <p className='text-lg mb-2'>{testimonial.review}</p>
        <div className='flex gap-1'>
          <img src={testimonial.image} alt="Reviewer" className='w-16 h-16 rounded-full object-cover mr-4'/>
          <div>
            <p className='font-semibold'>{testimonial.name}</p>
            <p className='text-gray-600'>{testimonial.location}</p>
          </div>
        </div>
      </div>
    </motion.div>
  ))}
</motion.div>


      </div>
    </div>
  )
}

export default Testimonial