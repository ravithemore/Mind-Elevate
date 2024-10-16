import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/animationVariant'
const packages = [
  {
    name: "Basic Therapy Session Package",
    price: 150,
    description: "An entry-level package designed to provide essential mental health support for individuals seeking to improve their well-being.",
    features: [
      "1-hour private therapy session",
      "Certified mental health professional",
      "Personalized treatment plan",
      "Initial mental health assessment",
      "Weekly progress tracking",
      "Access to online resources and materials",
      "Confidential and safe environment",
      "Follow-up consultation"
    ]
  },
  {
    name: "Advanced Therapy & Wellness Package",
    price: 350,
    description: "A comprehensive package for individuals needing a more in-depth approach to mental health, including therapy and wellness support.",
    features: [
      "2-hour therapy sessions (twice a week)",
      "Licensed psychologist and wellness coach",
      "Detailed psychological evaluation",
      "Customized multi-faceted treatment plan",
      "Cognitive Behavioral Therapy (CBT) sessions",
      "Access to group therapy sessions",
      "Daily mindfulness and meditation exercises",
      "Emergency on-call support"
    ]
  },
  {
    name: "Family Therapy and Support Package",
    price: 500,
    description: "A specialized package aimed at supporting families in navigating mental health challenges together, fostering communication and understanding.",
    features: [
      "3-hour family therapy sessions (once a week)",
      "Certified family therapist",
      "Conflict resolution training",
      "Parenting support and guidance",
      "Family dynamics assessment",
      "Weekly progress reports",
      "Access to family support groups",
      "Personalized resources for each family member"
    ]
  }




]

const Pricing = () => {
  const handleScrollToContact = () => {
    const targetElement = document.getElementById('contact');
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth"
      })
    }
  }
  return (
    <div id='pricing' className='bg-[#f7f8fc] pt-32 '>
      <div className='container mx-auto px-8'>
        <motion.div
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className='text-center mb-12'>
          <h2 className='text-4xl font-bold font-secondary mb-3 '>Perfect for small & larger brands</h2>
          <p className='text-lg mb-12 md:w-2/3  mx-auto '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore molestias tempore impedit praesentium ad ipsa nesciunt, quo expedita eum totam ex non odit, perferendis rem at dolor quaerat. Odit repudiandae dicta illum? Tenetur quibusdam ex fuga labore, illum ullam voluptas commodi. Dolores exercitationem accusamus dignissimos excepturi quod quaerat commodi? Praesentium!</p>
        </motion.div>

        {/*Package*/}
        <div className='flex flex-col md:w-5/6 mx-auto md:flex-row gap-8 pb-12 '>
          {
            packages.map((pkg, index) => (
              <motion.div
                key={index}
                variants={fadeIn(index % 2 === 0 ? 'down' : 'up', 0.4)} // Alternate direction
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className='bg-white rounded-lg p-6 flex-1 shadow-lg '>
                <h3 className='text-2xl font-semibold mb-4 '>{pkg.name}</h3>
                <hr className='w-24 border text-primary  border-primary' />
                <p className='text-3xl font-bold mb-4 '>${pkg.price} <span className='text-lg font-normal '>/mo</span></p>
                <p className='text-lg mb-4'>{pkg.description}</p>
                <ul className='list-disc list-inside space-y-2 mb-6 ' >
                  {
                    pkg.features.map((feature, idx) => (
                      <li key={idx} > {feature} </li>
                    ))
                  }
                </ul>
                <button
                  className='bg-primary text-white px-4 py-2 rounded'
                  onClick={handleScrollToContact}>Get Started</button>
              </motion.div>
            )

            )
          }


        </div>



      </div>
    </div>
  )
}

export default Pricing