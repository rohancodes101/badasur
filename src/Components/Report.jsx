// import React, { useEffect, useState, useRef } from "react";
// import { Radar } from "react-chartjs-2";
// import { jsPDF } from "jspdf";
// import html2canvas from "html2canvas";
// import {
//   Chart as ChartJS,
//   RadialLinearScale,
//   PointElement,
//   LineElement,
//   Filler,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

// const quadrantMap = {
//   1: "Generator",
//   2: "Conceptualizer",
//   3: "Optimizer",
//   4: "Implementer",
// };

// const includedRows = [3, 4, 6, 7, 8, 9, 11, 12, 13, 15, 16, 18];

// const Report = () => {
//   const [scores, setScores] = useState({});
//   const graphRef = useRef(null);

//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem("answers") || "{}");
//     let final = { 1: 0, 2: 0, 3: 0, 4: 0 };

//     for (let key in stored) {
//       const qNum = parseInt(key);
//       if (!includedRows.includes(qNum)) continue;

//       const answer = stored[key];
//       for (let col in answer) {
//         final[col] += answer[col];
//       }
//     }

//     setScores(final);
//   }, []);

//   if (Object.keys(scores).length === 0) {
//     return <div className="text-center mt-10 text-red-500">No data found. Please complete the test first.</div>;
//   }

//   const percentages = Object.entries(scores)
//     .map(([col, val]) => ({
//       name: quadrantMap[col],
//       value: Math.round((val / 48) * 100),
//     }))
//     .sort((a, b) => b.value - a.value);

//   const dominant = percentages[0] || { name: "UNKNOWN", value: 0 };

//   const chartData = {
//     labels: ["Ideation", "Experiencing", "Evaluation", "Thinking"],
//     datasets: [
//       {
//         label: "Your Profile",
//         data: percentages.map((p) => p.value),
//         backgroundColor: "rgba(72, 187, 255, 0.4)",
//         borderColor: "#48BBFF",
//         borderWidth: 2,
//       },
//     ],
//   };

//   const download = async () => {
//     try {
//       const canvas = await html2canvas(graphRef.current, {
//         backgroundColor: "#ffffff", // ensure white bg
//         useCORS: true,
//       });
//       const img = canvas.toDataURL("image/png");
//       const pdf = new jsPDF();
//       pdf.addImage(img, "PNG", 10, 10, 180, 120);
//       pdf.save("basadur-report.pdf");
//     } catch (err) {
//       console.error("Error while generating the report:", err);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white px-4 py-8 font-mono flex flex-col items-center">
//       <div className="text-xs uppercase text-center mb-2">your BASADUR PROFILE</div>

//       {/* This wrapper uses inline styles to avoid Tailwind CSS issues */}
//       <div
//         ref={graphRef}
//         style={{
//           backgroundColor: "#000000",
//           borderRadius: "1rem",
//           padding: "1rem",
//           width: "100%",
//           maxWidth: "400px",
//         }}
//       >
//         <Radar
//           data={chartData}
//           options={{
//             scales: {
//               r: {
//                 min: 0,
//                 max: 100,
//                 ticks: { color: "#ffffff" },
//                 pointLabels: { color: "#ffffff" },
//                 grid: { color: "rgba(255,255,255,0.2)" },
//               },
//             },
//             plugins: {
//               legend: {
//                 labels: {
//                   color: "#ffffff",
//                 },
//               },
//             },
//           }}
//         />
//         <div style={{ color: "#ffffff", textAlign: "center", marginTop: "1rem" }}>
//           <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>{dominant.value}%</h2>
//           <p style={{ color: "#67e8f9", fontSize: "1.25rem", fontWeight: "bold" }}>
//             {dominant.name.toUpperCase()}
//           </p>
//           <ul style={{ marginTop: "1rem", fontSize: "0.75rem", color: "#ccc" }}>
//             {percentages.slice(1).map((q, i) => (
//               <li key={i}>
//                 {q.value}% {q.name.toUpperCase()}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Buttons */}
//       <button
//         onClick={download}
//         className="bg-cyan-300 text-black rounded-full px-6 py-3 font-semibold w-full max-w-sm mt-6 mb-4"
//       >
//         📄 Download report
//       </button>
//       <button
//         onClick={() => {
//           localStorage.removeItem("answers");
//           window.location.href = "/";
//         }}
//         className="bg-gray-100 text-black rounded-full px-6 py-3 font-semibold w-full max-w-sm"
//       >
//         🔁 Take test again
//       </button>
//     </div>
//   );
// };

