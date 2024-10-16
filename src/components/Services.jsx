import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import serviceImg1 from '../assets/service1.webp'
import serviceImg2 from '../assets/service2.webp'
import serviceImg3 from '../assets/service3.webp'
import serviceImg4 from '../assets/service4.webp'
import { motion } from 'framer-motion';
import {fadeIn} from '../utils/animationVariant'
const Services = () => {
  return (
    <div id='services' className='bg-[#f7f8fc] '>
      <div className="pt-28 px-4 container mx-auto">
        <motion.div
        variants={fadeIn('down',0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once :false ,amount : 0.7} }
        className='text-center space-y-5' >
          <h2 className='text-4xl font-bold font-secondary text-heroBG'>What Can We Do Together</h2>
          <p className='md:w-1/2 mx-auto'>
          Our mental health services provide comprehensive support for various personal challenges, including couple counseling to strengthen relationships, parenting skills for effective child-rearing, guidance for those feeling stuck in life, and self-confidence building to boost self-esteem. We help individuals and families achieve healthier, more fulfilling lives through tailored, compassionate care.
          </p>




        </motion.div>

        {/*service category*/}
        <div className='py-12 md:w-4/5 mx-auto '>
          <Tabs>
            <TabList className="flex flex-wrap justify-between items-center md:gap-8 gap-4"
            
            viewport={{once :false ,amount : 0.7} }>
              <Tab>Couple Counselling</Tab>
              <Tab>Parenting Skills</Tab>
              <Tab>Feeling Stuck</Tab>
              <Tab>Self-Confidence</Tab>
            </TabList>

            {/*Couple Counselling*/}
            <TabPanel >
             <motion.div
             variants={fadeIn('up',0.3)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once :false ,amount : 0.7} }
             className='flex flex-col md:flex-row gap-8 mt-8' >
             
             <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                <h3 className='text-3xl font-semibold text-primary mb-4'>Couple Counselling</h3>
                <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aspernatur molestias sunt, temporibus vel adipisci quia excepturi in, repellat, fugit sapiente accusamus voluptate id veniam a. Cupiditate obcaecati fugiat perspiciatis aliquid tenetur. Iusto consequatur laborum quae est, esse iure quia!</p>
                <h4>Benefits</h4>
                <ul className='list-disc list-inside space-y-3'>
                  <li>Understanding Relationship Dynamics</li>
                  <li>Understanding Relationship Dynamics</li>
                  <li>Understanding Relationship Dynamics</li>
                  <li>Understanding Relationship Dynamics</li>

                </ul>



              </div>
              <div className='md:w-1/2'>
                <img src={serviceImg1} alt="service image" className='w-full  h-auto rounded-2xl object-cover' />
              </div>
              </motion.div>
            
            </TabPanel>


            {/*Parenting skill*/}
            <TabPanel >
              <motion.div
              variants={fadeIn('up',0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once :false ,amount : 0.7} }
              className='flex flex-col md:flex-row gap-8 mt-8'>
              <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                <h3 className='text-3xl font-semibold text-primary mb-4'>Parenting Skills</h3>
                <p className='mb-4'>
                  Parenting skills workshops offer strategies and tools to help parents build stronger connections with their children, manage behaviors effectively, and create a nurturing environment for development.
                </p>
                <h4 className='text-xl font-medium mb-2'>Benefits</h4>
                <ul className='list-disc list-inside space-y-3'>
                  <li>Enhanced communication with children</li>
                  <li>Effective discipline techniques</li>
                  <li>Improved family dynamics</li>
                  <li>Stress management for parents</li>
                </ul>

              </div>
              <div className='md:w-1/2'>
                <img src={serviceImg2} alt="service image" className='w-full  h-auto rounded-2xl object-cover' />
              </div>

              </motion.div>
              

            </TabPanel>


            {/*Feeling Stuck*/}
            <TabPanel >
              <motion.div
              variants={fadeIn('up',0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once :false ,amount : 0.7} }
              className='flex flex-col md:flex-row gap-8 mt-8'>
              <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                <h3 className='text-3xl font-semibold text-primary mb-4'>Feeling Stuck</h3>
                <p className='mb-4'>
                  Many people experience a phase in their lives where they feel stuck and unsure of how to move forward. This service helps individuals identify the root causes of their stagnation and develop actionable plans to regain momentum.
                </p>
                <h4 className='text-xl font-medium mb-2'>Benefits</h4>
                <ul className='list-disc list-inside space-y-3'>
                  <li>Clarity on personal goals</li>
                  <li>Increased motivation and direction</li>
                  <li>Better decision-making skills</li>
                  <li>Reduced stress and anxiety</li>
                </ul>

              </div>
              <div className='md:w-1/2'>
                <img src={serviceImg3} alt="service image" className='w-full  h-auto rounded-2xl object-cover' />
              </div>
              </motion.div>

            </TabPanel>


            {/*Self Confidence*/}
            <TabPanel >
              <motion.div
              variants={fadeIn('up',0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once :false ,amount : 0.7} }
              className='flex flex-col md:flex-row gap-8 mt-8'>
              <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                <h3 className='text-3xl font-semibold text-primary mb-4'>Self-Confidence</h3>
                <p className='mb-4'>
                  Building self-confidence is crucial for personal and professional growth. This service offers tools and techniques to help individuals develop a positive self-image and self-assurance.
                </p>
                <h4 className='text-xl font-medium mb-2'>Benefits</h4>
                <ul className='list-disc list-inside space-y-3'>
                  <li>Improved self-esteem</li>
                  <li>Enhanced social and communication skills</li>
                  <li>Greater resilience to setbacks</li>
                  <li>Increased self-awareness and personal growth</li>
                </ul>



              </div>
              <div className='md:w-1/2 '>
                <img src={serviceImg4} alt="service image" className='w-full  h-auto rounded-2xl object-cover' />
              </div>
              </motion.div>

            </TabPanel>

          </Tabs>

        </div>


      </div>
    </div>
  )
}

export default Services