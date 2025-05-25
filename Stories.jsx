import React, { useState, useEffect, useRef } from "react";
import "../styles/Stories.css";

const storyImages = [
  "https://images.unsplash.com/photo-1745681619881-975e836e432c?q=80&w=2071&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1745990652119-f13cced69b7c?q=80&w=2071&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1745933229147-68202b50274b?q=80&w=2070&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_photo-1747748530197-d9eab242dc0f?q=80&w=1974&auto=format&fit=crop",
];

const Stories = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [progressArray, setProgressArray] = useState([]);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next"); // "next" or "prev"
  const intervalRef = useRef(null);

  const openStory = (index) => {
    setActiveIndex(index);
    setProgressArray(Array(storyImages.length).fill(0));
  };

  const closeStory = () => {
    setActiveIndex(null);
    clearInterval(intervalRef.current);
  };

  const goToNextStory = () => {
    if (activeIndex < storyImages.length - 1) {
      setDirection("next");
      setAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => prev + 1);
        setAnimating(false);
      }, 300); // duration of slide animation
    } else {
      clearInterval(intervalRef.current);
      closeStory();
    }
  };

  const goToPreviousStory = () => {
    if (activeIndex > 0) {
      setDirection("prev");
      setAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => prev - 1);
        setAnimating(false);
      }, 300);
    }
  };

  const handleClick = (e) => {
    const screenWidth = window.innerWidth;
    const clickX = e.clientX;
    if (clickX < screenWidth / 2) {
      goToPreviousStory();
    } else {
      goToNextStory();
    }
  };

  useEffect(() => {
    if (activeIndex === null) return;

    intervalRef.current = setInterval(() => {
      setProgressArray((prev) => {
        const updated = [...prev];
        if (updated[activeIndex] < 100) {
          updated[activeIndex] += 2; // increase progress
        }
        return updated;
      });
    }, 100);

    return () => clearInterval(intervalRef.current);
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;
    if (progressArray[activeIndex] >= 100) {
      goToNextStory();
    }
  }, [progressArray, activeIndex]);

  return (
    <>
      <div className="stories">
        {storyImages.map((url, index) => (
          <div className="story" key={index} onClick={() => openStory(index)}>
            <img src={url} alt={`Story ${index + 1}`} className="story-img" />
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="story-modal" onClick={handleClick}>
          <div className="story-progress-bar-container">
            {storyImages.map((_, index) => (
              <div className="story-progress-segment" key={index}>
                <div
                  className="story-progress-bar"
                  style={{
                    width:
                      index < activeIndex
                        ? "100%"
                        : index === activeIndex
                        ? `${progressArray[index]}%`
                        : "0%",
                  }}
                ></div>
              </div>
            ))}
          </div>

          <div
            className={`story-modal-content ${
              animating ? `slide-${direction}` : "slide-center"
            }`}
            key={activeIndex} // key triggers re-render for animation
          >
            <img
              src={storyImages[activeIndex]}
              alt={`Story ${activeIndex}`}
              draggable={false}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Stories;
