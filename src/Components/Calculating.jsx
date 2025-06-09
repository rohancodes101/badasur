import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Calculating = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/report"), 2000);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center font-mono px-4">
      <p className="text-xs uppercase text-center tracking-widest mb-2">your BASADUR PROFILE</p>
      <h1 className="text-2xl font-bold mb-4">Just a second...</h1>
      <p className="text-sm text-gray-500 text-center">
        we’re mapping out your creative style based on how you ranked.
      </p>
    </div>
  );
};

export default Calculating;
