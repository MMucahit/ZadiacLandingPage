"use client";

import React from "react";


// Aceternity UI
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    name:"",
    quote: "Sürekli yenilik ve yaratıcılık arayan girişimcilerdir. İnovatif yöntemleri işinize adapte ederken, müşteri ihtiyaçlarını karşılayıp karşılamadığını ve işinizi kolaylaştırıp kolaylaştırmadığını sorgulamalısınız. Düşün, tasarla, yönet: İnovasyonun işinize katkısını ve kimin için yararlı olduğunu değerlendirin.",
    title: "İnovasyon Aslanı",
  },
  {
    name:"",
    quote: "İletişim Cevheri, yeni insanlarla tanışmayı ve iletişim kurmayı seven girişimcileri ifade eder. Her gün yeni insanlarla tanışıp onlara değer katmak, başarılı bir bölge uzmanı olmalarına yardımcı olur. İyi bir pazarlama planı hazırlayıp uygulayarak işlerini geniş bir kitleye tanıtmaları önemlidir.",
    title: "Sosyal Cevher",
  },
  {
    name:"",
    quote: "Risk almayı seven ve fırsatları cesurca değerlendiren girişimcileri ifade eder. RE/MAX’te ödüllerde sınır yok, ödül alırken ne giyeceğini düşün. Riskleri yönetme ve krizleri fırsata çevirme yetenekleriyle tanınan bu girişimciler, kendilerini sürekli geliştirerek başarıya ulaşır.",
    title: "Roketatar",
  },
  {
    name:"",
    quote: "İstikrarlı ve kararlı girişimcileri temsil eder. Hedeflerine ulaşmak için sabırlı ve kararlıdırlar, engellerle karşılaştıklarında pes etmezler. Bir portföy veya bölgeyi hedeflediklerinde, kararlılıkla devam ederken diğer işlerini aksatmamak önemlidir.",
    title: "Kararlı Kaplan",
  },
  {
    name:"",
    quote: "Büyük hayalleri ve ileriye dönük vizyonları olan girişimcileri temsil eder. Yenilikçi düşünürler ve cesur hedefler belirlerler; iş planına sadık kalarak bu hedeflere ulaşmak için çalışırlar. Planınıza bağlı kalmak, büyük hayallerinizi gerçekleştirmek için kritik öneme sahiptir.",
    title: "Vizyoner Yıldız",
  },
  {
    name:"",
    quote: "İçsel motivasyonu yüksek ve enerjik girişimcileri temsil eder. Hedeflerine ulaşmak için tutkulu ve kararlıdırlar, empati yetenekleri sayesinde başkalarına ilham verirler. Ancak, empatiyi sempatiyle karıştırmamak ve itirazları yönetirken dikkatli olmak önemlidir.",
    title: "Motivasyon İncisi",
  },
];

export const Testimonials = () => {
  return (<section
        className="py-20 md:py-24 h-screen"
      >
        <div className="container">
          <h2 className="text-6xl md:text-8xl md:leading-none font-semibold tracking-tighter bg-white bg-title-radial-gradient text-transparent bg-clip-text text-center">
            Beyond Expectation
          </h2>
          <p className="text-white/70 text-lg text-center mt-5 tracking-tight">
            Our Revolutionary AI Recruting tools.
          </p>
          <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div
              className="flex gap-5 pr-5 flex-none"
            >
              <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
            </div>
          </div>
        </div>
      </section>)
};
