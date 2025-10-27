import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ServiceCard } from "./ServiceCard";

interface ServiceData {
  iconSrc: string;
  alt: string;
  title: string;
  description: string;
  features: string[];
}

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();

  const SERVICES: readonly ServiceData[] = [
    {
      iconSrc: "/hotel.png",
      alt: t("services.cards.hotel.alt"),
      title: t("services.cards.hotel.title"),
      description: t("services.cards.hotel.description"),
      features: [
        t("services.cards.hotel.features.0"),
        t("services.cards.hotel.features.1"),
        t("services.cards.hotel.features.2"),
      ],
    },
    {
      iconSrc: "/flight.png",
      alt: t("services.cards.flight.alt"),
      title: t("services.cards.flight.title"),
      description: t("services.cards.flight.description"),
      features: [
        t("services.cards.flight.features.0"),
        t("services.cards.flight.features.1"),
        t("services.cards.flight.features.2"),
      ],
    },
    {
      iconSrc: "/adventure.png",
      alt: t("services.cards.adventure.alt"),
      title: t("services.cards.adventure.title"),
      description: t("services.cards.adventure.description"),
      features: [
        t("services.cards.adventure.features.0"),
        t("services.cards.adventure.features.1"),
        t("services.cards.adventure.features.2"),
      ],
    },
    {
      iconSrc: "/corporate.png",
      alt: t("services.cards.corporate.alt"),
      title: t("services.cards.corporate.title"),
      description: t("services.cards.corporate.description"),
      features: [
        t("services.cards.corporate.features.0"),
        t("services.cards.corporate.features.1"),
        t("services.cards.corporate.features.2"),
      ],
    },
  ];

  const renderServiceCard = useCallback(
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
        {/* Header */}
        <header className="text-center mb-12 sm:mb-16">
          <div className="mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm bg-[#40B5AD33] text-[#40B5AD] font-semibold tracking-widest uppercase border border-[#40B5AD4D] rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
              {t("services.badge")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            {t("services.title")}{" "}
            <span className="text-[#E6C98E] font-bold">
              {t("services.highlight")}
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-[#F4F4F4B2] leading-[33px] max-w-2xl mx-auto px-2">
            {t("services.subtitle")}
          </p>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {SERVICES.map(renderServiceCard)}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
