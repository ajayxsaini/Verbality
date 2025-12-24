import React from "react";

const DialogPicture = ({ show, word }) => {
  // Do not render if dialog is hidden or no word selected
  if (!show || !word) return null;

  const letters = word
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("");

  return (
    <div className="absolute inset-0 flex justify-center items-center z-50 bg-black/30">
      <div className="bg-white border-2 border-gray-400 rounded-lg p-6 w-96">

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
