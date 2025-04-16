import React, { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import bgPic from "./activ/bgpic.jpg";

const pronouns = ["he", "she", "it", "they", "we", "you", "i", "me", "him", "her", "us", "them"];
const prepositions = [
  "in", "on", "at", "since", "for", "ago", "before", "to", "past", "under", "over", "between", "into", "out", "about", "above", "below", "with", "without", "near"
];
const articles = ["a", "an"];

export default function TextAnalyzer() {
  const [text, setText] = useState("");
  const [analysis, setAnalysis] = useState(null);

  const analyzeText = () => {
    const letters = text.replace(/[^a-zA-Z]/g, "").length;
    const words = text.trim().split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    const spaceCount = (text.match(/ /g) || []).length;
    const newlineCount = (text.match(/\n/g) || []).length;
    const specialSymbols = (text.match(/[^\w\s]/g) || []).length;

    const countTokens = (tokens) => {
      const counts = {};
      tokens.forEach((token) => {
        const word = token.toLowerCase();
        if (!counts[word]) counts[word] = 0;
        counts[word]++;
      });
      return counts;
    };

    const pronounCounts = countTokens(words.filter(w => pronouns.includes(w.toLowerCase())));
    const prepositionCounts = countTokens(words.filter(w => prepositions.includes(w.toLowerCase())));
    const articleCounts = countTokens(words.filter(w => articles.includes(w.toLowerCase())));

    setAnalysis({ letters, wordCount, spaceCount, newlineCount, specialSymbols, pronounCounts, prepositionCounts, articleCounts });
  };

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
      <motion.div className="relative z-10 pt-24 px-6 max-w-5xl mx-auto flex-grow">
        <h1 className="text-4xl font-bold mb-4 text-center">Text Analyzer</h1>
        <textarea
          className="w-full h-64 p-4 rounded-lg border border-[#b0a080]/40 mb-6"
          placeholder="Paste your 10,000+ word text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button
          className="bg-[#654321] text-white px-6 py-2 rounded-xl hover:bg-[#a25c2c] transition-colors"
          onClick={analyzeText}
        >
          Analyze Text
        </button>

        {analysis && (
          <div className="mt-8 space-y-6">
            <div><strong>Letters:</strong> {analysis.letters}</div>
            <div><strong>Words:</strong> {analysis.wordCount}</div>
            <div><strong>Spaces:</strong> {analysis.spaceCount}</div>
            <div><strong>Newlines:</strong> {analysis.newlineCount}</div>
            <div><strong>Special Symbols:</strong> {analysis.specialSymbols}</div>

            <div>
              <strong>Pronouns:</strong>
              <ul className="list-disc pl-6">
                {Object.entries(analysis.pronounCounts).map(([key, val]) => (
                  <li key={key}>{key}: {val}</li>
                ))}
              </ul>
            </div>

            <div>
              <strong>Prepositions:</strong>
              <ul className="list-disc pl-6">
                {Object.entries(analysis.prepositionCounts).map(([key, val]) => (
                  <li key={key}>{key}: {val}</li>
                ))}
              </ul>
            </div>

            <div>
              <strong>Indefinite Articles:</strong>
              <ul className="list-disc pl-6">
                {Object.entries(analysis.articleCounts).map(([key, val]) => (
                  <li key={key}>{key}: {val}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </motion.div>

      {/* Footer */}
      <footer className="bg-blue-100/60 backdrop-blur-md border-t border-[#3e2e1f] py-4 z-50 mt-20">
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
