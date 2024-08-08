"use client";

// React
import React from "react";

// Framer Animation
import { AnimatePresence, motion } from "framer-motion";

// Aceternity UI
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

// Assests
import starsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";

export const Zodiacs = () => {
  return (
    <section
      className="h-screen rounded-xl overflow-hidden relative"
      style={{ backgroundImage: `url(${starsBg.src})` }}
    >
      {/* {Background Image} */}
      <div
        className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]"
        style={{ backgroundImage: `url(${gridLines.src})` }}
      ></div>
      {/* {Title} */}
      <h1 className="text-6xl md:text-8xl md:leading-none font-semibold tracking-tighter bg-white bg-title-radial-gradient text-transparent bg-clip-text text-center pb-8">
        Zodiac Signs
      </h1>
      <div className="flex items-center justify-center h-[80%]">
        {/* {Third Ring} */}
        <motion.div
          animate={{ rotate: "-1turn" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute h-[744px] w-[744px] rounded-full border border-white/50"
        >
          {/* {Third Element} */}
          <div
            className="absolute w-[300px] h-[300px] rounded-full flex items-center justify-center"
            style={{
              top: "50%",
              left: "50%",
              transform:
                "translate(-50%, -50%) rotate(120deg) translate(372px) rotate(-120deg)",
            }}
          >
            <Card
              title="İnovasyon Aslanı"
              description="Sürekli yenilik ve yaratıcılık arayan girişimcilerdir. İnovatif yöntemleri işinize adapte ederken, müşteri ihtiyaçlarını karşılayıp karşılamadığını ve işinizi kolaylaştırıp kolaylaştırmadığını sorgulamalısınız. Düşün, tasarla, yönet: İnovasyonun işinize katkısını ve kimin için yararlı olduğunu değerlendirin."
              icon={<AceternityIcon />}
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-sky-600"
                colors={[[125, 211, 252]]}
              />
            </Card>
          </div>
          {/* {Sixth Element} */}
          <div
            className="absolute w-[300px] h-[300px] rounded-full flex items-center justify-center"
            style={{
              top: "50%",
              left: "50%",
              transform:
                "translate(-50%, -50%) rotate(300deg) translate(372px) rotate(-300deg)",
            }}
          >
            <Card
              title="Sosyal Cevher"
              description="İletişim Cevheri, yeni insanlarla tanışmayı ve iletişim kurmayı seven girişimcileri ifade eder. Her gün yeni insanlarla tanışıp onlara değer katmak, başarılı bir bölge uzmanı olmalarına yardımcı olur. İyi bir pazarlama planı hazırlayıp uygulayarak işlerini geniş bir kitleye tanıtmaları önemlidir."
              icon={<AceternityIcon />}
            >
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
          className="absolute h-[544px] w-[544px] rounded-full border border-white/50"
        >
          {/* {Second Element} */}
          <div
            className="absolute w-[300px] h-[300px] rounded-full flex items-center justify-center"
            style={{
              top: "50%",
              left: "50%",
              transform:
                "translate(-50%, -50%) rotate(60deg) translate(272px) rotate(-60deg)",
            }}
          >
            <Card
              title="Roketatar"
              description="Risk almayı seven ve fırsatları cesurca değerlendiren girişimcileri ifade eder. RE/MAX’te ödüllerde sınır yok, ödül alırken ne giyeceğini düşün. Riskleri yönetme ve krizleri fırsata çevirme yetenekleriyle tanınan bu girişimciler, kendilerini sürekli geliştirerek başarıya ulaşır."
              icon={<AceternityIcon />}
            >
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
            className="absolute w-[300px] h-[300px] rounded-full flex items-center justify-center"
            style={{
              top: "50%",
              left: "50%",
              transform:
                "translate(-50%, -50%) rotate(240deg) translate(272px) rotate(-240deg)",
            }}
          >
            <Card
              title="Kararlı Kaplan"
              description="İstikrarlı ve kararlı girişimcileri temsil eder. Hedeflerine ulaşmak için sabırlı ve kararlıdırlar, engellerle karşılaştıklarında pes etmezler. Bir portföy veya bölgeyi hedeflediklerinde, kararlılıkla devam ederken diğer işlerini aksatmamak önemlidir."
              icon={<AceternityIcon />}
            >
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
          className="absolute border border-white/50 w-[344px] h-[344px] rounded-full shadow-lg"
        >
          {/* {First Element} */}
          <div
            className="absolute w-[300px] h-[300px] rounded-full flex items-center justify-center"
            style={{
              top: "50%",
              left: "50%",
              transform:
                "translate(-50%, -50%) rotate(0deg) translate(172px) rotate(0deg)",
            }}
          >
            <Card
              title="Vizyoner Yıldız"
              description="Büyük hayalleri ve ileriye dönük vizyonları olan girişimcileri temsil eder. Yenilikçi düşünürler ve cesur hedefler belirlerler; iş planına sadık kalarak bu hedeflere ulaşmak için çalışırlar. Planınıza bağlı kalmak, büyük hayallerinizi gerçekleştirmek için kritik öneme sahiptir."
              icon={<AceternityIcon />}
            >
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-emerald-900"
              />
            </Card>
          </div>
          {/* {Forth Element} */}
          <div
            className="absolute w-[300px] h-[300px] rounded-full flex items-center justify-center"
            style={{
              top: "50%",
              left: "50%",
              transform:
                "translate(-50%, -50%) rotate(180deg) translate(172px) rotate(-180deg)",
            }}
          >
            <Card
              title="Motivasyon İncisi"
              description="İçsel motivasyonu yüksek ve enerjik girişimcileri temsil eder. Hedeflerine ulaşmak için tutkulu ve kararlıdırlar, empati yetenekleri sayesinde başkalarına ilham verirler. Ancak, empatiyi sempatiyle karıştırmamak ve itirazları yönetirken dikkatli olmak önemlidir."
              icon={<AceternityIcon />}
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-sky-600"
                colors={[[125, 211, 252]]}
              />
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({
  title,
  description,
  icon,
  children,
}: {
  title: string;
  description: string;
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
        <h2 className="hidden text-sm text-center text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {description}
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
