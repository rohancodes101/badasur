import React from "react";
import { useNavigate } from "react-router-dom";

const AlmostHere = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4 py-8">
      <div className="max-w-xs text-center">
        <div className="text-sm text-gray-500 mb-3">SET 3 OF 3</div>
        <h2 className="text-xl font-bold mb-2">Almost there!</h2>
        <p className="text-sm text-gray-400 mb-6">
          This is the last set – drag and rank the words one last time!
        </p>
        <button
  onClick={() => navigate("/rank", { state: { setIndex: 2, startQ: 0 } })}
          className="w-full bg-black text-white text-base py-3 rounded-full font-semibold"
        >
          Continue ranking
        </button>
      </div>
    </div>
  );
};

export default AlmostHere;
