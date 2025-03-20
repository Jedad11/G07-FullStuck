import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const ResponsiveMenu = ({open}) => {

  return <AnimatePresence mode='wait'>
    {open && (
            <motion.div 
            initial={{ opacity: 0, y: -100}}
            animate={{ opacity: 1, y: 0}}
            exit={{ opacity: 0, y: -100 }}
            className="absolute top-30 left-0 w-full h-screen z-20"
            >
            <div className='font-Inter text-xl text-[#362518] font-semibold bg-[#ffedd5] py-10 m-6 rounded-3xl'>
                <ul className='flex flex-col justify-center items-center gap-10'>
                    <li className=' hover:text-white hover:border-b-2 border-[#ffedd5] cursor-pointer transition-all '>Home</li>
                    <li>Condo</li>
                    <li>Apartment</li>
                    <li>Contact</li>
                </ul>
            </div>
            </motion.div>
        )
    }
  </AnimatePresence>
    
  
}

export default ResponsiveMenu