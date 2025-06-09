import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { FiInfo } from "react-icons/fi";

const RankingCard = ({ word, index }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <Draggable draggableId={word.text} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white rounded-xl p-4 mb-3 border flex items-start justify-between text-sm shadow"
        >
          <div className="flex items-start gap-2">
            <span className="text-gray-400 mt-1">☰</span>
            <div>
              {/* <p className="font-semibold">{index + 1}. {word.text}</p> */}
              <p className="font-semibold">{word.text}</p>
              {showInfo && (
                <p className="text-gray-500 text-xs mt-1">{word.info}</p>
              )}
            </div>
          </div>
          <button onClick={() => setShowInfo(!showInfo)} className="text-gray-400 mt-1">
            <FiInfo />
          </button>
        </div>
      )}
    </Draggable>
  );
};

export default RankingCard;
