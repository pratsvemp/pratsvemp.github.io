import React from "react";
import { motion } from "framer-motion";
import bgPic from "./gallery/bgpic.jpg";
import photo1 from "./gallery/photo1.jpg";
import photo2 from "./gallery/photo2.jpg";
import photo3 from "./gallery/photo3.jpg";
import d3d1 from "./gallery/3d1.jpg";
import d3d2 from "./gallery/3d2.jpg";
import d3d3 from "./gallery/3d3.jpg";

const images = {
  photos: [
    { src: photo1, title: "", description: "Taken from the HiTech City Metro Station, Hyderabad" },
    { src: photo2, title: "", description: "Heavily edited photo of some peeling plaster I found" },
    { src: photo3, title: "", description: "A photo of the Lalbagh Lake, Bangalore" },
  ],
  d3d: [
    { src: d3d1, title: "Seneca", description: "A scene made for (and won) Coverify'25 by IIITH. directly inspired by the shot in the music video for Birthplace, in the album by Novo Amor by the same name. Made in Blender, edited in GIMP and Snapseed." },
    { src: d3d2, title: "", description: "Directly inspired by the movie Ready Player One. Made in Blender, edited in GIMP." },
    { src: d3d3, title: "", description: "Made in Blender, used artist Simon Thomas's procedural Noise texture pack, and inspired by CG Geek. Made and edited in Blender." },
  ],
};

const sections = [
  { id: "3d", title: "3D Art", items: images.d3d },
  { id: "photos", title: "Photography", items: images.photos },
];

function SliderSection({ id, title, items }) {
  const [index, setIndex] = React.useState(0);

  const prev = () => setIndex((prev) => (prev - 1 + items.length) % items.length);
  const next = () => setIndex((prev) => (prev + 1) % items.length);

  return (
    <section id={id} className="mb-20">
      <h3 className="text-2xl font-bold mb-6 text-center">{title}</h3>
      <div className="relative max-w-4xl mx-auto">
        {/* Navigation Arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center bg-white/50 backdrop-blur-md text-[#654321] hover:bg-[#000000] hover:text-white text-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <button
          onClick={next}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center bg-white/50 backdrop-blur-md text-[#654321] hover:bg-[#000000] hover:text-white text-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        {/* Carousel */}
        <div className="overflow-hidden">
          <motion.div
            className="flex transition-transform ease-in-out duration-700"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {items.map(({ src, title, description }, i) => (
              <div key={i} className="min-w-full px-4 flex justify-center">
                <motion.div
                  className="relative overflow-hidden rounded-xl shadow-lg group max-w-full"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={src}
                    alt={title}
                    className="max-h-[500px] w-auto object-contain mx-auto transition duration-300 group-hover:brightness-75 rounded-xl"
                  />
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-center px-4 text-white"
                  >
                    <h4 className="text-xl font-bold mb-2 drop-shadow-md">{title}</h4>
                    <p className="text-sm font-medium drop-shadow-sm">{description}</p>
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}



export default function Art() {
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
                href={`/${page.toLowerCase()}`}
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
        className="relative z-10 py-12 px-6 max-w-6xl mx-auto flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-4">Photos and 3D</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-3">
              I like clicking photos, be it with a camera in real life or a camera in Blender. All images are subject to Creative Commons Licensing (CC BY 4.0). I have tried my best to credit any and all artists whose work I have used/referenced while making any scenes (under appropriate licensing). The best way to resolve any disputes is to <a href="/contact" className="text-[#AA0000]">contact me</a>
        </p>
        <p className="text-lg text-center max-w-3xl mx-auto mb-6">
              I mainly use Snapseed to edit photos, Blender (and sometimes Houdini) to make Blender scenes, GIMP to edit photos and Resolve to edit videos.
        </p>

            <div className="flex justify-center mb-12">
              <a
                href="https://www.artstation.com/pratsvemp4"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/40 backdrop-blur-md border border-[#654321]/30 shadow-md hover:bg-white/60 transition text-[#654321] font-medium"
              >
                Visit My ArtStation
              </a>
            </div>

        {/* Sections */}
        {sections.map(({ id, title, items }) => (
          <SliderSection key={id} id={id} title={title} items={items} />
        ))}
      </motion.div>

      {/* Footer */}
      <footer className="bg-[#FDF6E3]/80 backdrop-blur-md border-t border-[#3e2e1f] py-4 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p className="text-sm font-medium text-[#3e2e1f] opacity-90">
            © 2025 Pratyush Vempati. All rights reserved.
          </p>
          <div className="space-x-6">
            <a
              href="/about"
              className="text-lg font-bold text-[#3e2e1f] hover:text-[#b25e28] transition-colors"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-lg font-bold text-[#3e2e1f] hover:text-[#b25e28] transition-colors"
            >
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
