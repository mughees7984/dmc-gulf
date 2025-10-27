import Button from "./Button";
import { useTranslation } from "react-i18next";

export default function NewsletterUI() {
  const { t, i18n } = useTranslation();

  // Extract translation section
  const {
    badge,
    title,
    highlight,
    subtitle,
    placeholder,
    button,
    note,
    features,
  } = t("newsletter", { returnObjects: true }) as any;

  return (
    <section
      className={`py-20 px-4 bg-background ${
        i18n.language === "ar" ? "rtl text-right" : "ltr text-left"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="bg-[#E6C98E33] rounded-full px-3 py-3 font-inter text-[#E6C98E] text-xs font-normal tracking-[0.3em] uppercase">
            {badge}
          </span>
          <h2 className="text-4xl text-[#F4F4F4] md:text-5xl font-bold mb-4 mt-6">
            {title}{" "}
            <span className="text-[#40B5AD] font-bold">{highlight}</span>
          </h2>
          <p className="text-[#F4F4F4CC] font-inter font-normal max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Email Subscription Form */}
        <div className="relative w-[1000px] h-[200px] left-[10%] bg-[#0D0D0D80] mb-10 rounded-lg border border-[#E6C98E33]">
          <div className="absolute top-[20%] left-[20%] max-w-2xl mx-auto">
            <form className="flex gap-3 mb-4">
              <input
                type="email"
                placeholder={placeholder}
                className="flex-1 px-4 py-3 bg-[#1B1B1B80] border border-[#E6C98E4D] rounded-lg text-foreground placeholder:text-[#ADAEBC] placeholder:font-inter focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="rounded-lg px-10 text-[#0D0D0D] font-bold font-inter">
                {button}
              </Button>
            </form>
            <p className="text-lg text-[#F4F4F499] text-center">{note}</p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature: any, index: number) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#E6C98E33] border border-[#E5E7EB] flex items-center justify-center">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-6 h-6 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-lg font-inter font-semibold mb-2 text-[#F4F4F4]">
                {feature.title}
              </h3>
              <p className="text-sm font-inter text-[#F4F4F499]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
