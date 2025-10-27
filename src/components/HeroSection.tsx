import React from "react";
import { useTranslation } from "react-i18next";

// Types
interface ImageCard {
  src: string;
  alt: string;
  className?: string;
}


// Image Card Component
const ImageCard: React.FC<ImageCard> = ({ src, alt, className = "" }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105 hover:z-20 ${className}`}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
    </div>
  );
};

// Hero Section Component
const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const images: ImageCard[] = [
    {
      src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=800&fit=crop",
      alt: "Dubai Marina Architecture",
      className: "w-48 h-72 -rotate-6 translate-y-8",
    },
    {
      src: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=600&h=800&fit=crop",
      alt: "Traditional Middle Eastern Architecture",
      className: "w-56 h-80 -rotate-3 translate-y-4",
    },
    {
      src: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=600&h=900&fit=crop",
      alt: "Modern Iconic Tower",
      className: "w-64 h-96 z-10",
    },
    {
      src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=800&fit=crop",
      alt: "Contemporary Desert Architecture",
      className: "w-56 h-80 rotate-3 translate-y-4",
    },
    {
      src: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&h=800&fit=crop",
      alt: "Cultural Heritage Site",
      className: "w-48 h-72 rotate-z-10 translate-y-8",
    },
  ];

  return (
    <div className="relative min-h-screen opacity-1 w-full bg-gradient-to-br from-[#0F1A2E] to-[#1B1B1B] overflow-hidden flex items-center justify-center">
      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-center space-y-12">
          {/* Text Content */}
          <div className=" absolute  z-50 text-center space-y-6 mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold text-white leading-tight px-4">
              {t("hero.title")}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light tracking-wide">
              {t("hero.subtitle")}
            </p>
          </div>

          {/* Image Gallery - Desktop */}
          <div className="hidden lg:flex items-center justify-center gap-6 perspective-1000">
            {images.map((image, index) => (
              <ImageCard
                key={index}
                src={image.src}
                alt={image.alt}
                className={image.className}
              />
            ))}
          </div>

          {/* Image Gallery - Tablet */}
          <div className="hidden md:flex lg:hidden items-center justify-center gap-4 flex-wrap max-w-4xl">
            {images.slice(0, 4).map((image, index) => (
              <ImageCard
                key={index}
                src={image.src}
                alt={image.alt}
                className="w-40 h-64"
              />
            ))}
          </div>

          {/* Image Gallery - Mobile */}
          <div className="flex md:hidden items-center justify-center gap-3 flex-wrap max-w-md">
            {images.slice(0, 3).map((image, index) => (
              <ImageCard
                key={index}
                src={image.src}
                alt={image.alt}
                className="w-28 h-44"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </div>
  );
};

export default HeroSection;
