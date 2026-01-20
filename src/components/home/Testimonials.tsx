"use client";

import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import FakeUserCard from "../cards/FakeUserCard";
import { USER_TESTIMONIALS } from "@/src/constants/userTestimonials";

const Testmonials = () => {
  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center"
    >
      <h2 className="text-3xl font-semibold tracking-tighter mb-10">
        Por qué elegir MACRO
      </h2>

      <div className="w-full test">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            950: {
              slidesPerView: 2,
            },
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="h-[20em] custom-swiper"
        >
          {USER_TESTIMONIALS.map((user, index) => (
            <SwiperSlide key={index} className="custom-swiper">
              <FakeUserCard
                imageIndex={index}
                name={user.name}
                figureCaption={user.figureCaption}
                title={user.title}
                description={user.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testmonials;
