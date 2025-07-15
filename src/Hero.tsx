import myImage from "@/assets/me.jpeg";

function Hero() {
  return (
    <div className="relative sm:h-[350px] md:h-[450px] lg:h-[500px] w-full space-y-5">
      {/* set image , just adjust the aspect ratio */}
      <div className="flex items-center justify-center h-full">
        <img
          src={myImage}
          alt="Me"
          className="h-full w-auto max-w-full object-cover rounded-lg shadow-lg space-y-5"
        />
      </div>
    </div>
  );
}

export default Hero;
