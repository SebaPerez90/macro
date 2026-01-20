"use client";

import { HERO_BENEFITS } from "@/src/constants/heroBenefits";
import { motion } from "framer-motion";
import Image from "next/image";

const Benefits = () => {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-14 w-full px-6 sm:px-10">
        <h2 className="text-3xl font-semibold tracking-tighter">Beneficios</h2>

        <motion.div className="flex justify-center  flex-row flex-wrap lg:flex-nowraap lg:falex-col gap-8">
          {HERO_BENEFITS.map((data, index) => (
            <motion.div
              key={index}
              transition={{
                duration: 0.3,
                delay: index * 0.2,
              }}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col grow gap-3 px-5 py-9 bg-black/90 rounded-xl w-full sm:w-[25em] shadow-lg"
            >
              <header className="flex items-center gap-2">
                <Image
                  src={data.icon}
                  alt={data.title}
                  width={30}
                  height={30}
                />
                <h3 className="text-lg text-white">{data.title}</h3>
              </header>

              <p className="text-slate-300 text-sm font-light">
                {data.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
