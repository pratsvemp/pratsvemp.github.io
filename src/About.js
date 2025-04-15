import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import bgPic from "./components/bgpic.jpg";
import about1 from "./components/DPS.jpg";
import about2 from "./components/exun.JPG";
import about3 from "./components/ioling.jpg";
import about4 from "./components/iiith.jpg";

const timelineItems = [
  {
    title: "My Schooling",
    text: "I did a majority of my schooling in DPS R.K Puram (from 2017 to 2024), which I can confidently attest to a lot if not nearly all of my achievements. It was here that I discovered my passion for computer science, mathematics, linguistics, and 3D graphics.",
    image: about1,
  },
  {
    title: "Exun Clan",
    text: "In 2019, while in school, I joined the school's prestigious tech club, Exun Clan, as a member of the Quizzing and Hardware departments. It was here in one of the most invigorating environments I've ever been in that I got introduced to the linguistics olympiads and the broader field of academia in general. I went on to serve as the club's president in the year 2023-24.",
    image: about2,
  },
  {
    title: "Linguistics Olympiads",
    text: "In both 2023 and 2024, I had the honor of representing India at the International Linguistics Olympiad. I qualified the national rounds 3 years in a row (2022, 2023 and 2024) as well as making it to the IOL 2 years in a row (2023, 2024). I earned a Bronze Medal at the Asia Pacific Linguistics Olympiad in both 2023 and 2024, placing 8th and 3rd in those years respectively. I now serve on the Problem Committee and Organising Committee of the Panini Linguistics Olympiad, as well as contribute problems to various other Linguistics Olympiads.",
    image: about3,
  },
  {
    title: "University",
    text: (
      <>
        After finishing my 12th, I joined IIIT-Hyderabad and am pursuing a Bachelors in Computer Science right now. I try and study pure mathematics on the side, specifically graph theory, and complexity theory. If you want to collaborate on anything, or just want a nice chat on mathematics, then{" "}
        <a href="/contact" className="text-[#AA0000]">contact me</a>.
      </>
    ),
    image: about4,
  },
];


const pages = ["Home", "About", "Activities", "Art", "Contact"];

export default function About() {
  return (
    <div className="bg-[#FDF6E3] text-[#654321] min-h-screen font-sans relative overflow-hidden">
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
        ></motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 py-10 px-4 mt-12 max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-12">My Journey</h1>
        {timelineItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center mb-20 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-full md:w-1/2 rounded-xl shadow-xl border border-blue-300/70"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            />
            <motion.div
              className="md:w-1/2 mt-6 md:mt-0 md:mx-8 bg-blue-100/60 backdrop-blur-md border border-blue-300/70 rounded-2xl p-6 shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-2 text-[#654321]">{item.title}</h2>
              <p className="text-md font-semibold text-[#654321]">{item.text}</p>
            </motion.div>
          </div>
        ))}
      </motion.div>
      {/* Footer */}
      <footer className="bg-blue-100/60  backdrop-blur-md border-t border-[#3e2e1f] py-4 sticky bottom-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p className="text-sm font-medium text-[#3e2e1f] opacity-90">© 2025 Pratyush Vempati. All rights reserved.</p>
          <div className="space-x-6">
            <a href="/about" className="text-lg font-bold text-[#3e2e1f] hover:text-[#b25e28] transition-colors">About</a>
            <a href="/contact" className="text-lg font-bold text-[#3e2e1f] hover:text-[#b25e28] transition-colors">Contact</a>
            <a href="https://github.com/pratsvemp" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-[#3e2e1f] hover:text-[#b25e28] transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}