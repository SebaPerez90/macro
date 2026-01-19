const Hero = () => {
  return (
    <section
      id="hero-section"
      className="w-full flex flex-col mt-10 sm:mt-0 h-[120dvh] sm:h-dvh relative overflow-hidden max-[640px]:min-h-275 lg:overflow-visible"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center leading-tight tracking-tighter text-blackt mx-7 lg:mx-0 max-w-200">
        Alimentación real para tu cuerpo con macronutrientes exactos
      </h1>
      <p className="text-base  sm:text-lg text-red-500">
        Nutrición funcional para gente que entrena. Comidas listas con
        macronutrientes exactos para volumen, definición o mantenimiento. Macros
        reales, no estimados.
      </p>
    </section>
  );
};

export default Hero;
