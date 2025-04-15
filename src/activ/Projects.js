// Research.jsx, Projects.jsx, Others.jsx

import React from "react";
import { motion } from "framer-motion";
import bgPic from "./bgpic.jpg";

export default function PlaceholderPage() {
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

      {/* Navbar */}
      <nav className="bg-transparent border-b border-[#654321] p-4 z-50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Pratyush Vempati</div>
          <div className="space-x-6">
            {["Home", "About", "Activities", "Art", "Contact"].map((page) => (
              <a
                key={page}
                href={`/#/${page.toLowerCase()}`}
                className="text-lg font-bold text-[#654321] hover:text-[#D2691E] transition-colors"
              >
                {page}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <motion.div
        className="relative z-10 py-32 px-6 max-w-4xl mx-auto flex-grow text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-5xl font-bold mb-4">Work In Progress</h1>
        <p className="text-xl font-medium">This section is currently being built. Stay tuned!</p>
      </motion.div>

      {/* Footer */}
      <footer className="bg-blue-100/60 backdrop-blur-md border-t border-[#3e2e1f] py-4 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p className="text-sm font-medium text-[#3e2e1f] opacity-90">
            © 2025 Pratyush Vempati. All rights reserved.
          </p>
          <div className="space-x-6">
            <a href="/about" className="text-lg font-bold text-[#3e2e1f] hover:text-[#b25e28] transition-colors">
              About
            </a>
            <a href="/contact" className="text-lg font-bold text-[#3e2e1f] hover:text-[#b25e28] transition-colors">
              Contact
            </a>
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

// You can copy this file as Research.jsx, Projects.jsx, and Others.jsx and import them separately into your router.