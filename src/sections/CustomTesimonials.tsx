  "use client";

// Assests
import starsBg from "@/assets/stars.png";

import React, { useRef } from "react";

// Framer Animation
import { motion, useScroll, useTransform } from "framer-motion";


const testimonials = [
  {
    text: "Sürekli yenilik ve yaratıcılık arayan girişimcilerdir. İnovatif yöntemleri işinize adapte ederken, müşteri ihtiyaçlarını karşılayıp karşılamadığını ve işinizi kolaylaştırıp kolaylaştırmadığını sorgulamalısınız. Düşün, tasarla, yönet: İnovasyonun işinize katkısını ve kimin için yararlı olduğunu değerlendirin.",
    name: "İnovasyon Aslanı",
  },
  {
    text: "İletişim Cevheri, yeni insanlarla tanışmayı ve iletişim kurmayı seven girişimcileri ifade eder. Her gün yeni insanlarla tanışıp onlara değer katmak, başarılı bir bölge uzmanı olmalarına yardımcı olur. İyi bir pazarlama planı hazırlayıp uygulayarak işlerini geniş bir kitleye tanıtmaları önemlidir.",
    name: "Sosyal Cevher",
  },
  {
    text: "Risk almayı seven ve fırsatları cesurca değerlendiren girişimcileri ifade eder. RE/MAX’te ödüllerde sınır yok, ödül alırken ne giyeceğini düşün. Riskleri yönetme ve krizleri fırsata çevirme yetenekleriyle tanınan bu girişimciler, kendilerini sürekli geliştirerek başarıya ulaşır.",
    name: "Roketatar",
  },
  {
    text: "İstikrarlı ve kararlı girişimcileri temsil eder. Hedeflerine ulaşmak için sabırlı ve kararlıdırlar, engellerle karşılaştıklarında pes etmezler. Bir portföy veya bölgeyi hedeflediklerinde, kararlılıkla devam ederken diğer işlerini aksatmamak önemlidir.",
    name: "Kararlı Kaplan",
  },
  {
    text: "Büyük hayalleri ve ileriye dönük vizyonları olan girişimcileri temsil eder. Yenilikçi düşünürler ve cesur hedefler belirlerler; iş planına sadık kalarak bu hedeflere ulaşmak için çalışırlar. Planınıza bağlı kalmak, büyük hayallerinizi gerçekleştirmek için kritik öneme sahiptir.",
    name: "Vizyoner Yıldız",
  },
  {
    text: "İçsel motivasyonu yüksek ve enerjik girişimcileri temsil eder. Hedeflerine ulaşmak için tutkulu ve kararlıdırlar, empati yetenekleri sayesinde başkalarına ilham verirler. Ancak, empatiyi sempatiyle karıştırmamak ve itirazları yönetirken dikkatli olmak önemlidir.",
    name: "Motivasyon İncisi",
  },
];

export const Testimonials = () => {
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
      className="py-20 md:py-24 h-screen"
      style={{ backgroundImage: `url(${starsBg.src})`, backgroundPositionY }}
    >
      <div className="container">
        <h2 className="text-6xl md:text-8xl md:leading-none font-semibold tracking-tighter bg-white bg-title-radial-gradient text-transparent bg-clip-text text-center">
          Beyond Expectation
        </h2>
        <p className="text-white/70 text-lg text-center mt-5 tracking-tight">
          Our Revolutionary AI Recruting tools.
        </p>
        <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            initial={{ translateX: "-50%" }}
            animate={{ translateX: "0" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            className="flex gap-5 pr-5 flex-none"
          >
            {testimonials.map((tesimonial) => (
              <div
                key={tesimonial.name}
                className="border border-white/50 text-center rounded-xl p-6 bg-[linear-gradient(to_bottom_left,rgb(140,69,255,0.3),black)] max-w-xs md:max-w-md flex-none"
              >
                <div className="text-lg tracking-tight md:text-2xl bg-white bg-title-radial-gradient text-transparent bg-clip-text text-center">
                  {tesimonial.text}
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <div className="">
                    <div>{tesimonial.name}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
           
};

  