import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Experience {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  tag?: string;
}

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <div
      className="group bg-card border border-border/20 rounded-lg overflow-hidden hover:border-accent/50 transition"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={experience.image || "/placeholder.svg"}
          alt={experience.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
        {experience.tag && (
          <div
            className={`absolute top-4 ${
              isRTL ? "right-4" : "left-4"
            } px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded`}
          >
            {experience.tag}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{experience.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          {experience.description}
        </p>

        <div
          className={`flex items-center justify-between ${
            isRTL ? "flex-row-reverse" : ""
          }`}
        >
          <div className={isRTL ? "text-right" : "text-left"}>
            <p className="text-xs text-muted-foreground">
              {t("featured.startingFrom")}
            </p>
            <p className="text-2xl font-bold text-accent">
              ${experience.price}
            </p>
          </div>

          {/* Rotate arrow for RTL */}
          <ArrowRight
            color="#40B5AD"
            className={isRTL ? "transform rotate-180" : ""}
          />
        </div>
      </div>
    </div>
  );
}
