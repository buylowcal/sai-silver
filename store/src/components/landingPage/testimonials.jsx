import { useEffect, useRef, useState } from "react";

const videoSources = [
  "/jewel/r1.mp4",
  "/jewel/r2.mp4"
];

const Carousel = () => {
  const carouselRef = useRef(null);
  const animationRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [playingIndex, setPlayingIndex] = useState(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let direction = 1;
    let position = 0;
    const speed = 1;

    const animate = () => {
      if (!carousel || isPaused) return;

      position += speed * direction;
      carousel.style.transform = `translateX(-${position}px)`;

      if (position >= carousel.scrollWidth / 2 || position <= 0) {
        direction *= -1;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationRef.current);
  }, [isPaused]);

  const handleMouseEnter = (index) => {
    setPlayingIndex(index);
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setPlayingIndex(null);
    setIsPaused(false);
  };

  return (
    <div className="flex flex-col items-center mt-10 leading-none">
      <h2 className="text-3xl font-serif text-center tracking-widest mb-8 uppercase">
        <span className="text-lg text-gray-600">Customer voices</span> <br />
        What our customers say
      </h2>
      <div className="relative w-full overflow-hidden">
        <div className="absolute w-3/5 h-full left-0 z-50 bg-gradient-to-r from-gray-50 to-transparent"></div>
        <div className="absolute w-3/5 h-full right-0 z-50 bg-gradient-to-l from-gray-50 to-transparent"></div>
        <div ref={carouselRef} className="flex items-center justify-center w-max">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className={`flex flex-col items-center  mx-6 my-10  rounded-lg shadow-lg w-64 relative transition-transform duration-300 ${playingIndex === index ? 'scale-125 shadow-xl' : 'scale-100'}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative w-full h-80">
                <video
                  className="w-full h-auto rounded-lg"
                  loop
                  // muted
                  // poster="/logo/poster.jpeg"
                  ref={(video) => {
                    if (video) {
                      if (playingIndex === index) {
                        video.play();
                      } else {
                        video.pause();
                        video.load();
                      }
                    }
                  }}
                >
                  <source src={videoSources[index % videoSources.length]} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {playingIndex !== index && (
                  <button
                    className="absolute inset-0 flex items-center justify-center text-center mt-auto bg-opacity-30  rounded-lg"
                    onClick={() => setPlayingIndex(index)}
                  >
                    <svg
                      className="h-14 w-14 text-white bg-gray-300 rounded-full bg-clip-padding backdrop-filter backdrop-blur-md text-center p-2 bg-opacity-10 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4.5 3.5v13l11-6.5-11-6.5z" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
