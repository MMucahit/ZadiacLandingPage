"use client";

// Components
import { Button } from "@/components/Button";

// Assests
import starsBg from "@/assets/stars.png";

// Framer Animation
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

// React
import React, { useRef } from "react";

export const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );
  return (
    <motion.section
      ref={sectionRef}
      animate={{ backgroundPositionX: starsBg.width }}
      transition={{ repeat: Infinity, ease: "linear", duration: 120 }}
      className="h-screen flex relative items-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_75%,transparent)]"
      style={{ backgroundImage: `url(${starsBg.src})`, backgroundPositionY }}
    >
      {/* {Planet} */}
      {/* {Second Radial Planet} */}
      <div className="absolute inset-0 bg-planet-second-radial-gradient"></div>
      <div className="absolute h-64 w-64 md:h-96 md:w-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-planet-radial-gradient shadow-planet"></div>
      {/* {Rings} */}
      {/* {First Rings} */}
      <motion.div
        style={{ translateX: "-50%", translateY: "-50%" }}
        animate={{ rotate: "1turn" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border border-white rounded-full opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute h-2 w-2 bg-white rounded-full left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 bg-white rounded-full left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute inline-flex justify-center items-center h-5 w-5 border border-white rounded-full left-full top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
      {/* {Second Rings} */}
      <div className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      {/* {Third Rings} */}
      <motion.div
        style={{ translateX: "-50%", translateY: "-50%" }}
        animate={{ rotate: "-1turn" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute h-2 w-2 bg-white rounded-full left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 bg-white rounded-full left-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>

      <div className="relative container mt-24 md:mt-0">
        {/* {Title} */}
        <h1 className="text-6xl md:text-8xl md:leading-none font-semibold tracking-tighter bg-white bg-title-radial-gradient text-transparent bg-clip-text text-center">
          Recruting AI
        </h1>
        {/* {Text} */}
        <p className="text-lg text-white/70 mt-5 text-center">
          Discover your real estate zodiac sign with Recruiting AI!
        </p>
        {/* {Button} */}
        <div className="flex justify-center mt-5">
          <Button>Let's Learn! Real Estate Zodiac Sign</Button>
        </div>
      </div>
    </motion.section>
  );
};
