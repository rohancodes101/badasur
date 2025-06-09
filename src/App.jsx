// function App() {
import React from "react";
import { motion } from "framer-motion";
import { Routes, Route, useNavigate } from "react-router-dom";
import { FaLightbulb, FaBrain, FaHandsHelping, FaTools } from "react-icons/fa";
import FirstPage from "./Pages/FirstPage"; 
import RankingScreen from "./Components/RankingScreen";
import SetIntro from "./Pages/SetIntro";
import AlmostHere from "./Pages/AlmostHere";
import Calculating from "./Components/Calculating";
import Report from "./Components/Report";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center bg-white font-mono px-4 py-8">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 mt-4"
      >
        <span className="tracking-widest font-bold text-xs text-gray-700 uppercase">
          your <br />
          BASADUR <br />
          PROFILE
        </span>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-center mb-6"
      >
        <div className="flex justify-center gap-2 text-2xl mb-2">
          <FaLightbulb className="text-cyan-400" />
          <FaBrain className="text-orange-400" />
          <FaHandsHelping className="text-green-400" />
          <FaTools className="text-pink-400" />
        </div>
        <h1 className="text-2xl font-bold leading-snug mb-2">
          Discover how you think and create <br /> in a brainstorm.
        </h1>
        <p className="text-gray-500 text-base">
          Rank 3 sets of words to reveal your creative strengths.
        </p>
      </motion.div>

      {/* Start Button */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full flex justify-center mb-8"
      >
        <button
          onClick={() => navigate("/first")}
          className="cursor-pointer bg-black text-white text-lg rounded-full px-8 py-4 shadow-lg hover:bg-gray-800 transition-all duration-200 font-semibold tracking-wide"
        >
          Start ranking
          <span className="block text-xs mt-1 text-gray-300 font-normal">
            Takes ~5-7 minutes
          </span>
        </button>
      </motion.div>

      {/* What is Basadur Profile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-md w-full bg-gray-50 rounded-xl p-6 shadow-sm mb-8"
      >
        <h2 className="font-bold text-lg mb-2 tracking-tight">
          WHAT IS BASADUR PROFILE?
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          <span className="underline decoration-dotted decoration-cyan-400 cursor-pointer">
            Basadur profile
          </span>{" "}
          is a personality test for creativity, but instead of telling you your spirit animal, it shows how your brain prefers to solve problems. Developed by creativity researcher Dr. Min Basadur, the profile sorts you into one (or a blend) of four mindsets:
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <FaLightbulb className="text-cyan-400 text-xl" />
            <div>
              <span className="font-semibold">GENERATOR</span>
              <span className="block text-gray-500 text-xs">
                thrives on fresh questions and endless “what-ifs.”
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaBrain className="text-orange-400 text-xl" />
            <div>
              <span className="font-semibold">CONCEPTUALIZER</span>
              <span className="block text-gray-500 text-xs">
                turns big messy thoughts into sharp, shareable ideas.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaHandsHelping className="text-green-400 text-xl" />
            <div>
              <span className="font-semibold">OPTIMIZER</span>
              <span className="block text-gray-500 text-xs">
                loves stress-testing concepts until the plan feels bulletproof.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaTools className="text-pink-400 text-xl" />
            <div>
              <span className="font-semibold">IMPLEMENTER</span>
              <span className="block text-gray-500 text-xs">
                rolls up sleeves, organizes people, and makes ideas real.
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Why Should You Care */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="max-w-md w-full bg-white rounded-xl p-6 shadow-sm mb-8"
      >
        <h2 className="font-bold text-lg mb-2 tracking-tight">
          WHY SHOULD YOU CARE?
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Because group projects get easier when everyone knows their lane. Generators supply the sparks, Conceptualizers sketch the blueprint, Optimizers tighten the screws, and Implementers keep the wheels moving. Instead of arguing over who does what, your team can play to its strengths from day one.
        </p>
        <p className="text-gray-600 text-sm mb-4">
          The quiz takes about 5-7 minutes: you simply rank 3 sets of 72 words by how well each word describes you. When you’re done, you’ll see a colorful radar chart.
        </p>
        <p className="text-gray-600 text-sm">
          In short, the Basadur Profile is a fast, friendly way to spot your creative superpower and build better teams on campus.
        </p>
      </motion.div>

      {/* Footer */}
      <div className="text-center mt-6 mb-2 text-xs text-gray-400">
        VIBE CODED BY <span className="text-blue-400 underline">THIS HUMAN</span>
      </div>
    </div>
  );
}



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/first" element={<FirstPage />} />
      <Route path="/rank" element={<RankingScreen />} />
      <Route path="/set-intro" element={<SetIntro />} />
<Route path="/almost-here" element={<AlmostHere />} />
<Route path="/calculating" element={<Calculating />} />
<Route path="/report" element={<Report />} />
    </Routes>
  );
}