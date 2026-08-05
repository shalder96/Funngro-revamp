import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import SectionHeading from "@/components/Common/SectionHeading/SectionHeading";

import "swiper/css";
import "swiper/css/pagination";

import StoryCard from "./StoryCard";
import { stories } from "@/data/homeData";
import { fadeRight } from "@/utils/motion";

export default function SuccessStories() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          {...fadeRight}
          className="text-center"
        >
          <SectionHeading
            badge="Success Stories"
            title="Real Students."
            highlight="Real Success."
            description="Hear inspiring stories from teenagers who transformed their skills into career opportunities."
          />
        </motion.div>

        <div className="mt-20">
          <Swiper
            spaceBetween={30}
            loop
            autoplay={{
              delay: 3500,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {stories.map((story) => (
              <SwiperSlide key={story.id}>
                <StoryCard story={story} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
