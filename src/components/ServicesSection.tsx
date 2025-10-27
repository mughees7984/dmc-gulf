import React from "react";
import { ServiceCard } from "./ServiceCard";

interface ServiceData {
  iconSrc: string;
  alt: string;
  title: string;
  description: string;
  features: string[];
}

// Moved constants to a separate file or upper level
const SERVICES: readonly ServiceData[] = [
  {
    iconSrc: "/hotel.png",
    alt: "Hotel icon",
    title: "Hotel Reservations",
    description:
      "Access exclusive rates at the Gulf's most prestigious hotels and resorts, from beachfront sanctuaries to urban elegance.",
    features: [
      "5-star luxury properties",
      "Exclusive member rates",
      "24/7 concierge support",
    ],
  },
  {
    iconSrc: "/flight.png",
    alt: "Flight icon",
    title: "Flight Bookings",
    description:
      "Seamless flight arrangements with premium airlines, featuring business class comfort and flexible booking options.",
    features: [
      "Premium airline partnerships",
      "Flexible cancellation",
      "Priority check-in",
    ],
  },
  {
    iconSrc: "/adventure.png",
    alt: "Adventure icon",
    title: "Desert Adventures",
    description:
      "Immersive desert experiences from luxury camping to thrilling activities, showcasing the region's natural beauty.",
    features: [
      "Luxury desert camps",
      "Cultural experiences",
      "Adventure activities",
    ],
  },
  {
    iconSrc: "/corporate.png",
    alt: "Corporate icon",
    title: "Corporate Events",
    description:
      "Professional event management for conferences, incentive trips, and corporate retreats in world-class venues.",
    features: [
      "Event planning expertise",
      "Premium venues",
      "Full-service support",
    ],
  },
] as const;

// Extracted sub-components for better organization
const SectionHeader: React.FC = () => (
  <header className="text-center mb-12 sm:mb-16">
    <div className="mb-4 sm:mb-6">
      <span className="text-xs sm:text-sm bg-[#40B5AD33] text-[#40B5AD] font-semibold tracking-widest uppercase border border-[#40B5AD4D] rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
        Comprehensive Services
      </span>
    </div>
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
      Your Gulf Journey{" "}
      <span className="text-[#E6C98E] font-bold">Simplified</span>
    </h2>
    <p className="text-sm sm:text-base md:text-xl text-[#F4F4F4B2] leading-[33px] max-w-2xl mx-auto px-2">
      From luxury accommodations to bespoke experiences, we handle every detail
      of your Gulf adventure with precision and care.
    </p>
  </header>
);

export const ServicesSection: React.FC = () => {
  const renderServiceCard = React.useCallback(
    ({ iconSrc, alt, title, description, features }: ServiceData) => (
      <ServiceCard
        key={title}
        icon={
          <img
            src={iconSrc}
            alt={alt}
            className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
          />
        }
        title={title}
        description={description}
        features={features}
      />
    ),
    []
  );

  return (
    <section
      id="services"
      className="w-full bg-background py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {SERVICES.map(renderServiceCard)}
        </div>
      </div>
    </section>
  );
};
