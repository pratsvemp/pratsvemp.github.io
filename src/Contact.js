import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import bgPic from "./bgpic.jpg";

export default function Contact() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="bg-[#FDF6E3] text-[#654321] min-h-screen font-sans relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Background with blur effect */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${bgPic})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
        >
          <motion.div
            className="absolute inset-0 bg-white/30 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
          ></motion.div>
        </motion.div>

        {/* Contact Content */}
        <motion.div
          className="relative z-10 flex items-center justify-center min-h-screen px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          <div className="bg-white/60 backdrop-blur-md p-10 rounded-2xl shadow-xl max-w-xl text-center">
            <h1 className="text-4xl font-bold mb-6 text-[#3e2e1f]">Get in Touch</h1>
            <p className="text-lg mb-4 text-[#452222]">
              Feel free to reach out to me for anything under the sun.
            </p>
            <a
              href="mailto:pratyush.vempati@students.iiit.ac.in"
              className="text-xl font-semibold text-[#b25e28] hover:underline transition"
            >
              pratyush.vempati@students.iiit.ac.in
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
