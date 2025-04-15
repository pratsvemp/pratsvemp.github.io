import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

// Import other images
import aboutMeImg from "./aboutme.jpg";
import achievementsImg from "./achievements.jpg";
import artImg from "./art.jpg";
import profileImg from "./profile.jpg";
import contactImg from "./contact.jpg";
import bgPic from "./bgpic.jpg";

// Dynamic gallery image import
const importAll = (r) => r.keys().map(r);
const galleryImages = importAll(require.context('./gallery', false, /\.(png|jpe?g|svg)$/));

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const sections = [
    { title: "My Art", description: "My photographs and 3D art.", link: "/art", image: artImg },
    { title: "My Activities", description: "Things done and doing.", link: "/activities", image: achievementsImg },
    { title: "About Me", description: "More about me if you're creepy.", link: "/about", image: aboutMeImg },
    { title: "Contact me", description: "Anything under the sun.", link: "/contact", image: contactImg },
  ];

  const pages = ["Home", "About", "Activities", "Art", "Contact"];
  
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentImage, setCurrentImage] = useState(galleryImages[0]);
  const [isLoading, setIsLoading] = useState(true);
  const [stage, setStage] = useState('loading'); // 'loading', 'white-fade', 'content'

  useEffect(() => {
    setIsLoading(false);
    setStage('content');

    const imageInterval = setInterval(() => {
      setCurrentImage(galleryImages[Math.floor(Math.random() * galleryImages.length)]);
    }, 2000);

    return () => clearInterval(imageInterval);
  }, []);
  
  return (
    <AnimatePresence mode="wait">
      <div className="bg-[#FDF6E3] text-[#654321] min-h-screen font-sans relative overflow-hidden">
        {/* Background with blur effect */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: `url(${bgPic})` }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: stage === 'content' ? 1 : 0,
            transition: { duration: 1 }
          }}
        >
          <motion.div 
            className="absolute inset-0 bg-white/30 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: stage === 'content' ? 1 : 0,
              transition: { duration: 1 }
            }}
          ></motion.div>
        </motion.div>
        {/* White Fade Overlay */}
        {stage === 'white-fade' && (
          <motion.div 
            className="fixed inset-0 bg-white z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        )}
        {/* Main Content */}
        {stage === 'content' && (
          <motion.div 
            className="relative z-10" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            {/* Navbar */}
            <motion.nav 
              className="bg-transparent border-b border-[#654321] p-4 sticky top-0 z-50 backdrop-blur-sm" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
            >
              <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">Pratyush Vempati</div>
                <div className="space-x-6">
                  {pages.map((page) => (
                    <Link 
                      key={page} 
                      to={`/${page.toLowerCase()}`} 
                      className="text-lg font-bold text-[#654321] hover:text-[#D2691E] transition-colors"
                    >
                      {page}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.nav>
            
            {/* Main Content Sections */}
            <motion.section 
              className="flex items-center justify-center p-10" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <div>
                  <h1 className="text-5xl font-bold mb-4">Hi, I'm Pratyush</h1>
                  <p className="text-lg">I'm currently an Undergraduate student of Computer Science at the International Institute of Information Technology, Hyderabad, pursuing a Bachelor's in Technology of Computer Science, while also studying pure mathematics on the side. <br /><br /> My main interests are in Graph Theory, specifically graph reconstruction, and Complexity Theory. <br /><br />On the side, I play badminton, take some aesthetic photos and make ethereal 3D art. Check out more of me below! <br /><br /> All photos and images on this website including the backgrounds are my own. </p>
                </div>
                <motion.img 
                  src={profileImg} 
                  alt="Profile" 
                  className="w-full max-w-sm rounded-lg shadow-lg mx-auto" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.25, duration: 1 }}
                />
              </div>
            </motion.section>            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 pb-20 max-w-5xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              {sections.map((section) => (
                <motion.div
                  key={section.title}
                  className="group relative rounded-2xl overflow-hidden shadow-xl border border-[#b0a080]/40 transition-transform hover:scale-105"
                >
                  {/* Image Section */}
                  <div
                    className="w-full h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url(${section.image})` }}
                  />
                  
                  {/* Frosted Glass Card with Text Below the Image */}
                  <div className="relative z-10">
                    <div className="bg-[#FFFFFF]/40 backdrop-blur-md rounded-lg p-6">
                      <h2 className="text-2xl font-bold mb-2 text-[#454321]">{section.title}</h2>
                      <p className="text-md font-medium text-[#452222]">{section.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            {/* Footer */}
            <footer className="bg-blue-100/60  backdrop-blur-md border-t border-[#3e2e1f] py-4 sticky bottom-0 z-50">
              <div className="max-w-6xl mx-auto flex justify-between items-center">
                <p className="text-sm font-medium text-[#3e2e1f] opacity-90">© 2025 Pratyush Vempati. All rights reserved.</p>
                <div className="space-x-6">
                  <Link to="/about" className="text-lg font-bold text-[#3e2e1f] hover:text-[#b25e28] transition-colors">About</Link>
                  <Link to="/contact" className="text-lg font-bold text-[#3e2e1f] hover:text-[#b25e28] transition-colors">Contact</Link>
                  <a href="https://github.com/pratsvemp" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-[#3e2e1f] hover:text-[#b25e28] transition-colors">GitHub</a>
                </div>
              </div>
            </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