// export default Report;







































import React, { useEffect, useState, useRef } from "react";
import { Radar } from "react-chartjs-2";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { saveAs } from 'file-saver';

import {
  Chart as ChartJS,
  RadialLinearScale, // Registering RadialLinearScale
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

// Registering the required components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const quadrantMap = {
  1: "Generator",
  2: "Conceptualizer",
  3: "Optimizer",
  4: "Implementer",
};

const includedRows = [3, 4, 6, 7, 8, 9, 11, 12, 13, 15, 16, 18];

const Report = () => {
  const [scores, setScores] = useState({});
  const graphRef = useRef(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("answers") || "{}");
    let final = { 1: 0, 2: 0, 3: 0, 4: 0 };

    for (let key in stored) {
      const qNum = parseInt(key);
      if (!includedRows.includes(qNum)) continue;

      const answer = stored[key];
      for (let col in answer) {
        final[col] += answer[col];
      }
    }

    setScores(final);
  }, []);

  if (Object.keys(scores).length === 0) {
    return <div className="text-center mt-10 text-red-500">No data found. Please complete the test first.</div>;
  }

  const percentages = Object.entries(scores)
    .map(([col, val]) => ({
      name: quadrantMap[col],
      value: Math.round((val / 48) * 100),
    }))
    .sort((a, b) => b.value - a.value);

  const dominant = percentages[0] || { name: "UNKNOWN", value: 0 };

  const chartData = {
    labels: ["Ideation", "Experiencing", "Evaluation", "Thinking"],
    datasets: [
      {
        label: "Your Profile",
        data: percentages.map((p) => p.value),
        backgroundColor: "rgba(72, 187, 255, 0.4)",
        borderColor: "#48BBFF",
        borderWidth: 2,
      },
    ],
  };

const download = async () => {
  try {
    const canvas = await html2canvas(graphRef.current, {
      backgroundColor: "#ffffff", // Ensure white bg
      useCORS: true,
    });
    const imgData = canvas.toDataURL("image/png");
    const blob = dataURLtoBlob(imgData); // Convert base64 image to Blob
    saveAs(blob, "basadur-report.png"); // Use saveAs to trigger download
  } catch (err) {
    console.error("Error while generating the report:", err);
  }
};

// Helper function to convert base64 to Blob
const dataURLtoBlob = (dataURL) => {
  const [header, base64Data] = dataURL.split(',');
  const mime = header.match(/:(.*?);/)[1];
  const binary = atob(base64Data);
  const len = binary.length;
  const array = new Uint8Array(len);
  
  for (let i = 0; i < len; i++) {
    array[i] = binary.charCodeAt(i);
  }

  return new Blob([array], { type: mime });
};


  return (
    <div className="min-h-screen bg-white px-4 py-8 font-mono flex flex-col items-center">
      <div className="text-xs uppercase text-center mb-2">your BASADUR PROFILE</div>

      <div
        ref={graphRef}
        style={{
          backgroundColor: "#000000",
          borderRadius: "1rem",
          padding: "1rem",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <Radar
          data={chartData}
          options={{
            scales: {
              r: {
                min: 0,
                max: 100,
                ticks: { color: "#ffffff" },
                pointLabels: { color: "#ffffff" },
                grid: { color: "rgba(255,255,255,0.2)" },
              },
            },
            plugins: {
              legend: {
                labels: {
                  color: "#ffffff",
                },
              },
            },
          }}
        />
        <div style={{ color: "#ffffff", textAlign: "center", marginTop: "1rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>{dominant.value}%</h2>
          <p style={{ color: "#67e8f9", fontSize: "1.25rem", fontWeight: "bold" }}>
            {dominant.name.toUpperCase()}
          </p>
          <ul style={{ marginTop: "1rem", fontSize: "0.75rem", color: "#ccc" }}>
            {percentages.slice(1).map((q, i) => (
              <li key={i}>
                {q.value}% {q.name.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        onClick={download}
        className=" cursor-pointer bg-cyan-300 text-black rounded-full px-6 py-3 font-semibold w-full max-w-sm mt-6 mb-4"
      >
        📄 Download report
      </button>
      <button
        onClick={() => {
          localStorage.removeItem("answers");
          window.location.href = "/";
        }}
        className="cursor-pointer bg-gray-100 text-black rounded-full px-6 py-3 font-semibold w-full max-w-sm"
      >
        🔁 Take test again
      </button>
    </div>
  );
};

export default Report;
