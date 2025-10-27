import React, { useState } from "react";
import ReactPlayer from "react-player";
import video from "../../assets/video/homeBanner.mp4";
import bannerthumbnail from "../../assets/video/bannerthumbnail.webp";
import { Link } from "react-router-dom";
const HomepageBanner = () => {
  const [isVideoReady, setIsVideoReady] = useState(false);

  return (
    <div className="relative min-h-screen flex justify-center items-center">
      {/* Background overlay */}

      <div className="absolute top-0 h-screen w-full  bg-black">
        <ReactPlayer
          url={video}
          loop={true}
          playsinline
          playing={true}
          width="100%"
          height="100vh"
          muted
          className=" object-cover"
          onReady={() => setIsVideoReady(true)}
          onError={() => setIsVideoReady(false)}
          config={{
            file: {
              attributes: {
                style: {
                  objectFit: "cover",
                  width: "100vw",
                  height: "100vh",
                },
              },
            },
          }}
        />
      </div>
      {!isVideoReady && (
        <img
          src={bannerthumbnail}
          alt="AI-powered business automation dashboard showcasing modern technology solutions"
          className="absolute top-0 left-0 w-full h-screen object-cover "
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-black/30" />
      {/* Hero content */}
      <div className="relative flex flex-col items-center  wrapper">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            AI Solutions for Modern Businesses
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl">
            Discover the power of AI solutions for business to revolutionize
            your operations, enhance decision-making, and drive innovation. At
            Aithrown, we deliver cutting-edge AI automation tools and predictive
            analytics designed to propel your business forward. Experience the
            future of technology today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300">
              <Link to={"/contact-us"}>
                Discover our AI solutions
              </Link>
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-blue-600 transition-colors duration-300">
              <Link to={"/services"}>Explore our AI services</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageBanner;
