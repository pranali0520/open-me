import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const yesRef = useRef(null);

  const [position, setPosition] = useState({ top: "50%", left: "50%" });
  const [move, setMove] = useState(false);

  const moveButton = () => {
    setMove(true);

    if (!cardRef.current || !yesRef.current) return;

    const cardRect = cardRef.current.getBoundingClientRect();
    const yesRect = yesRef.current.getBoundingClientRect();

    const padding = 10; // prevent NO button from touching edges
    const buttonWidth = 80; // approx width of NO button
    const buttonHeight = 40; // approx height of NO button

    let newLeft, newTop;
    let safe = false;
    let attempts = 0;

    while (!safe && attempts < 50) {
      attempts++;
      // Random position inside card
      newLeft =
        Math.random() * (cardRect.width - buttonWidth - padding * 2) + padding;
      newTop =
        Math.random() * (cardRect.height - buttonHeight - padding * 2) +
        padding;

      // Check distance from YES button (avoid overlap)
      const yesX = yesRect.left - cardRect.left;
      const yesY = yesRect.top - cardRect.top;

      const overlapX = Math.abs(newLeft - yesX) < buttonWidth;
      const overlapY = Math.abs(newTop - yesY) < buttonHeight;

      if (!overlapX || !overlapY) {
        safe = true;
      }
    }

    setPosition({ top: `${newTop}px`, left: `${newLeft}px` });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 relative overflow-hidden px-4">
      <div
        ref={cardRef}
        className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-6 sm:p-8 w-full max-w-sm md:max-w-md lg:max-w-lg text-center border border-rose-200 z-10 relative"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-rose-600 mb-4">
          From Pallavi,
          <br /> Will You Be My Valentine? <br />
          💖
        </h1>

        <p className="text-rose-500 text-lg mb-6">
          In a world full of maybes, you are my always
        </p>

        {/* Buttons container */}
        <div className="flex justify-center gap-4 relative">
          {/* YES button */}
          <button
            ref={yesRef}
            onClick={() => navigate("/yes")}
            className="bg-rose-500 hover:bg-rose-600 active:bg-rose-700 text-white px-5 sm:px-6 py-2 rounded-full transition duration-300 shadow-md"
          >
            Yes ❤️
          </button>

          {/* NO button */}
          <button
            onMouseEnter={moveButton}
            onTouchStart={moveButton}
            style={
              move
                ? {
                    position: "absolute",
                    top: position.top,
                    left: position.left,
                    transform: "translate(0, 0)",
                  }
                : {}
            }
            className="bg-pink-200 text-rose-600 px-4 sm:px-6 py-2 rounded-full shadow-md transition-all duration-300 cursor-not-allowed text-sm sm:text-base"
          >
            No 💔
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
