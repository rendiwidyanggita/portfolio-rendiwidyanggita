"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useContact } from "@/context/ContactContext";

const carouselImages = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGj9cOuO0hjyPwPsLWU-PoQe4-45xw2RmIPwaRLb5TpuGQgRFU39vSVMEDOE2WhIUrUSIik1MZi3jG8psOtN2D08tyzpCulF3LN6JpnvNfa5ibzuPymynepUmTXSZ5xCWJT7fePmJ9mI4HKlDC4ZumAsUvM7dWzjdDTEsEdM8SVAqAQpBX3t-spvDEs29BMC84mlEQOFGMs4-MRFBWUNoRo6HHgHhegTGA6HqXsfXObCAL5Tx0BfWxNt35CY3te7LsQ6p4GvnOJxYR",
    alt: "DevFlow Dashboard",
    slug: "devflow",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAWOHd9TE0Yx1aKKy-E18Vd03NcE0tUT2mW_RPAhIreXrrbBzAZ8bKyflR3Meklr8xZClbke6GQh-zLcBGRIERjUWIrnZlCx3BbTq_Gl3pkg0UhIU3v-oEnZO69cpuVm7rCt6g3wTT8NpgMuFvs65C1YJggN37ncWUeNgSRmQ1PiwvAeYPfKacr4YzRXMVvJFQoffbuoYo6KKjg4J26ch-BgonO4X5Ln3HPar0OYUjHS9n58ZX5yN5sn2yHcAGUTbU8CQXeh9u1Ez0",
    alt: "Apex QA Portal",
    slug: "apex-qa",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuWAyMior6dwGFeJyvN8XiN7rRix9-W1E90gz7u8etVOk_a0WC64qRC5ka4sUVsnUglr319-XWK-JQvH6gFQdLGsrgMjcUbZYbjMMVXnC7sRp-9CBWzEjCReP7hlyud-IzHR5KhfDJS2xJWIJ0GWfzyhwvqbYuOekKlSqqjkd59DQi-tIXgsOMGyBSOzguua1hiECH7x7ZYeeAqH-iYZA8uKx-jlA2gKtNXGqHhU-VHg7QQpGOtB6Xf-mzpxKElQc4haGLFFuNcpwV",
    alt: "Aura E-commerce",
    slug: "aura-ecommerce",
  },
];

export default function HomeHero() {
  const { open } = useContact();
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startCarousel = () => {
    stopCarousel();
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);
  };

  const stopCarousel = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startCarousel();
    return () => stopCarousel();
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    startCarousel(); // Restart the timer
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center min-h-[60vh] py-12 md:py-24">
      <div className="space-y-8 order-2 lg:order-1 z-10">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-extrabold tracking-tight text-on-surface leading-tight">
            Fullstack Web Developer <span className="text-primary">&amp;</span> QA
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant font-body max-w-xl leading-relaxed">
            Expert in fullstack web development, database design, and functional testing. Building robust, scalable, and user-centric digital experiences.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 pt-4">
          <button
            onClick={open}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#3B82F6] hover:bg-blue-600 text-white font-label font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Get in touch
          </button>
          <Link
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-surface-container-low text-on-surface font-label font-medium hover:bg-surface-container transition-colors border border-outline-variant/30"
            href="#projects"
          >
            View Projects
          </Link>
        </div>
      </div>
      {/* Auto-sliding Carousel */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl bg-surface-container order-1 lg:order-2 group">
        <div className="w-full h-full relative" id="hero-carousel">
          {carouselImages.map((image, index) => (
            <Link
              key={image.slug}
              href={`/projects/${image.slug}`}
              className={`absolute inset-0 w-full h-full block transition-opacity duration-500 hover:scale-102 transition-transform duration-500 ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                alt={image.alt}
                fill
                sizes="(max-w-7xl) 100vw, 50vw"
                priority={index === 0}
                className="object-cover"
                src={image.src}
              />
            </Link>
          ))}
        </div>
        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-black/20 backdrop-blur-sm px-3 py-2 rounded-full">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              aria-label={`Slide ${index + 1}`}
              onClick={() => handleDotClick(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-4 h-2 bg-white" : "w-2 h-2 bg-white/50 hover:bg-white/80"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
