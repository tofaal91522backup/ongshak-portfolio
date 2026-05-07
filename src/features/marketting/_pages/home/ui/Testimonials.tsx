// app/components/Testimonials.tsx
"use client";

import Autoplay from "embla-carousel-autoplay";
import { Quote, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
  {
    id: 1,
    clientName: "Mahin Abrar Rahman",
    clientReview:
      "I had a wonderful time with Ongshak. They were collaborative, understanding and professional. The website that they made for me was fantastic and served my purpose perfectly.",
    clientReview2:
      "Their team listened carefully, understood the goal, and delivered a polished solution that matched my expectations.",
    clientDesignation: "Director, Psycure Limited",
    clientImage: "/images/mahin.jpg",
  },
  {
    id: 2,
    clientName: "Syed Al-Nahiyan",
    clientReview:
      "Truly a smart tech solution for those who want to grow together with an expert and efficient team. Ongshak is a team of highly skilled and dedicated professionals who are passionate about delivering top-notch digital products.",
    clientReview2:
      "Ongshak brings a professional mindset, clear communication, and a strong commitment to building useful digital products.",
    clientDesignation: "CEO, The Physics Guy",
    clientImage: "/images/nahiyan.jpg",
  },
  {
    id: 3,
    clientName: "Ashik Muntakim",
    clientReview:
      "It has been a pleasure working with Ongshak for several of our projects. Ongshak has been a constant support for all of our Tech requirements so far with affordable solutions and great input in our tech products.",
    clientReview2:
      "I would undoubtedly recommend Ongshak for any sort of digital and technological support. Hope to collaborate further in future.",
    clientDesignation: "Chief of Staff, Healthport Bangladesh",
    clientImage: "/images/ashik.png",
  },
];
export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const plugin = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  useEffect(() => {
    if (!api) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative overflow-hidden bg-[#05070d] px-4 py-24 text-white sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#fda109]/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-[#007aff]/15 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.07),transparent_35%)]" />

      <div className="relative container mx-auto">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end mb-4">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-white/80 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFA605] shadow-[0_0_12px_#FFA605]" />
              Testimonials
            </div>

            <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-[#FFA605] via-[#FD7D18] to-[#32C2D8] bg-clip-text text-transparent">
                founders & teams
              </span>
            </h2>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="mx-auto w-full  "
        >
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem key={review.id}>
                <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl sm:p-10">
                  {/* Background Quote */}
                  <Quote className="pointer-events-none absolute right-8 top-8 h-24 w-24 text-white/5 sm:h-32 sm:w-32" />

                  {/* Top Image */}
                  <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border border-white/15 ring-4 ring-[#fda109]/20 sm:h-28 sm:w-28">
                    <Image
                      src={review.clientImage}
                      alt={review.clientName}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>

                  {/* Quote Text */}
                  <div className="mx-auto mt-8 max-w-3xl text-center">
                    <Quote className="mx-auto mb-5 h-9 w-9 text-[#fda109]" />

                    <p className="text-lg leading-8 text-white/85 sm:text-xl sm:leading-9">
                      “{review.clientReview}”
                    </p>

                    {review.clientReview2 && (
                      <p className="mt-5 text-base leading-8 text-white/65 sm:text-lg">
                        “{review.clientReview2}”
                      </p>
                    )}
                  </div>

                  {/* Bottom Right Client Info */}
                  <div className="mt-10 flex justify-end">
                    <div className="text-right">
                      <h3 className="text-lg font-semibold text-white">
                        {review.clientName}
                      </h3>
                      <p className="mt-1 text-sm text-white/55">
                        {review.clientDesignation}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === i
                  ? "w-8 bg-[#fda109]"
                  : "w-2 bg-white/25 hover:bg-white/45"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
