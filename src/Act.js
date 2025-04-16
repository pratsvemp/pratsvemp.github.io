import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import bgPic from "./activ/bgpic.jpg";
import researchImg from "./activ/Forbidden_line_subgraphs.svg.png";
import projectsImg from "./activ/prats-vemp-spacethingomgprats.jpg";
import othersImg from "./activ/hklophot.png";

const activityPages = [
  {
    title: "Research",
    description: "My research in Graph Theory and Complexity Theory",
    link: "/activities/research",
    image: researchImg,
  },
  {
    title: "Projects",
    description: "My personal and collaborative Blender, coding, or miscellaneous projects.",
    link: "/activities/projects",
    image: projectsImg,
  },
  {
    title: "Others",
    description: "Anything and everything else, incl. linguistics & my thoughts on things.",
    link: "/activities/others",
    image: othersImg,
  },
];

const pages = ["Home", "About", "Activities", "Art", "Contact"];

export default function Activities() {
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
        className="relative z-10 py-12 px-6 max-w-6xl mt-12 mx-auto flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
      {/* Skills Heading */}
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        My Skills
      </motion.h2>

      {/* Intro Paragraph */}
      <motion.div
        className="mb-3 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-lg text-[#654321] font-medium">
              I've worked on a bunch of things in a bunch of topics. Here's a condensed view of them all:
        </p>
      </motion.div>
      {/* Skill Labels Section */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        {/* Programming Languages */}
        {["Python", "C/C++", "JavaScript", "HTML", "CSS", "LaTeX"].map((skill) => (
          <span
            key={skill}
            className="px-4 py-1 text-sm font-medium rounded-full bg-[#D8E6FF] text-[#1A4C8B] border border-[#1A4C8B]/30"
          >
            {skill}
          </span>
        ))}

        {/* Math */}
        {["Graph Theory", "Complexity Theory", "Graph Reconstruction", "Combinatorics"].map((skill) => (
          <span
            key={skill}
            className="px-4 py-1 text-sm font-medium rounded-full bg-[#FFEFD5] text-[#8B5C00] border border-[#8B5C00]/30"
          >
            {skill}
          </span>
        ))}

        {/* Software */}
        {["React", "Flask", "Resolve", "Houdini", "Blender", "Gimp", "Firebase", "Audacity"].map((skill) => (
          <span
            key={skill}
            className="px-4 py-1 text-sm font-medium rounded-full bg-[#E6F4EA] text-[#2F684E] border border-[#2F684E]/30"
          >
            {skill}
          </span>
        ))}
      </motion.div>

      {/* Links to CV and LinkedIn */}
      <motion.div
        className="mt-6 flex justify-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <a
          href="/PratyushVempati_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-xl text-[#654321] font-semibold border border-[#654321]/30 bg-white/40 backdrop-blur-md shadow-md hover:bg-white/60 transition"
        >
          View CV
        </a>
        <a
          href="https://www.linkedin.com/in/pratyush-vempati-6134ab298/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-xl text-[#654321] font-semibold border border-[#654321]/30 bg-white/40 backdrop-blur-md shadow-md hover:bg-white/60 transition"
        >
          LinkedIn
        </a>
      </motion.div>

      {/* Spacing before Skills */}
      <div className="mt-20" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {activityPages.map((activity, index) => (
            <Link to={activity.link}>
              <motion.div
                key={index}
                href={activity.link}
                className="group relative rounded-2xl overflow-hidden shadow-xl border border-[#b0a080]/40 backdrop-blur-md bg-white/40 transition-transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${activity.image})` }}
                />
                <div className="absolute inset-0 bg-[#FDF6E3]/60 group-hover:bg-[#FDF6E3]/70 transition duration-300" />
                <div className="relative z-10 p-6 flex flex-col justify-end h-64">
                  <h2 className="text-2xl font-bold mb-2 text-[#654321]">{activity.title}</h2>
                  <p className="text-md font-medium text-[#000321]">{activity.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
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
