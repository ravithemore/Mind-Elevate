import React, { useEffect, useState } from 'react';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion } from 'framer-motion';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  const handleCloseMenu =()=>{
    setIsOpen(false)
  }
  const handleScroll =()=>{
    const sections = ['home','services' , 'about','pricing','testimonial'];
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section =>{
      const element = document.getElementById(section);
      if(element){
        const offsetTop =element.offsetTop;
        const height=element.offsetHeight;
        if(scrollPosition >= offsetTop && scrollPosition < offsetTop+height){
          setActiveSection(section);
        }
      }

    } )

  }


  useEffect(()=>{
    window.addEventListener('scroll',handleScroll);
    return()=>window.removeEventListener('scroll',handleScroll)
  },[])

  const handleScrollTo = (targetId) =>{
    const targetElement =document.getElementById(targetId);
    if(targetElement){
      window.scrollTo({
        top:targetElement.offsetTop,
        behavior:'smooth'

      })
    }
  }

  const navlinks = (
    <ul className="font-medium flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0">
      <li>
        <motion.a
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        onClick={
          (e)=>{
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo('home')
          }
        }
          href="#home"
          className={`text-white ${activeSection === 'home' ? 'isActive' : ''}`}
        >
          Home
        </motion.a>
      </li>
      <li>
        <motion.a
           whileHover={{scale:1.1}}
           whileTap={{scale:0.9}}
           onClick={
             (e)=>{
               e.preventDefault();
               handleCloseMenu();
               handleScrollTo('services')
             }
            }
          href="#services"
          className={`text-white ${activeSection === 'services' ? 'isActive' : ''}`}
        >
          Services
        </motion.a>
      </li>
      <li>
        <motion.a
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          onClick={
            (e)=>{
              e.preventDefault();
              handleCloseMenu();
              handleScrollTo('about')
            }
           }
          href="#about"
          className={`text-white ${activeSection === 'about' ? 'isActive' : ''}`}
        >
          About Us
        </motion.a>
      </li>
      <li>
        <motion.a
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          onClick={
            (e)=>{
              e.preventDefault();
              handleCloseMenu();
              handleScrollTo('pricing')
            }
          }
          href="#pricing"
          className={`text-white ${activeSection === 'pricing' ? 'isActive' : ''}`}
        >
          Pricing
        </motion.a>
      </li>
      <li>
        <motion.a
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        onClick={
          (e)=>{
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo('testimonial')
          }
        }
          href="#testimonial"
          className={`text-white ${activeSection === 'testimonial' ? 'isActive' : ''}`}
        >
          Testimonial
        </motion.a>
      </li>
    </ul>
  );

  return (
    <header className="bg-heroBG text-white py-6 px-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* Logo */}
        <div className="flex-shrink-0 text-white text-lg max-w-[150px]">
          <a href="/">
            <img src="/nav.png" alt="logo" className="w-full h-auto" />
          </a>
        </div>

        {/* Nav Item */}
        <div className="flex-grow md:flex md:justify-center hidden">
          <nav>{navlinks}</nav>
        </div>

        {/* Button */}
        <div className="flex-shrink-0 hidden md:block">
          <a
            onClick={e=>{
              e.preventDefault();
              handleScrollTo('contact')
            }}
            href="#contact"
            className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded whitespace-nowrap"
          >
            Contact Us
          </a>
        </div>

        {/*Hamburger menu*/}
        <div className='block md:hidden '>
          <button
            onClick={handleToggle}
            className={`text-white focus:outline-none  ${isOpen ? "border border-white " : ""}`} >
            <HiOutlineMenuAlt3 className='size-6 ' />
          </button>
        </div>

      </div>

      {/*Mobiile view*/}
      {
        isOpen && (
          <nav className='absolute top-full left-0 w-full bg-heroBG z-20 md:hidden'>
            <ul className='flex flex-col  p-4 space-y-3'>
              {navlinks.props.children}

              <li className='py-2  '>
                <a href="#contact"
                  className='text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded'
                  onClick={(e) => {
                    e.preventDefault();
                    handleCloseMenu();
                    handleScrollTo('contact')
                  }}>
                  Conatact Us
                </a>
              </li>

            </ul>



          </nav>
        )
      }
    </header>
  );
};

export default Navbar;
