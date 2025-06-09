// SetIntro.jsx
import { useNavigate } from 'react-router-dom'; // I assume you need this
import { useLocation } from "react-router-dom";

const SetIntro = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const setIndex = location.state?.setIndex || 1;

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center px-4 py-8">
      <div className="max-w-xs text-center">
        <div className="text-sm text-gray-500 mb-3">SET {setIndex} OF 3</div>
        <h2 className="text-xl font-bold mb-2">Awesome!! Halfway done, let’s keep going.</h2>
        <p className="text-sm text-gray-400 mb-6">You’ve got the hang of it! You know what to do ;)</p>
        <button
            onClick={() => navigate("/rank", { state: { setIndex: 1, startQ: 0 } })}
          className="cursor-pointer w-full bg-black text-white text-base py-3 rounded-full font-semibold"
        >
          Continue ranking
        </button>
      </div>
    </div>
  );
};

export default SetIntro;  // <-- Default export
