import { HERO_BULLETS } from "@/src/constants/heroBullets";
import { FaCheck } from "react-icons/fa6";

import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section
      id="hero-section"
      className="w-full flex flex-col mt-10 sm:mt-0 h-dvh justify-center"
    >
      <div className="flex flex-col max-w-180 mx-auto gap-3 px-4">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter text-black max-w-200">
          Alimentación real para tu cuerpo con macronutrientes exactos
        </h1>

        <p className="text-base sm:text-lg text-slate-700 text-balance font-medium">
          Nutrición funcional para gente que entrena. Comidas listas con
          macronutrientes exactos para volumen, definición o mantenimiento.
          Macros reales, no estimados.
        </p>

        {/* CTA´s */}
        <div className="flex gap-5 items-center mt-8 flex-wrap">
          <Button size="lg">Ver menú</Button>
          <Button size="lg" variant="outline">
            Cómo funciona
          </Button>
        </div>
      </div>

      {/* Bullets */}
      <ul className="mt-20 flex items-center gap-y-4 gap-x-8 text-sm sm:text-base text-slate-800 max-w-300 mx-auto">
        {HERO_BULLETS.map((item: string) => (
          <li
            key={item}
            className="flex items-center gap-2 basis-full sm:basis-[48%] lg:basis-[25%] whitespace-nowrap "
          >
            <FaCheck className="shrink-0 text-green-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Hero;
