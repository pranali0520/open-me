import React from "react";

import { useNavigate } from "react-router-dom";

const YesButton = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-100 via-pink-200 to-red-300 px-4">
      <div className="bg-white/70 backdrop-blur-md shadow-2xl rounded-3xl p-8 max-w-md w-full text-center border border-rose-200">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-rose-600 mb-6">
          💖 You Made My Heart Happy! 💖
        </h2>

        <p className="text-rose-500 text-sm sm:text-xl mb-2">
          If you ever tried to press “No,” it wouldn’t work anyway — because
          you’re already mine.
        </p>
        <p className="text-rose-500 text-sm sm:text-xl mb-2">
          So now… chal, chocolate gift karde 🎁😄
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-rose-500 hover:bg-rose-600 active:bg-rose-700 text-white px-6 py-3 rounded-full transition duration-300 shadow-md transform hover:scale-110 hover:animate-pulse mt-2"
        >
          Back to My Heart 💌
        </button>
      </div>
    </div>
  );
};

export default YesButton;
