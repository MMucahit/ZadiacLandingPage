"use client";

// React
import React, { useRef } from "react";

// Framer Animation
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

// Aceternity UI
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

// Assests
import starsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";

export const Zodiacs = () => {
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
      className="h-screen rounded-xl overflow-hidden relative"
      style={{
        backgroundImage: `url(${starsBg.src})`,
        backgroundPositionY,
      }}
    >
      {/* {Background Image} */}
      <div
        className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]"
        style={{ backgroundImage: `url(${gridLines.src})` }}
      ></div>
      {/* {Title} */}
      <h1 className="text-4xl md:text-6xl md:leading-none font-semibold tracking-tighter bg-white bg-title-radial-gradient text-transparent bg-clip-text text-center pb-8">
        Zodiac Signs
      </h1>
      <div className="flex items-center justify-center h-[80%]">
        {/* {Third Ring} */}
        <motion.div
          animate={{ rotate: "-1turn" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute h-[544px] w-[544px] md:h-[744px] md:w-[744px] rounded-full border border-white/50"
        >
          {/* {Third Element} */}
          <div
            className="md-third-ring-transform md:lg-third-ring-transform absolute w-[300px] h-[300px] rounded-full flex items-center justify-center translate"
            style={{
              top: "50%",
              left: "50%",
            }}
          >
            <Card title="İnovasyon Aslanı" icon={<AceternityIcon />}>
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-sky-600"
                colors={[[125, 211, 252]]}
              />
            </Card>
          </div>
          {/* {Sixth Element} */}
          <div
            className="md-sixth-ring-transform md:lg-sixth-ring-transform absolute w-[300px] h-[300px] rounded-full flex items-center justify-center"
            style={{
              top: "50%",
              left: "50%",
            }}
          >
            <Card title="Sosyal Cevher" icon={<AceternityIcon />}>
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-emerald-900"
              />
            </Card>
          </div>
        </motion.div>
        {/* {Second Ring} */}
        <motion.div
          animate={{ rotate: "-1turn" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute h-[344px] w-[344px] md:h-[544px] md:w-[544px] rounded-full border border-white/50"
        >
          {/* {Second Element} */}
          <div
            className="md-second-ring-transform md:lg-second-ring-transform absolute w-[300px] h-[300px] rounded-full flex items-center justify-center"
            style={{
              top: "50%",
              left: "50%",
            }}
          >
            <Card title="Roketatar" icon={<AceternityIcon />}>
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-black"
                colors={[
                  [236, 72, 153],
                  [232, 121, 249],
                ]}
                dotSize={2}
              />
            </Card>
          </div>
          {/* {Fifth Element} */}
          <div
            className="md-fifth-ring-transform md:lg-fifth-ring-transform absolute w-[300px] h-[300px] rounded-full flex items-center justify-center"
            style={{
              top: "50%",
              left: "50%",
            }}
          >
            <Card title="Kararlı Kaplan" icon={<AceternityIcon />}>
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-black"
                colors={[
                  [236, 72, 153],
                  [232, 121, 249],
                ]}
              />
            </Card>
          </div>
        </motion.div>

        {/* {First Ring} */}
        <motion.div
          animate={{ rotate: "1turn" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute border border-white/50 h-[144px] w-[144px] md:w-[344px] md:h-[344px] rounded-full shadow-lg"
        >
          {/* {First Element} */}
          <div
            className="md-first-ring-transform md:lg-first-ring-transform absolute w-[300px] h-[300px] rounded-full flex items-center justify-center"
            style={{
              top: "50%",
              left: "50%",
            }}
          >
            <Card title="Vizyoner Yıldız" icon={<AceternityIcon />}>
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-emerald-900"
              />
            </Card>
          </div>
          {/* {Forth Element} */}
          <div
            className="md-forth-ring-transform md:lg-forth-ring-transform absolute w-[300px] h-[300px] rounded-full flex items-center justify-center"
            style={{
              top: "50%",
              left: "50%",
            }}
          >
            <Card title="Motivasyon İncisi" icon={<AceternityIcon />}>
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-sky-600"
                colors={[[125, 211, 252]]}
              />
            </Card>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card flex items-center justify-center max-w-sm mx-auto p-4 h-[5rem] w-[5rem] md:h-[10rem] md:w-[10rem] relative" // border border-white/[0.2]
    >
      {/* <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" /> */}

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="overflow-hidden rounded-full h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="cursor-default text-white lg:text-3xl text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <div className="absolute h-5 w-5 md:h-10 md:w-10 bg-white rounded-full bg-planet-second-radial-gradient"></div>
    // <svg
    //   width="66"
    //   height="65"
    //   viewBox="0 0 66 65"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className="h-10 w-10 text-white group-hover/canvas-card:text-white"
    // >
    //   <path
    //     d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
    //     stroke="currentColor"
    //     strokeWidth="15"
    //     strokeMiterlimit="3.86874"
    //     strokeLinecap="round"
    //     style={{ mixBlendMode: "darken" }}
    //   />
    // </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
