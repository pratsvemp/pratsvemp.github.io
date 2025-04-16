import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import bgPic from "./activ/bgpic.jpg";

export default function Projects() {
  return (
    <div className="bg-[#FDF6E3] text-[#654321] min-h-screen font-sans relative overflow-hidden flex flex-col">
      {/* Background */}
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
        />
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 mt-24 px-6 max-w-5xl mx-auto flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-5xl font-bold mb-10 text-center">Projects</h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Text Analysis Tool Card */}
          <Link
            to="/text-analyzer"
            className="block rounded-2xl p-6 border border-[#b0a080]/40 shadow-lg bg-white/50 backdrop-blur-md transition-transform hover:scale-105"
          >
            <h2 className="text-2xl font-bold mb-2 text-[#3e2e1f]">Text Analysis Tool</h2>
            <p className="text-md text-[#4a3321]">
              Analyze large text input for word and character stats, and token frequency of pronouns, prepositions, and articles.
            </p>
          </Link>

          {/* Add more project cards here if needed */}
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-blue-100/60 backdrop-blur-md border-t border-[#3e2e1f] py-4 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p className="text-sm font-medium text-[#3e2e1f] opacity-90">
            © 2025 Pratyush Vempati. All rights reserved.
          </p>
          <div className="space-x-6">
            <Link to="/about" className="text-lg font-bold text-[#3e2e1f] hover:text-[#b25e28] transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-lg font-bold text-[#3e2e1f] hover:text-[#b25e28] transition-colors">
              Contact
            </Link>
            <a
              href="https://github.com/pratsvemp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-[#3e2e1f] hover:text-[#b25e28] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
