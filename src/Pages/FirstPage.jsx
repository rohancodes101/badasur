import React from "react";
import { useNavigate } from "react-router-dom";

export default function FirstPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center bg-white font-mono px-4 py-8">
      {/* Progress Bar Section */}
      <div className="w-full max-w-xs mt-8 mb-6">
        <div className="flex justify-between items-center text-xs text-gray-600 font-semibold mb-1">
          <span>SET 1 OF 3</span>
          <span>0%</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gray-400 rounded-full" style={{ width: "0%" }} />
        </div>
      </div>

      {/* Main Text */}
      <div className="w-full max-w-xs text-left mb-8">
        <h2 className="font-bold text-xl mb-2 leading-tight">
          First up:<br />
          <span className="font-mono">Rank these words.</span>
        </h2>
        <p className="text-gray-500 text-sm">
          Just drag and arrange them from the top (most like you) to the bottom (least like you).
        </p>
      </div>

      {/* Button */}
      <button
  onClick={() => navigate("/rank")}
  className="cursor-pointer w-full max-w-xs bg-black text-white text-lg rounded-full px-8 py-4 shadow-lg hover:bg-gray-800 transition-all duration-200 font-semibold tracking-wide"
>Let's Begin</button>
    </div>
  );
}
