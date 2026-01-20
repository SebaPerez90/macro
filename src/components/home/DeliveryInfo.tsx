"use client";

import { GrLocation } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";

import { Button } from "../ui/button";

import Image from "next/image";

const DELIVERY_ZONES = [
  "Quilmes",
  "Berazategui",
  "Florencio Varela",
  "Ezpeleta",
  "San Francisco Solano",
];

const DeliveryInfo = () => {
  // Mensaje pre-armado para WhatsApp
  const whatsappMessage = encodeURIComponent(
    "¡Hola! Quisiera consultar si llegan a mi zona.",
  );
  const whatsappLink = `https://wa.me/5491127104627?text=${whatsappMessage}`; // reemplazá con tu número

  return (
    <section className="w-full flex flex-col items-center gap-5 text-center px-4 py-16">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-semibold tracking-tighter">
          Delivery inmediato
        </h2>
        <p className="mt-2 font-medium">Jueves a domingo · 20:00 a 23:30 hs</p>

        <Button size={"lg"} className="mt-7">
          Pedir ahora
        </Button>
      </div>

      {/* Zonas */}
      <div className="mt-12 flex flex-col items-center mb-14">
        <div className="flex items-center gap-1">
          <GrLocation size={22} className="relative -top-0.5" />
          <span className="font-bold text-xl tracking-tighter">
            Zonas donde entregamos
          </span>
        </div>

        <ul className="mt-5 flex flex-wrap justify-center gap-2">
          {DELIVERY_ZONES.map((zone) => (
            <li
              key={zone}
              className="rounded-md border border-blatracking-tighterck/40 px-4 py-1.5 text-xs text-slate-900 bg-[#F9F9F9]"
            >
              {zone}
            </li>
          ))}
        </ul>
      </div>

      {/* Rango de cobertura */}
      <div className="max-w-lg mx-auto text-center space-y-2">
        <p className="font-bold text-base">Hacemos envíos en un radio 3km.</p>
        <p className="text-[13px] text-stone-700">¿Estás fuera de ese rango?</p>

        {/* Botón WhatsApp */}
        <div className="flex justify-center mt-5">
          <a
            href={whatsappLink}
            target="_blank"
            className="inline-flex items-center gap-2 bg-green-500/90 hover:bg-green-500 text-white font-medium px-5 py-2.5 rounded-lg transition"
          >
            <FaWhatsapp size={22} />
            Consultar por mi zona
          </a>
        </div>
      </div>

      {/* Tarjeta de Retiro en local */}
      <div className="mx-auto rounded-xl mt-14 p-6 space-y-4 flex flex-col  items-start bg-[#F9F9F9] shadow-lg border border-black/5 w-100">
        <h3 className="font-bold text-lg flex items-center gap-2 tracking-tighter">
          <span>
            <GrLocation size={22} className="relative -top-0.5" />
          </span>{" "}
          Pasar a retirar.
        </h3>
        <div className="space-y-1 text-start  w-full">
          <p className="text-base font-semibold text-black">
            Calle 1 626 — Berazategui Oeste
          </p>
          <p className="text-slate-800 text-sm">Entre calles 106 y 107</p>
          <a
            className="mt-7 flex items-center gap-2 border-2 border-black/40 px-4 py-2 rounded-lg text-sm hover:bg-black/5 transition w-full justify-center font-bold tracking-tighter"
            href="https://www.google.com/maps/place/C.+1+626,+B1884+Berazategui+Oeste,+Provincia+de+Buenos+Aires/"
            target="_blank"
          >
            <Image
              src="/svg/google-maps.svg"
              alt="Google Maps"
              width={20}
              height={20}
            />
            Abrir en Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default DeliveryInfo;
