// Sections
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Zodiacs } from "@/sections/Zodiacs";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Testimonials />
      <Zodiacs />
    </>
  );
}
