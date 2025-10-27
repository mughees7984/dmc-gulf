import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
}) => {
  const { t } = useTranslation();
  return (
    <div className="group relative bg-card border border-border rounded-lg p-6 sm:p-8 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
      <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
        <span className="w-[40px] h-[40px] rounded-lg bg-[#40B5AD33] flex items-center justify-center">
          {icon}
        </span>
      </div>

      <h3 className="text-[#F4F4F4] text-lg sm:text-xl font-bold mb-3 line-clamp-2">
        {title}
      </h3>

      <p className="text-[#F4F4F4B2] text-sm sm:text-base mb-6 flex-grow">
        {description}
      </p>

      <div className="space-y-2 sm:space-y-3 mb-6 flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2 sm:gap-3">
            <Check className="w-4 h-4 text-[#E6C98E] sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
            <span className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
              {feature}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 text-[#E6C98E] font-medium text-md sm:text-base group-hover:gap-3 transition-all duration-300 cursor-pointer">
        <span>{t("services.learnMore")}</span>
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
};
