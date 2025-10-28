import { useTranslation } from "react-i18next";
import ExperienceCard from "./ExperienceCard";
import Button from "./Button";

export default function ExperienceGrid() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const experiences = [
    {
      id: 4,
      title: t("featured.experiences.luxuryYacht.title"),
      description: t("featured.experiences.luxuryYacht.description"),
      price: 2500,
      image: "/experience.png",
    },
    {
      id: 5,
      title: t("featured.experiences.arabianNights.title"),
      description: t("featured.experiences.arabianNights.description"),
      price: 1200,
      image: "/experience.png",
    },
    {
      id: 6,
      title: t("featured.experiences.arabianNights.title"),
      description: t("featured.experiences.arabianNights.description"),
      price: 1200,
      image: "/experience.png",
    },
  ];

  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          {t("featured.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>

        <div
          className={`flex gap-4 justify-center ${
            isRTL ? "flex-row-reverse" : ""
          }`}
        >
          <Button className="text-black font-inter font-bold">
            {t("featured.buttons.viewAll")}
          </Button>
          <button className="px-8 py-3 border border-[#E6C98E] text-[#E6C98E] hover:bg-accent/10 transition rounded-full text-sm font-medium">
            {t("featured.buttons.customPackage")}
          </button>
        </div>
      </div>
    </section>
  );
}
