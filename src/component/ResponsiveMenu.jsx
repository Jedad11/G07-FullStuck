import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="absolute top-30 left-0 w-full h-screen z-20"
        >
          <div className="z-10 font-Inter text-xl text-[#362518] font-semibold bg-[#ffedd5] py-10 m-6 rounded-3xl ">
            <ul className="flex flex-col justify-center items-center gap-10 text-stone-500">
              <button
                className="SIGN_IN bg-[#362518] text-white py-2 px-4 rounded-lg hover:bg-[#4e3622] "
                onClick={() => setSignInOpen(true)}
              >
                Sign In
              </button>
              <button
                className="SIGN_UP bg-transparent border-2 border-[#362518] text-#362518] py-2 px-4 rounded-lg hover:bg-[#ffedd5] hover:text-[#362518]"
                onClick={() => setSignUpOpen(true)}
              >
                Sign up
              </button>
              <li className=" hover:text-[#362518] hover:border-b-2 border-[#362518] cursor-pointer transition-all ">
                Home
              </li>
              <li className="hover:text-[#362518] hover:border-b-2 border-[#362518] cursor-pointer transition-all ">
                Condo
              </li>
              <li className="hover:text-[#362518] hover:border-b-2 border-[#362518] cursor-pointer transition-all">
                Apartment
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
