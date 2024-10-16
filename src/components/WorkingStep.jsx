
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/animationVariant'

const WorkingStep = () => {
    return (
        <div className='relative bg-cover  bg-center py-12 bg-working-img'>
            <div className='absolute inset-0 bg-heroBG bg-opacity-85 '>

            </div>
            <div className='relative container mx-auto px-4 py-20 '>
                <motion.div className='text-white text-center mb-20'
                    variants={fadeIn('down',0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once :false ,amount : 0.7} }
                    >
                    <h2 className='text-4xl font-bold font-secondary mb-4'>How It Works</h2>
                    <p className='text-lg md:w-1/2 w-full mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos vel doloremque ducimus suscipit perferendis omnis ut aspernatur totam optio. Dicta sunt ab dolorum quibusdam quae nobis explicabo distinctio debitis voluptatibus placeat. Minima, dolorum! A, doloremque possimus. Officia laudantium ullam explicabo deserunt at quidem! Pariatur molestiae porro nostrum non aperiam nesciunt esse, est ipsa modi saepe sed voluptates unde officia quisquam voluptatum, quidem illo, enim consectetur debitis! Facere eius sit repellendus!</p>
                </motion.div>

                <div className='flex flex-col md:4/5  mx-auto md:flex-row gap-8 '>
                    <motion.div className='relative  bg-white  text-center rounded-lg p-6 flex-1'
                    variants={fadeIn('right',0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once :false ,amount : 0.7} }>

                        <div
                        
                        className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center  '>1</div>
                        <h3>Fill a Form</h3>
                        <p>Step 1 description goes here Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, perspiciatis maiores.</p>


                    </motion.div>
                    <motion.div 
                    variants={fadeIn('up',0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once :false ,amount : 0.7} }
                    className='relative  bg-white  text-center rounded-lg p-6 flex-1'>

                        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center  '>2</div>
                        <h3>Get Matched</h3>
                        <p>Step 2 description goes here Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, perspiciatis maiores.</p>


                    </motion.div>
                    <motion.div
                    variants={fadeIn('left',0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once :false ,amount : 0.7} }
                    className='relative  bg-white  text-center rounded-lg p-6 flex-1'>

                        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center  '>3</div>
                        <h3>Schedule</h3>
                        <p>Step 3 description goes here Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, perspiciatis maiores.</p>


                    </motion.div>
                </div>






            </div>
        </div>
    )
}

export default WorkingStep 