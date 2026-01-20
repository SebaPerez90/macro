"use client";

import { Autoplay, Pagination } from "swiper/modules";
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

      <div className="w-full py-16">
        <div className="mx-auto max-w-5xl px-4">
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={24}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              950: {
                slidesPerView: 2,
              },
            }}
            pagination={{ clickable: true }}
            className="h-[20em] custom-swiper"
          >
            {USER_TESTIMONIALS.map((user, index) => (
              <SwiperSlide key={index} className="flex justify-center">
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
      </div>
    </section>
  );
};

export default Testmonials;
