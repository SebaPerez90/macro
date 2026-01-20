"use client";

import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import FakeUserCard from "../cards/FakeUserCard";
import { USER_TESTIMONIALS } from "@/src/constants/userTestimonials";

const Testimonials = () => {
  const updateSlidesFocus = (swiper: SwiperType) => {
    swiper.slides.forEach((slideEl: HTMLElement, index: number) => {
      slideEl.style.transition = "transform 0.35s ease, opacity 0.35s ease";

      if (index === swiper.activeIndex) {
        slideEl.style.transform = "scale(1) translateX(-10px)";
        slideEl.style.opacity = "1";
        slideEl.style.zIndex = "20";
      } else {
        const direction = index < swiper.activeIndex ? -1 : 1;

        slideEl.style.transform = `
          scale(0.7)
          translateX(${direction * 52}px)
        `;
        slideEl.style.opacity = "0.5";
        slideEl.style.zIndex = "1";
      }
    });
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <h2 className="text-3xl font-semibold tracking-tighter">
        Por qué elegir MACRO
      </h2>

      <div className="w-full py-16">
        <div className="mx-auto max-w-5xl px-4">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={3}
            centeredSlides
            initialSlide={1}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="custom-swiper h-[22em]"
            onSwiper={updateSlidesFocus}
            onSlideChange={updateSlidesFocus}
          >
            {USER_TESTIMONIALS.map((user, index) => (
              <SwiperSlide key={index} className="flex justify-center pt-5">
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

export default Testimonials;
