import { useTranslation } from "react-i18next";
import ExperienceCard from "./ExperienceCard";
import Button from "./Button";

export default function FeaturedExperiences() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const featured = [
    {
      id: 1,
      title: t("featured.experiences.luxuryYacht.title"),
      description: t("featured.experiences.luxuryYacht.description"),
      price: 2500,
      image: "/moments.png",
      tag: t("featured.tags.featured"),
      size: "large",
    },
    {
      id: 2,
      title: t("featured.experiences.february.title"),
      description: t("featured.experiences.february.description"),
      price: 1800,
      image: "/experience.png",
      tag: t("featured.tags.seasonal"),
      size: "small",
    },
    {
      id: 3,
      title: t("featured.experiences.royalSea.title"),
      description: t("featured.experiences.royalSea.description"),
      price: 3200,
      image: "/experience.png",
      tag: t("featured.tags.exclusive"),
      size: "small",
    },
  ];

  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
          {t("featured.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large featured card on left */}
          <div className="md:col-span-2">
            <FeaturedLargeCard experience={featured[0]} isRTL={isRTL} />
          </div>

          {/* Stacked smaller cards on right */}
          <div className="flex flex-col gap-6">
            <ExperienceCard experience={featured[1]} />
            <ExperienceCard experience={featured[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedLargeCard({
  experience,
  isRTL,
}: {
  experience: any;
  isRTL?: boolean;
}) {
  const { t } = useTranslation();

  return (
    <div className="group bg-card border border-border/20 rounded-lg overflow-hidden hover:border-accent/50 transition h-full">
      <div className="relative h-64 overflow-hidden bg-muted">
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
        <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
        <p className="text-sm text-muted-foreground mb-6">
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
            <p className="text-3xl font-bold text-accent">
              ${experience.price}
            </p>
          </div>

          <Button>{t("cta.bookNow")}</Button>
        </div>
      </div>
    </div>
  );
}
