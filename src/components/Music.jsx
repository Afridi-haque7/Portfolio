import React, { useState, useEffect, useRef } from "react";
import { play, pause } from "../assets/index.js";
const BackgroundMusic = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playAudio = async () => {
    try {
      await audio.play();
      setIsPlaying(true); // Set to true if autoplay succeeds
    } catch (error) {
      console.warn("Autoplay failed. User interaction needed.");
    }
  };


  useEffect(() => {
    // Attempt to play when component mounts
    playAudio();

    // Add global interaction listeners
    const handleUserInteraction = () => {
      if (!isPlaying) {
        playAudio();
      }
    };

    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("keydown", handleUserInteraction);

    return () => {
      // Clean up listeners on unmount
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} src={src} loop autoPlay hidden />
      <button
        className="fixed top-[80px] left-[20px] z-50 
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
        p-2 rounded-xl hover:scale-110 transition-all duration-300 ease-in-out"
        onClick={togglePlay}
      >
        {isPlaying ? (
          <img src={play} alt="play" className="w-6 h-6" />
        ) : (
          <img src={pause} alt="pause" className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default BackgroundMusic;
