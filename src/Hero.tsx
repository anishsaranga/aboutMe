import myImage from "@/assets/me.jpeg";
import { useState, useEffect } from "react";
import { TypingAnimation } from "@/components/magicui/typing-animation";

function Hero() {
  return (
    <div className="relative sm:h-[350px] md:h-[450px] lg:h-[500px] w-screen space-y-5">
      <div className="flex items-center justify-center h-full w-full p-5">
        <div className="flex w-1/2 h-full">
          {/* Image */}
          <img
            src={myImage}
            alt="Me"
            className="w-1/3 h-full object-contain rounded-lg shadow-lg"
          />

          {/* Text section */}
          <div className="w-2/3 flex flex-col items-center justify-center text-white space-y-3 p-5">
            <h2 className="text-4xl md:text-6xl font-bold">Hello, I am</h2>
            <TypingAnimationWords
              words={[
                "Anish Kumar Saranga",
                "an engineer",
                "a software developer",
                "an AI enthusiast!",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function TypingAnimationWords({ words }: { words: string[] }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  // interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <TypingAnimation className="text-6xl font-bold text-white" startOnView>
      {words[currentWordIndex]}
    </TypingAnimation>
  );
}

export default Hero;
