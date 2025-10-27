import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight, Star, ArrowRight } from "lucide-react";
import Button from "./Button";

// =======================
// Types
// =======================
interface Destination {
  id: number;
  name: string;
  country: string;
  description: string;
  rating: number;
  experiences: number;
  image: string;
  badge?: "Featured" | "Popular";
}

// =======================
// DestinationCard Component
// =======================
const DestinationCard: React.FC<{ destination: Destination }> = ({
  destination,
}) => (
  <article
    className="relative group flex-shrink-0 w-80 h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 transition-transform duration-300 hover:scale-105"
    aria-label={`${destination.name}, ${destination.country}`}
  >
    {/* Background Image */}
    <div className="absolute inset-0">
      <img
        src={destination.image}
        alt={`${destination.name} destination`}
        className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
    </div>

    {/* Badge */}
    {destination.badge && (
      <div className="absolute top-4 right-4 z-10">
        <span
          className={`px-4 py-1 rounded-full text-sm font-medium ${
            destination.badge === "Featured"
              ? "bg-[#E6C98E33] text-[#E6C98E]"
              : "bg-[#40B5AD4D] text-[#40B5AD]"
          }`}
        >
          {destination.badge}
        </span>
      </div>
    )}

    {/* Content */}
    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
      <h3 className="text-2xl font-bold text-white mb-2">
        {destination.name}, {destination.country}
      </h3>
      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
        {destination.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-white font-medium">{destination.rating}</span>
          </div>
          <span className="text-gray-400 text-sm">
            {destination.experiences} experiences
          </span>
        </div>

        <button
          aria-label={`View details for ${destination.name}`}
          className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors group-hover:bg-amber-400 group-hover:text-black"
        >
          <ArrowRight className="w-4 h-4 text-white group-hover:text-black" />
        </button>
      </div>
    </div>
  </article>
);

// =======================
// DestinationsSection Component
// =======================
const DestinationsSection: React.FC = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Destinations localized
  const destinations: Destination[] = [
    {
      id: 1,
      name: t("destinations.cards.doha.name"),
      country: t("destinations.cards.doha.country"),
      description: t("destinations.cards.doha.description"),
      rating: 4.9,
      experiences: 127,
      image:
        "https://images.unsplash.com/photo-1549144511-f099e773c147?w=800&h=1000&fit=crop",
      badge: t("destinations.cards.doha.badge") as "Featured",
    },
    {
      id: 2,
      name: t("destinations.cards.dubai.name"),
      country: t("destinations.cards.dubai.country"),
      description: t("destinations.cards.dubai.description"),
      rating: 4.8,
      experiences: 203,
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=1000&fit=crop",
      badge: t("destinations.cards.dubai.badge") as "Popular",
    },
    {
      id: 3,
      name: t("destinations.cards.abuDhabi.name"),
      country: t("destinations.cards.abuDhabi.country"),
      description: t("destinations.cards.abuDhabi.description"),
      rating: 4.7,
      experiences: 89,
      image:
        "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&h=1000&fit=crop",
    },
    {
      id: 4,
      name: t("destinations.cards.riyadh.name"),
      country: t("destinations.cards.riyadh.country"),
      description: t("destinations.cards.riyadh.description"),
      rating: 4.6,
      experiences: 156,
      image:
        "https://images.unsplash.com/photo-1591608971362-f08b2a75731a?w=800&h=1000&fit=crop",
    },
  ];

  const handlePrev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? destinations.length - 1 : prev - 1
    );

  const handleNext = () =>
    setCurrentIndex((prev) =>
      prev === destinations.length - 1 ? 0 : prev + 1
    );

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <span className="bg-[#8A15384D] rounded-full px-3 py-3 font-inter text-[#E6C98E] text-xs font-medium tracking-[0.3em] uppercase">
            {t("destinations.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 mt-4">
            {t("destinations.title")}
          </h2>
          <p className="text-[#F4F4F4B2] font-inter font-normal text-base md:text-lg max-w-3xl mx-auto">
            {t("destinations.subtitle")}
          </p>
        </header>

        {/* Carousel */}
        <div className="relative">
          <button
            onClick={handlePrev}
            aria-label="Previous destination"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors -translate-x-6"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next destination"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors translate-x-6"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="overflow-hidden px-8">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 344}px)` }}
            >
              {destinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <Button className="px-6 py-3 text-black text-sm font-inter font-bold">
            {t("destinations.button")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
