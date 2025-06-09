// import React, { useEffect, useState } from "react";
// import { DragDropContext, Droppable } from "react-beautiful-dnd";
// import questions from "../questions";
// import RankingCard from "./RankingCard";
// import { useNavigate } from "react-router-dom";

// const RankingScreen = () => {
//   const [currentQ, setCurrentQ] = useState(0);
//   const [currentSet, setCurrentSet] = useState(0); // 0-2 for Set 1–3
//   const [words, setWords] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const q = questions.slice(currentSet * 6, currentSet * 6 + 6);
//     if (q[currentQ]) setWords(q[currentQ].words);
//   }, [currentQ, currentSet]);

//   const onDragEnd = (result) => {
//     if (!result.destination) return;
//     const reordered = Array.from(words);
//     const [moved] = reordered.splice(result.source.index, 1);
//     reordered.splice(result.destination.index, 0, moved);
//     setWords(reordered);
//   };

//   const handleNext = () => {
//     let answers = JSON.parse(localStorage.getItem("answers") || "{}");
//     let qId = questions[currentSet * 6 + currentQ].id;
//     answers[qId] = {};
//     words.forEach((w, i) => {
//       answers[qId][w.column] = 4 - i;
//     });
//     localStorage.setItem("answers", JSON.stringify(answers));

//     if (currentQ < 5) setCurrentQ(currentQ + 1);
//     else if (currentSet < 2) {
//       setCurrentQ(0);
//       setCurrentSet(currentSet + 1);
//     } else {
//       navigate("/report");
//     }
//   };

//   const handleBack = () => {
//     if (currentQ > 0) setCurrentQ(currentQ - 1);
//     else if (currentSet > 0) {
//       setCurrentSet(currentSet - 1);
//       setCurrentQ(5);
//     }
//   };

//   const percent = Math.floor(((currentSet * 6 + currentQ) / 18) * 100);

//   return (
//     <div className="min-h-screen bg-white px-4 py-6">
//       <div className="max-w-md mx-auto">
//         {/* Progress */}
//         <div className="flex justify-between text-sm mb-2 font-semibold text-gray-600">
//           <span>SET {currentSet + 1} OF 3</span>
//           <span>{percent}%</span>
//         </div>
//         <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
//           <div className="h-full bg-cyan-300 rounded-full" style={{ width: `${percent}%` }} />
//         </div>

//         <p className="text-xs text-gray-400 mb-6">
//           Tap the ‘i’ icon if you’re not sure what a word means.
//         </p>

//         {/* DnD */}
//         <DragDropContext onDragEnd={onDragEnd}>
//           <Droppable droppableId="words">
//             {(provided) => (
//               <div {...provided.droppableProps} ref={provided.innerRef}>
//                 {words.map((word, index) => (
//                   <RankingCard key={word.text} word={word} index={index} />
//                 ))}
//                 {provided.placeholder}
//               </div>
//             )}
//           </Droppable>
//         </DragDropContext>

//         {/* Buttons */}
//         <div className="flex justify-between mt-8">
//           <button onClick={handleBack} className="bg-gray-100 px-6 py-2 rounded-full text-sm font-semibold">
//             ← Back
//           </button>
//           <button
//             onClick={handleNext}
//             className="bg-cyan-300 px-6 py-2 rounded-full text-sm font-semibold hover:bg-cyan-400"
//           >
//             Next →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RankingScreen;








































import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import questions from "../questions";
import RankingCard from "./RankingCard";
import { useNavigate, useLocation } from "react-router-dom";

const RankingScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Get the resumed set index from location state (if available)
    const resumedSet = location.state?.setIndex || 0;
    const resumedQ = location.state?.startQ ?? 0;


    // Set up state variables inside the component
    const [currentSet, setCurrentSet] = useState(resumedSet);
    const [currentQ, setCurrentQ] = useState(resumedQ);
    const [words, setWords] = useState([]);

    // Dynamic color per set
    const accentColors = ["bg-cyan-300", "bg-yellow-300", "bg-orange-300"];
    const currentColor = accentColors[currentSet];

    useEffect(() => {
        if (currentSet * 6 + currentQ >= 18) return; // ⛔️ prevent loop
        const q = questions.slice(currentSet * 6, currentSet * 6 + 6);
        if (q[currentQ]) setWords(q[currentQ].words);
    }, [currentQ, currentSet]);

    const onDragEnd = (result) => {
        if (!result.destination) return;
        const reordered = Array.from(words);
        const [moved] = reordered.splice(result.source.index, 1);
        reordered.splice(result.destination.index, 0, moved);
        setWords(reordered);
    };

    const handleNext = () => {
        // Save answers in localStorage
        let answers = JSON.parse(localStorage.getItem("answers") || "{}");
        const qId = questions[currentSet * 6 + currentQ].id;
        answers[qId] = {};
        words.forEach((w, i) => {
            answers[qId][w.column] = 4 - i;
        });
        localStorage.setItem("answers", JSON.stringify(answers));

        // Routing logic
        if (currentQ === 5) {
            if (currentSet === 0) return navigate("/set-intro", { state: { setIndex: 2 } });
            if (currentSet === 1) return navigate("/almost-here", { state: { setIndex: 3 } });
            if (currentSet === 2) return navigate("/calculating");
        }

        // Continue to next Q
        setCurrentQ((prev) => prev + 1);
    };

    const handleBack = () => {
        if (currentQ > 0) setCurrentQ(currentQ - 1);
        else if (currentSet > 0) {
            setCurrentSet(currentSet - 1);
            setCurrentQ(5);
        }
    };

    const percent = Math.floor(((currentSet * 6 + currentQ) / 18) * 100);

    return (
        <div className="min-h-screen bg-white px-4 py-6">
            <div className="max-w-md mx-auto">
                {/* Progress */}
                <div className="flex justify-between text-sm mb-2 font-semibold text-gray-600">
                    <span>SET {currentSet + 1} OF 3</span>
                    <span>{percent}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
                    <div className={`h-full ${currentColor} rounded-full`} style={{ width: `${percent}%` }} />
                </div>

                <p className="text-xs text-gray-400 mb-6">
                    Tap the ‘i’ icon if you’re not sure what a word means.
                </p>

                {/* DnD */}
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="words">
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {words.map((word, index) => (
                                    <RankingCard key={word.text} word={word} index={index} />
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>

                {/* Buttons */}
                <div className="flex justify-between mt-8">
                    <button onClick={handleBack} className="cursor-pointer bg-gray-100 px-6 py-2 rounded-full text-sm font-semibold">
                        ← Back
                    </button>
                    <button
                        onClick={handleNext}
                        className={`cursor-pointer px-6 py-2 rounded-full text-sm font-semibold ${currentColor} hover:opacity-80`}
                    >
                        Next →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RankingScreen;
