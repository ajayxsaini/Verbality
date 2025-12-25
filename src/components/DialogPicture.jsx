import React from "react";

const DialogPicture = ({ show, word, setShow }) => {
  // Do not render if dialog is hidden or no word selected
  if (!show || !word) return null;

  const letters = word
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("");

  return (
    // 🔹 Overlay (clicking here closes dialog)
    <div
      className="absolute inset-0 z-50 flex justify-center items-center bg-black/30"
      onClick={() => setShow(false)}
    >
      {/* 🔹 Dialog box (clicking here does NOT close) */}
      <div
        className="bg-white border-2 border-gray-400 rounded-lg p-6 w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-bold mb-4 text-center">
          Word: {word}
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {letters.map((letter, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="font-semibold mb-1">
                {letter.toUpperCase()}
              </span>

              <img
                src={`/images/${letter}.png`}
                alt={letter}
                className="w-16 h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

};

export default DialogPicture;
